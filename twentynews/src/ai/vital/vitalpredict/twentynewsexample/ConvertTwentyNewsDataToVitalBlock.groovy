/*******************************************************************************
 * Copyright 2014 by Vital AI, LLC . All rights reserved.
 *
 * This software may only be used under a commercial license agreement obtained by Vital AI, LLC.
 * Vital AI, LLC may be contacted via: legal@vital.ai
 * or via contact information found at the web address: http://vital.ai/contact.html
 ******************************************************************************/

package ai.vital.vitalpredict.twentynewsexample

import java.util.zip.GZIPInputStream
import java.util.zip.GZIPOutputStream

import org.apache.commons.compress.archivers.ArchiveEntry;
import org.apache.commons.compress.archivers.tar.TarArchiveInputStream;
import org.example.twentynews.TwentyNewsDocument;

import ai.vital.common.uri.URIGenerator;
import ai.vital.vitalservice.model.App
import ai.vital.vitalsigns.utils.BlockCompactStringSerializer;

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
		
		TarArchiveInputStream inputStream = new TarArchiveInputStream(new GZIPInputStream(new FileInputStream(inputTarGZ)))
		
		OutputStream os = new FileOutputStream(blockFile)
		if(blockFile.name.endsWith(".gz")) os = new GZIPOutputStream(os);
		BufferedWriter w = new BufferedWriter(new OutputStreamWriter(os, 'UTF-8'));
		BlockCompactStringSerializer writer = new BlockCompactStringSerializer(w)
		
		ArchiveEntry entry = null
		
		App app = new App()
		app.customerID = 'customer'
		app.ID = 'twentynews'
		
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
			def doc = new TwentyNewsDocument()
			doc.URI = URIGenerator.generateURI(app, TwentyNewsDocument.class, "${newsgroup}__${id}");
			doc.title = subject
			doc.body = body
			doc.newsGroup = 'http://vital.ai/twentynews/Category/' + newsgroup;
			
			writer.startBlock();
			writer.writeGraphObject(doc);
			writer.endBlock();
			
			
			
		}
		
		writer.close();
		
		inputStream.close()
			
	}

}
