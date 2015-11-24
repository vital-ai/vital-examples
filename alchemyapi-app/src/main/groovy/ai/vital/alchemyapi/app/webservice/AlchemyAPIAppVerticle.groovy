package ai.vital.alchemyapi.app.webservice

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
import ai.vital.vitalsigns.model.VitalApp;

class AlchemyAPIAppVerticle extends Verticle {
	
	public static boolean initialized = false
	
	//async start with notification
	@Override
	public Object start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.setResult(true)
			return startedResult
		}
		
		synchronized (AlchemyAPIAppVerticle.class) {
			
			
			if(initialized) {
				startedResult.setResult(true)
				return startedResult
			}
			
			String app = container.config.get('app')
			
			if(!app) throw new RuntimeException("No app config param")
			
//			VitalService service = VitalServiceMod.registeredServices.get(app)
//
//			if(service == null) throw new RuntimeException("No service for app: ${app}")			
			
			VitalServiceAsyncClient client = new VitalServiceAsyncClient(vertx, VitalApp.withId(app))
			
			client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [
				functionName: 'AlchemyAPI_ProcessText',
				handlerClass: AlchemyAPI_ProcessTextHandler.class.canonicalName,
			]) { ResponseMessage rm ->
		
				if(rm.exceptionMessage) {
					startedResult.setFailure(new RuntimeException(rm.exceptionType + ' - ' + rm.exceptionMessage))
					return
				}
				
				ResultList rl = rm.response
				if(rl.status.status != VitalStatus.Status.ok) {
					startedResult.setFailure(new RuntimeException(rl.status.toString()))
					return
				}
		
				startedResult.setResult(true)
				
			}
			
			//register handlers
			
			initialized = true
		}
		
	}

}
