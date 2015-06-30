package ai.vital.enron.js.app.handlers

import org.example.enrondata.domain.Edge_hasDirectRecipient
import org.example.enrondata.domain.Edge_hasSender
import org.example.enrondata.domain.EnronEmail
import org.example.enrondata.domain.EnronPerson

import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.service.vertx.handler.CallFunctionHandler
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.exception.VitalServiceException
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException
import ai.vital.vitalservice.factory.VitalServiceFactory
import ai.vital.vitalservice.model.App
import ai.vital.vitalservice.model.Organization
import ai.vital.vitalservice.query.ResultElement
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalGraphQuery
import ai.vital.vitalsigns.meta.GraphContext
import ai.vital.vitalsigns.model.GraphMatch
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.vitalsigns.model.property.IProperty
import ai.vital.vitalsigns.model.property.URIProperty

class EnronGetDetailsHandler implements CallFunctionHandler {

	static VitalBuilder builder = new VitalBuilder()
	
	static String enron_get_details = 'enron-get-details'
	
	
	@Override
	public ResultList callFunction(Organization organization, App app,
			String function, Map<String, Object> params)
			throws VitalServiceUnimplementedException, VitalServiceException {

		String uri = params.get('URI')
		
		if(!uri) throw new RuntimeException("No 'URI' parameter")
		
		def vitalService = VitalServiceFactory.getVitalService()
		
		ResultList rl = vitalService.get(GraphContext.ServiceWide, URIProperty.withString(uri));
		
		if(rl.status.status != VitalStatus.Status.ok) {
			return rl
		}
		
		GraphObject g = rl.first()
		
		if(g == null) {
			throw new RuntimeException("Graph object with URI $uri not found")
		}
		
		List<VitalGraphQuery> vgqs = [];
		
		if(g instanceof EnronEmail) {
			
			//expand email sender / recipient

			VitalGraphQuery vgq = builder.query {
				
				GRAPH {
					
					value inlineObjects: true
					value segments: ['enron']
					
					value limit: 100
					
					//top arc
					ARC {
						
						node_constraint { "URI eq $uri" }
							
						ARC_AND {
							//senders
							ARC {
								
								value direction: "forward"  
								
								edge_constraint { Edge_hasSender.class }
								
							}
							
							ARC {
								
								value direction: "forward"
								
								edge_constraint { Edge_hasDirectRecipient.class }
								
							}
						}						
					}
					
				}
			}.toQuery()
			
			vgqs.add(vgq)
						
		} else if(g instanceof EnronPerson ){
		
		} else {
			throw new RuntimeException("Unexpected graph object type: ${g.class.canonicalName}");
		}
		
		Map<String, GraphObject> results = new LinkedHashMap<String, GraphObject>()
		
		for(VitalGraphQuery vgq : vgqs) {
			
			ResultList graphResults = vitalService.query(vgq)
					
			if(graphResults.status.status != VitalStatus.Status.ok) {
				return graphResults
			}
			
			
			for(GraphMatch gm : graphResults) {
				
				Map<String, IProperty> propsMap = gm.getPropertiesMap()
						
				for(IProperty p : gm.getPropertiesMap().values()) {
					p = p.unwrapped()
					if(p instanceof URIProperty) {
						String u = ((URIProperty)p).get()
									
						if(uri.equals(u)) continue
						if(results.containsKey(u)) continue
						
						Object de = gm.getProperty(u)
						if(de instanceof GraphObject) {
							if(de != null) results.put(de.URI, de)
						}
								
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
