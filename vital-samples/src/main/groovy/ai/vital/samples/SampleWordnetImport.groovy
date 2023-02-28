package ai.vital.samples

import com.vitalai.domain.wordnet.Edge_hasWordnetPointer
import com.vitalai.domain.wordnet.SynsetNode
//import ai.vital.service.allegrograph.model.AllegrographSegment
//import ai.vital.service.lucene.model.LuceneVitalSegment
import ai.vital.vitalservice.admin.VitalServiceAdmin
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalSegment
import ai.vital.vitalsigns.block.BlockCompactStringSerializer
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.BlockIterator
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject

import ai.vital.vitalservice.EndpointType
//import ai.vital.indexeddb.service.model.IndexedDBVitalSegment

import ai.vital.lucene.model.LuceneSegmentType

import ai.vital.vitalservice.factory.VitalServiceFactory


class SampleWordnetImport {

	static void o(String m) {System.out.println(m);}
	
	static int BATCH_SIZE = 1000
	
	static main(args) {
	
		if(args.length != 2) {
			o("usage: runWordnetImport <service_profile> <input_block>")
			o("       input block name must end with .vital or .vital.gz")
			return
		}
		
		String profile = args[0]
		println "Service profile: ${profile}"
		
		VitalServiceFactory.setServiceProfile(profile)

		
		File inputBlock = new File(args[1])
		println "Input block file: ${inputBlock.absolutePath}"
		
		println "Getting service instance..."
		
		VitalServiceAdmin service = VitalServiceFactory.getVitalServiceAdmin()
		
		println "Service instance: ${service}"
		
		BlockIterator iterator = null
		
		VitalApp defaultApp = new VitalApp(name:'haley-saas')
		
		boolean appexists = false
		
		for(VitalApp app : service.listApps()) {
			if(app.name == defaultApp.name) {
				appexists = true
				break
			}
		}
		
		if(!appexists) {
			
			println "Haley App does not exist, exiting..."
			
			System.exit(0)
			
		}
		
		// if(!appexists) {
		// 	println "Default app does not exist - adding..."
		// 	service.addApp(defaultApp)
		// } else {
		// 	println "Default app already exists"
		// }
		
		VitalSegment wordnetSegment = null
		
		for(VitalSegment segment : service.listSegments(defaultApp)) {
			if(segment.name == 'wordnet') {
				wordnetSegment = segment
				break
			}
		}
		
		if(wordnetSegment == null) {
			
			println "Wordnet segment does not exist, exiting..."
			
			System.exit(0)
			
		}
		
		// if(existing != null) {
		// 	println "Existing wordnet segment found - removing..."
		// 	service.removeSegment(defaultApp, existing, true)
		// }
		
		
		
		// println "Creating new wordnet segment..."
		
		/*
		if(service.endpointType == EndpointType.ALLEGROGRAPH) {
			existing = new AllegrographSegment()
			existing.appID = defaultApp.ID
			existing.ID = 'wordnet'
			existing.readOnly = false
			
		}
		*/
		/*
		if(service.endpointType == EndpointType.INDEXDB) {
			existing = new IndexedDBVitalSegment()
			existing.appID = defaultApp.ID
			existing.ID = 'wordnet'
			existing.readOnly = false
			
		}
		*/
		
		/*
		if(service.endpointType == EndpointType.LUCENEDISK) {
			existing = new LuceneVitalSegment()
			existing.appID = defaultApp.ID
			existing.ID = 'wordnet'
			existing.readOnly = false
			existing.type = LuceneSegmentType.disk
			existing.storeObjects = true
			
		}
		*/
		
		/*
		
		if(service.endpointType == EndpointType.LUCENEMEMORY) {
			existing = new LuceneVitalSegment()
			existing.appID = defaultApp.ID
			existing.ID = 'wordnet'
			existing.readOnly = false
			existing.storeObjects = true
			existing.type = LuceneSegmentType.memory
			
		}
		
		*/
		
		// service.addSegment(defaultApp, existing, true)
		
		
		println "Inserting wordnet data - ${BATCH_SIZE} objects per batch"
		
		int nodes = 0
		int edges = 0
		int skipped = 0
		List<GraphObject> batch = new ArrayList<GraphObject>()
		
		int inserted = 0;
		
		try {
			
			for( iterator = BlockCompactStringSerializer.getBlocksIterator(inputBlock); iterator.hasNext(); ) {
				
				VitalBlock block = iterator.next()
				
				List<GraphObject> objects = [block.getMainObject()]
				objects.addAll(block.getDependentObjects())
				
				for(GraphObject g : objects) {
					
					if(g instanceof SynsetNode) {
						nodes++
					} else if(g instanceof Edge_hasWordnetPointer) {
						edges++
					} else {
						skipped++
						continue
					}
					
					batch.add(g)
					
				}
				
				if(batch.size() >= BATCH_SIZE) {
					
					service.insert(defaultApp, wordnetSegment, batch)
					
					inserted += batch.size()
					
					println ("inserted: ${inserted}")
					
					batch.clear()
					
				}
				
			}
			
			if(batch.size() > 0) {
				
				service.insert(defaultApp, wordnetSegment, batch)
				
			}
			
			inserted += batch.size()
			
			println ("total objects inserted: ${inserted}")
			
		} finally {
			if(iterator != null) iterator.close()
			service.close()
		}
		
		println "DONE, nodes: ${nodes}, edges: ${edges}, skipped: ${skipped}"
		
	}
		
		
		
	}


