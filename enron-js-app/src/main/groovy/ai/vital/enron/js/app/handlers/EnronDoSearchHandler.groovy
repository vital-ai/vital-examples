package ai.vital.enron.js.app.handlers

import java.util.Map;

import org.example.enrondata.domain.EnronEmail

import ai.vital.enron.js.app.EnronAppVerticle;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.service.vertx.VitalServiceMod;
import ai.vital.service.vertx.handler.CallFunctionHandler
import ai.vital.vitalservice.exception.VitalServiceException
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException
import ai.vital.vitalservice.factory.VitalServiceFactory
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalQuery
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalOrganization

class EnronDoSearchHandler implements CallFunctionHandler {

	static VitalBuilder builder = new VitalBuilder()
	
	static String enron_do_search = 'enron-do-search'
	
	@Override
	public ResultList callFunction(VitalOrganization organization, VitalApp app,
			String function, Map<String, Object> params, Map<String, Object> sessionParams)
			throws VitalServiceUnimplementedException, VitalServiceException {

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
				
				value segments: [EnronAppVerticle.enronSegment]
				
				node_constraint { EnronEmail.class }
				
				OR {
					
					node_constraint { EnronEmail.props().emailSubject.contains_i(query) }
					
					node_constraint { EnronEmail.props().body.contains_i(query) }
					
				}
			}
			
		}.toQuery()
		
		return EnronAppVerticle.serviceInstance.query(queryObj)
		
	}

}
