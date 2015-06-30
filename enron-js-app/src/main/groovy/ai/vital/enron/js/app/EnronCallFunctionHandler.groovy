package ai.vital.enron.js.app

import java.util.Map;

import org.example.enrondata.domain.Edge_hasDirectRecipient;
import org.example.enrondata.domain.Edge_hasRecipient;
import org.example.enrondata.domain.Edge_hasSender;
import org.example.enrondata.domain.EnronEmail;
import org.example.enrondata.domain.EnronEmail_PropertiesHelper;
import org.example.enrondata.domain.EnronPerson;

import ai.vital.domain.Document;
import ai.vital.query.Utils;
import ai.vital.query.querybuilder.VitalBuilder;
import ai.vital.service.vertx.handler.CallFunctionHandler;
import ai.vital.service.vertx.handler.PassFunctionException;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.exception.VitalServiceException;
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.model.App;
import ai.vital.vitalservice.model.Organization;
import ai.vital.vitalservice.query.ResultElement
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalservice.query.VitalGraphQuery;
import ai.vital.vitalservice.query.VitalQuery
import ai.vital.vitalsigns.block.CompactStringSerializer;
import ai.vital.vitalsigns.meta.GraphContext;
import ai.vital.vitalsigns.model.GraphMatch;
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.vitalsigns.model.property.IProperty;
import ai.vital.vitalsigns.model.property.StringProperty;
import ai.vital.vitalsigns.model.property.URIProperty;

class EnronCallFunctionHandler implements CallFunctionHandler {

	static VitalBuilder builder = new VitalBuilder()
	
	static String do_search = 'do-search'
	
	static String get_details = 'get-details'
	
	static String get_messages = 'get-messages'
	
	ResultList handleDoSearch(Map<String, Object> params) {
		
		//validate params
		def query = params.get('query')
		
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
		
		if(!( query instanceof String || query instanceof GString) ) {
			throw new RuntimeException("No 'query' param")
		}
		
		
		VitalQuery queryObj = builder.query {
			
			SELECT {
				
				value offset: offset
				value limit: limit
				
				value segments: ['enron']
				
				node_constraint { EnronEmail.class }
				
				OR {
					
					node_constraint { ((EnronEmail_PropertiesHelper)EnronEmail.props()).emailSubject.contains_i(query) }
					
					node_constraint { ((EnronEmail_PropertiesHelper)EnronEmail.props()).body.contains_i(query) }
					
				}
			}
		}.toQuery()
		
		
		return VitalServiceFactory.getVitalService().query(queryObj)
		
	}
	
	ResultList handleGetDetails(Map<String, Object> params) {
		
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
	
	
	ResultList handleGetMessages(Map<String, Object> params) {
		
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
					value segments: ['enron']
							
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
					value segments: ['enron']
							
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
		
		ResultList graphResults = VitalServiceFactory.getVitalService().query(vgq)
		
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
	
	
	@Override
	public ResultList callFunction(Organization organization, App app,
			String function, Map<String, Object> params)
			throws VitalServiceUnimplementedException, VitalServiceException,
			PassFunctionException {

		if(do_search.equals(function)) {
			
			return handleDoSearch(params)
		
			
		} else if(get_details.equals(function)) {
			
			return handleGetDetails(params)
			
			
		} else if(get_messages.equals(function)) {
		
			return handleGetMessages(params)
		
		}
		
		throw new PassFunctionException(function)
		
	}

}
