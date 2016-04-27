package ai.vital.enron.js.app.handlers

import org.example.enrondata.domain.Edge_hasDirectRecipient
import org.example.enrondata.domain.Edge_hasSender

import ai.vital.enron.js.app.EnronAppVerticle
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.service.vertx3.handler.CallFunctionHandler
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.exception.VitalServiceException
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException
import ai.vital.vitalservice.query.ResultElement
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalGraphQuery
import ai.vital.vitalsigns.model.GraphMatch
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalOrganization
import ai.vital.vitalsigns.model.property.IProperty
import ai.vital.vitalsigns.model.property.URIProperty

class EnronGetMessagesHandler implements CallFunctionHandler {

	static VitalBuilder builder = new VitalBuilder()
	
	static String enron_get_messages = 'enron-get-messages'
	
	@Override
	public ResultList callFunction(VitalOrganization organization, VitalApp app,
			String function, Map<String, Object> params, Map<String, Object> sessionParams)
			throws VitalServiceUnimplementedException, VitalServiceException {

		String uri = params.get('URI')
		
		if(!uri) throw new RuntimeException("No 'URI' parameter")
		
		String type = params.get('mailbox')
		
		if(!type) throw new RuntimeException("No 'mailbox' parameter")
		
		def offset = params.get('offset')
		
		def limit = params.get('limit')

		if(offset == null) throw new RuntimeException("No 'offset' param")
		
		if(offset instanceof Integer ) {
		} else if(offset instanceof Long) {
			offset = ((Long)offset).intValue()
		} else {
			throw new RuntimeException("'offset' must be an integer/long")
		}
		
		
		if(limit == null) throw new RuntimeException("No 'limit' param")
		
		if(limit instanceof Integer ) {
		} else if(offset instanceof Long) {
			limit = ((Long)limit).intValue()
		} else {
			throw new RuntimeException("'limit' must be an integer/long")
		}
		
		VitalGraphQuery vgq = null
		
		if(type == 'inbox') {
			
			vgq = builder.query {
				
				GRAPH {
					
					value inlineObjects: true
					value segments: [EnronAppVerticle.enronSegment]
							
					value offset: offset
					value limit: limit
							
					//top arc
					ARC {
						
						node_constraint { "URI eq $uri" }
					
						//recipient
						ARC {
								
							value direction: "reverse"
									
							edge_constraint { Edge_hasDirectRecipient.class }
							
						}
						
					}
					
				}
				
			}.toQuery()
			
			
		} else if(type == 'outbox') {
			
			vgq = builder.query {
				
				GRAPH {
					
					value inlineObjects: true
					value segments: [EnronAppVerticle.enronSegment]
							
					value offset: offset
					value limit: limit
							
					//top arc
					ARC {
						
						node_constraint { "URI eq $uri" }
						
						//senders
						ARC {
							
							value direction: "reverse"
								
							edge_constraint { Edge_hasSender.class }
				
						}
						
					}
					
				}
				
				
			}.toQuery()
			
		} else throw new RuntimeException("Unknown type: ${type}")
				
		
		Map<String, GraphObject> results = new LinkedHashMap<String, GraphObject>()
		
		ResultList graphResults = EnronAppVerticle.serviceInstance.query(vgq)
		
		ResultList rl = new ResultList()
					
		if(graphResults.status.status != VitalStatus.Status.ok) {
			return graphResults
		}
			
			
		for(GraphMatch gm : graphResults) {
				
			Map<String, IProperty> propsMap = gm.getPropertiesMap()
						
			for(IProperty p : gm.getPropertiesMap().values()) {
				p = p.unwrapped()
				if(p instanceof URIProperty) {
					String u = ((URIProperty)p).get()
									
					if(results.containsKey(u)) continue
					
					Object de = gm.getProperty(u)
					if(de instanceof GraphObject) {
						if(de != null) results.put(de.URI, de)
					}
								
				}
				
			}
		}
		
		for(GraphObject r : results.values()) {
			rl.getResults().add(new ResultElement(r, 1D))
		}
		
		return rl;
		
	}

}
