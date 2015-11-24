package ai.vital.app.template

import ai.vital.query.Direction;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalService
import ai.vital.vitalservice.factory.VitalServiceFactory


import ai.vital.vitalservice.query.ResultElement
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalGraphQueryPropertyCriterion
import ai.vital.vitalservice.query.VitalSelectQuery
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalSegment
import ai.vital.vitalsigns.model.VitalServiceKey;
import ai.vital.vitalservice.query.VitalGraphQuery
import ai.vital.domain.*
import com.vitalai.domain.wordnet.*


class AppTemplate {

	public static void main(String[] args) {
		
		if(args.length != 2) {
			System.err.println "usage: <service_profile> <service_key>"
			return
		}
		
		String profile = args[0]
		String keyString = args[1]

		VitalServiceKey key = new VitalServiceKey().generateURI((VitalApp) null)
		key.key = keyString
		
		println "Service key: $keyString"		
		println "Service profile: $profile"
		
		VitalService service = VitalServiceFactory.openService(key, profile)
		
		service.ping()
		
		// assuming wordnet data loaded into vitalservice segment "wordnet"
		
		
		String apple_uri = ""
		
		def builder = new VitalBuilder()
		
		VitalSelectQuery sq = builder.query {
			
			SELECT {
		
				value segments: [VitalSegment.withId('wordnet')]
				value offset: 0 
				value limit: 10 
						
				node_constraint { NounSynsetNode.class }
				node_constraint { NounSynsetNode.props().name.equalTo_i( 'apple' ) }
				
			}
			
		}.toQuery()
		
		
		ResultList rl = service.query(sq)
		
		println "select query status: ${rl.status}"
		println "select query results:"
		
		for(ResultElement r : rl.results) {
			
			apple_uri = r.graphObject.URI
			
			println(r.graphObject)
			
			//println ( r.graphObject.toJSON() )
			
		}
		
		
		VitalGraphQuery gq = builder.query {
			
			GRAPH {
			
				value segments: [VitalSegment.withId('wordnet')]
				
				ARC {
					
					node_constraint { "URI eq <${apple_uri}>" }
					
					ARC_OR {
						
						ARC {
							
							value direction: 'forward'
							
						}
						
						ARC {
							
							value direction: 'reverse'
							
						}
						
					}
					
				}
					
			}
		}.toQuery()
		
		rl = service.query(gq)
		
		println "graph query status: ${rl.status}"
		println "graph query results:"
		
		for(ResultElement r : rl.results) {
			
			println(r.graphObject)
			
			//println ( r.graphObject.toJSON() )
				
		}
		
	}
		
		
		
			
	
	
}
