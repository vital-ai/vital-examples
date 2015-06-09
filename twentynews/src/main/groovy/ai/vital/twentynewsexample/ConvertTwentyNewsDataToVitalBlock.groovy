/*******************************************************************************
 * Copyright 2015 by Vital AI, LLC . All rights reserved.
 *
 * This software may only be used under a commercial license agreement obtained by Vital AI, LLC.
 * Vital AI, LLC may be contacted via: legal@vital.ai
 * or via contact information found at the web address: http://vital.ai/contact.html
 ******************************************************************************/

package ai.vital.twentynewsexample

import java.util.zip.GZIPInputStream
import java.util.zip.GZIPOutputStream

import org.apache.commons.compress.archivers.ArchiveEntry;
import org.apache.commons.compress.archivers.tar.TarArchiveInputStream;
import org.example.twentynews.domain.Message;
import org.example.twentynews.domain.ontology.Ontology;

import ai.vital.domain.Edge_hasCategory
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.model.App
import ai.vital.vitalservice.query.VitalPathQuery
import ai.vital.vitalsigns.VitalSigns;
import ai.vital.vitalsigns.block.BlockCompactStringSerializer;
import ai.vital.vitalsigns.model.Edge_hasChildCategory;
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VITAL_Category
import ai.vital.vitalsigns.model.property.URIProperty;



class ConvertTwentyNewsDataToVitalBlock {

	static main(args) {

		if(args.length != 2) {
			println 'usage: convert_twentynews_to_vitalblock <input_twentynews_tar_gz_file> <output_vital_block_file>'
			return
		}
		
		File inputTarGZ = new File(args[0])
		File blockFile = new File(args[1])
		
		println "Input twenty news tar.gz: ${inputTarGZ.absolutePath}"
		println "Output block file: ${blockFile.absolutePath}"

		
		
		String taxonomyRoot = Ontology.NS + "Taxonomy"
		
		println("Checking 20news taxonomy, URI: " + taxonomyRoot)
		
		GraphObject root = VitalSigns.get().getIndividual(taxonomyRoot)
		if(root == null) {
		  System.err.println("Taxonomy root not found: " + taxonomyRoot)
		  return
		}
		
		if(!(root instanceof VITAL_Category)) {
		  System.err.println("Taxonomy root is not an instance of " + VITAL_Category.class.getCanonicalName)
		  return
		}
		
		def query = getTaxonomyPathQuery(root.getURI())
		
		def categoriesResults = VitalSigns.get().query(query)
		
		if(categoriesResults.getStatus().getStatus() != VitalStatus.Status.ok) {
		  System.err.println("taxonomy query error: " + categoriesResults.getStatus().getMessage() )
		  return
		}
		
		
				
		TarArchiveInputStream inputStream = new TarArchiveInputStream(new GZIPInputStream(new FileInputStream(inputTarGZ)))
		
		OutputStream os = new FileOutputStream(blockFile)
		if(blockFile.name.endsWith(".gz")) os = new GZIPOutputStream(os);
		BufferedWriter w = new BufferedWriter(new OutputStreamWriter(os, 'UTF-8'));
		BlockCompactStringSerializer writer = new BlockCompactStringSerializer(w)
		
		ArchiveEntry entry = null
		
		//for uri generator
		VitalSigns.get().setCurrentApp(new App(ID:'twentynews'))				

		
		int c = 0
		
		while( ( entry = inputStream.getNextEntry() ) ) {
			
			if(entry.isDirectory()) continue
		
			String name = entry.getName()
			
			String[] chunks = name.split("/")
			
			if(chunks.length != 3) throw new RuntimeException("Expected exactly 3 chunks in archived file path: ${name}")
			
			String mainDir = chunks[0]
			String newsgroup = chunks[1]
			String id = chunks[2]
			
			if( ! ( mainDir == '20news-bydate-test' || mainDir == '20news-bydate-train') ) throw new RuntimeException("Expected the main directory name to be one of: '20news-bydate-test', '20news-bydate-train': ${name}")
			
//			println name
			
			BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
			
			boolean inBody = false
			
			boolean inSubject = false;
			
			String subject = ""
			String body = ""
			
			for (String line = reader.readLine(); line != null; line = reader.readLine()) {
				
				//extract title ( subject ) and body
				if(line.isEmpty()) {
					if(!inBody) {
						inSubject = false;
						inBody = true
						continue
					}
				} 
				
				if(inBody) {
					if(body.length() > 0) body += "\n"
					body += line
					continue
				}
				
				if(line.startsWith("Subject:")) {
					inSubject = true
					subject += line.substring("Subject:".length()).trim()
				} else if(inSubject && line.startsWith(" ")) {
					subject += "\n"
					subject += line
				} else {
					inSubject = false
				}
				
			}
			
			//don't close reader
			def doc = new Message()
			doc.generateURI("${newsgroup}__${id}");
			doc.name = "twentynews-${id}"
			doc.subject = subject
			doc.body = body
			
			String categoryURI = Ontology.NS + newsgroup
			
			VITAL_Category category = categoriesResults.get(categoryURI)
			
			if(category == null) {
			  System.err.println("Newsgroup category not found: " + categoryURI)
			  return
			}
			
			
			Edge_hasCategory categoryEdge = new Edge_hasCategory()
				.addSource(doc).addDestination(category).generateURI()
			
			
			writer.startBlock();
			writer.writeGraphObject(doc);
			writer.writeGraphObject(categoryEdge);
			writer.endBlock();
			
			
			c++
			
		}
		
		writer.close();
		
		inputStream.close()
		
		println "DONE, iterated $c messages"
			
	}

	public static VitalPathQuery getTaxonomyPathQuery(String rootCategoryURI) {
		
		VitalPathQuery vpq = new VitalBuilder().query {
			
			PATH {
				
				value segments: '*'
				
				value maxdepth: '*'
				
				ARC {
					
					value direction: 'forward'
					
					edge_constraint { Edge_hasChildCategory.class }
					
					node_constraint { VITAL_Category.class }
					
				}
				
			}
			
		}.toQuery()
		
		vpq.setRootURIs([URIProperty.withString(rootCategoryURI)])
		
		return vpq
		
	}
}
