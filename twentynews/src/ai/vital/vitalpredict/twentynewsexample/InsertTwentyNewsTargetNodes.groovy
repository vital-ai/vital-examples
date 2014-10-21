/*******************************************************************************
 * Copyright 2014 by Vital AI, LLC . All rights reserved.
 *
 * This software may only be used under a commercial license agreement obtained by Vital AI, LLC.
 * Vital AI, LLC may be contacted via: legal@vital.ai
 * or via contact information found at the web address: http://vital.ai/contact.html
 ******************************************************************************/
package ai.vital.vitalpredict.twentynewsexample

import ai.vital.common.uri.URIGenerator;
import ai.vital.domain.CategorizationModel;
import ai.vital.domain.Edge_hasTargetNode;
import ai.vital.domain.TargetNode;
import ai.vital.vitalservice.model.App
import ai.vital.vitalsigns.VitalSigns;
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.URIPropertyValue
import ai.vital.vitalsigns.utils.BlockCompactStringSerializer;
import ai.vital.vitalsigns.utils.BlockCompactStringSerializer.VitalBlock;

import java.util.zip.GZIPInputStream
import java.util.zip.GZIPOutputStream

import org.example.twentynews.TwentyNewsDocument;

class InsertTwentyNewsTargetNodes {

	static main(args) {
	
		if(args.length != 3) {
			println 'Usage: insert_twentynews_target_nodes <input_twentynews_block_file> <modelURI> <output_twentynews_block_file>'
			return
		}
		
		App app = new App()
		app.customerID = 'customer'
		app.ID = 'twentynews'
		
		File inputFile = new File(args[0])
		println "Input file: ${inputFile.absolutePath}"
		
		String modelURI = args[1];
		println "Model URI: ${modelURI}"
		
		
		File outputFile = new File(args[2])
		println "Output file: ${outputFile.absolutePath}"
		
		
		CategorizationModel catModel = null;
		for(CategorizationModel m : VitalSigns.get().listDomainIndividuals(CategorizationModel.class, null)) {
			if(m.URI == modelURI) {
				catModel = m;
				break;
			}
		}
		
		if(catModel == null) {
			println "Model with URI: ${modelURI} not found"
			return;
		}
		
		InputStream inputStream = new FileInputStream(inputFile);
		if(inputFile.name.endsWith('.gz')) inputStream = new GZIPInputStream(inputStream)
		
		OutputStream os = new FileOutputStream(outputFile);
		if(outputFile.name.endsWith('.gz')) os = new GZIPOutputStream(os);
		BlockCompactStringSerializer writer = new BlockCompactStringSerializer(new OutputStreamWriter(os));
		
		int counter = 0;
		
		for( VitalBlock block : BlockCompactStringSerializer.getBlocksIterator(new BufferedReader(new InputStreamReader(inputStream, 'UTF-8'))) ) {
			
			GraphObject g = block.mainObject
			
			if( !( g instanceof TwentyNewsDocument) || block.dependentObjects.size() > 0 ) throw new RuntimeException("Expected a block with exactly one object of type: ${TwentyNewsDocument.class.canonicalName}" )
			
			String newsGroup = ((TwentyNewsDocument)g).newsGroup
			if(!newsGroup) throw new RuntimeException("No newsgroup for document: " + g.URI)
			
			
			TargetNode targetNode = new TargetNode()
			targetNode.URI = URIGenerator.generateURI(app, TargetNode.class)
			targetNode.targetScore = 1d
			targetNode.modelURI = new URIPropertyValue(modelURI);
			targetNode.targetNewsGroup = newsGroup
			
			Edge_hasTargetNode edge = new Edge_hasTargetNode();
			edge.URI = URIGenerator.generateURI(app, Edge_hasTargetNode.class)
			edge.sourceURI = g.URI
			edge.destinationURI	= targetNode.URI
			
			
			writer.startBlock()
			writer.writeGraphObject(g)
			writer.writeGraphObject(targetNode)
			writer.writeGraphObject(edge)
			writer.endBlock();
			
			counter++;
			
		}
		
		writer.close();
		
		println "Block processed: ${counter}"
	}

}

