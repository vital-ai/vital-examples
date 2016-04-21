package ai.vital.vertx.app.sample

import org.vertx.groovy.platform.Verticle
import org.vertx.java.core.Future

import ai.vital.service.vertx.VitalServiceMod;
import ai.vital.service.vertx.async.VitalServiceAsyncClient;
import ai.vital.service.vertx.binary.ResponseMessage;
import ai.vital.service.vertx.handler.AbstractVitalServiceHandler;
import ai.vital.service.vertx.handler.CallFunctionHandler;
import ai.vital.service.vertx.handler.VitalServiceHandler;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalSegment;;

class VertxAppSampleVerticle extends Verticle {
	
	public static boolean initialized = false
	
	@Override
	public Object start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.setResult(true)
			return startedResult
		}
		
		synchronized (VertxAppSampleVerticle.class) {
			
			
			if(initialized) {
				startedResult.setResult(true)
				return startedResult
			}
			
			String app = container.config.get('app')
			
			container.logger.info "AppID: ${app}"
			
			if(!app) throw new RuntimeException("No app config param")
			
			
			
			//there should be a registered vitalservice for appID
			
			VitalService service = null
			
			String n = VitalServiceMod.SERVICE_NAME_PREFIX + app
			
			for(VitalService vs : VitalServiceFactory.listOpenServices()) {
				
				if(vs.getName().equals(n)) {
					service = vs;
				}
				
			}
			
			if(service == null) throw new RuntimeException("Vitalservice instance not found: ${n}, appID: ${app}")
			
			
			//make sure the wordnet segment is there
			VitalSegment wordnetSegment = service.getSegment('wordnet')
			if(wordnetSegment == null) {
				throw new RuntimeException("'wordnet' segment not found in app: ${app}")
			}
			
			startedResult.setResult(true)
			
			initialized = true
		}
		
	}

}
