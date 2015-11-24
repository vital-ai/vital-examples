package ai.vital.movielensexample.js.app.handlers

import java.util.Map;

import org.movielens.domain.User

import ai.vital.service.vertx.VitalServiceMod;
import ai.vital.service.vertx.handler.CallFunctionHandler;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.exception.VitalServiceException;
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalOrganization
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.meta.GraphContext;
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.property.URIProperty;

class MovieLensGetUserHandler implements CallFunctionHandler {

	static String USER_NS = 'http://vital.ai/movielens/user/'

	static String movielens_get_user = 'movielens-get-user'
		
	@Override
	public ResultList callFunction(VitalOrganization organization, VitalApp app,
			String function, Map<String, Object> params, Map<String, Object> sessionParams)
			throws VitalServiceUnimplementedException, VitalServiceException {

		def userID = params.get('userID')
		
		if(userID == null) throw new RuntimeException("No 'userID' param")
		
		if(userID instanceof Integer) {
		} else if(userID instanceof Long) {
			userID = userID.intValue()
		}
				
		def vitalService = VitalServiceMod.registeredServices.get(app.appID.toString())
		
		ResultList rl = vitalService.get(GraphContext.ServiceWide, URIProperty.withString(USER_NS + userID))
		
		if(rl.status.status != VitalStatus.Status.ok) return rl;
		
		GraphObject g = rl.first();
		
		if(g == null) {
			rl.setStatus(VitalStatus.withError("User with ID ${userID} not found"))
			return rl
		}
		
		if(!(g instanceof User)) {
			rl.setStatus(VitalStatus.withError("Not a movielns User object " + g.class.getCanonicalName()))
		}
				
		return rl;
		
	}

	
	
}
