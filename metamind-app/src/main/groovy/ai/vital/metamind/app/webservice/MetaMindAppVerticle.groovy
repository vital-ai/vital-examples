package ai.vital.metamind.app.webservice

import ai.vital.service.vertx3.async.VitalServiceAsyncClient
import ai.vital.service.vertx3.binary.ResponseMessage
import ai.vital.service.vertx3.handler.CallFunctionHandler;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.model.VitalApp
import io.vertx.core.Future
import io.vertx.lang.groovy.GroovyVerticle

class MetaMindAppVerticle extends GroovyVerticle {
	
	public static boolean initialized = false
	
	public static String appID
	
	//async start with notification
	@Override
	public void start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.complete(true)
			return
		}
		
		synchronized (MetaMindAppVerticle.class) {
			
			if(initialized) {
				startedResult.complete(true)
				return
			}
			
			if(context == null) context = vertx.getOrCreateContext()
			
			String app = context.config().get('app')
			
			
			if(!app) {
				startedResult.fail("No app config param")
				return
			}
			
			appID = app
			
			VitalServiceAsyncClient client = new VitalServiceAsyncClient(vertx, VitalApp.withId(app))
			
			client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [
				functionName: 'MetaMind_ProcessImage',
				handlerClass: MetaMind_ProcessImageHandler.class.canonicalName,
			]) { ResponseMessage rm ->
		
				if(rm.exceptionType) {
					startedResult.fail(rm.exceptionType + ' - ' + rm.exceptionMessage)
					return
				}
				
				ResultList rl = rm.response
				if(rl.status.status != VitalStatus.Status.ok) {
					startedResult.fail(rl.status.toString())
					return
				}
		
				startedResult.complete(true)
				
			}
			
			initialized = true
			
		}
		
	}
	
	@Override
	public void stop() throws Exception {
		initialized = false
		appID = null
	}

}
