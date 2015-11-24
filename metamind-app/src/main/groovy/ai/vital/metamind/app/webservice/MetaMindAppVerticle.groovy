package ai.vital.metamind.app.webservice

import org.vertx.groovy.platform.Verticle
import org.vertx.java.core.Future

import ai.vital.service.vertx.async.VitalServiceAsyncClient
import ai.vital.service.vertx.binary.ResponseMessage
import ai.vital.service.vertx.handler.AbstractVitalServiceHandler
import ai.vital.service.vertx.handler.CallFunctionHandler
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.model.VitalApp;;

class MetaMindAppVerticle extends Verticle {
	
	public static boolean initialized = false
	
	//async start with notification
	@Override
	public Object start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.setResult(true)
			return
		}
		
		synchronized (MetaMindAppVerticle.class) {
			
			if(initialized) {
				startedResult.setResult(true)
				return
			}
			
			String app = container.config.get('app')
			
			if(!app) throw new RuntimeException("No app config param")
			
//			VitalService service = VitalServiceMod.registeredServices.get(app)
//
//			if(service == null) throw new RuntimeException("No service for app: ${app}")
			
			VitalServiceAsyncClient client = new VitalServiceAsyncClient(vertx, VitalApp.withId(app))
			
			client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [
				functionName: 'MetaMind_ProcessImage',
				handlerClass: MetaMind_ProcessImageHandler.class.canonicalName,
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
			
			initialized = true
			
		}
		
	}

}
