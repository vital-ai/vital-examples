package ai.vital.alchemyapi.app.webservice

import org.slf4j.Logger
import org.slf4j.LoggerFactory;

import ai.vital.service.vertx3.async.VitalServiceAsyncClient
import ai.vital.service.vertx3.binary.ResponseMessage
import ai.vital.service.vertx3.handler.CallFunctionHandler;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.VitalApp;
import io.vertx.core.Future
import io.vertx.lang.groovy.GroovyVerticle

class AlchemyAPIAppVerticle extends GroovyVerticle {
	
	public static boolean initialized = false
	
	private final static Logger log = LoggerFactory.getLogger(AlchemyAPIAppVerticle.class)
	
	VitalServiceAsyncClient client
	
	//async start with notification
	@Override
	public void start(Future<Void> startedResult) {
	
		
		if(initialized) {
			startedResult.complete(true)
			return
		}
		
		synchronized (AlchemyAPIAppVerticle.class) {
			
			if(initialized) {
				startedResult.complete(true)
				return
			}
			if(context == null) context = vertx.getOrCreateContext()
			
			String app = context.config().get('app')
			
			if(!app) throw new RuntimeException("No app config param")
			
			VitalServiceAsyncClient client = new VitalServiceAsyncClient(vertx, VitalApp.withId(app))
			
			client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [
				functionName: 'AlchemyAPI_ProcessText',
				handlerClass: AlchemyAPI_ProcessTextHandler.class.canonicalName,
			]) { ResponseMessage rm ->
		
				if(rm.exceptionMessage) {
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
			
			//register handlers
			
			initialized = true
		}
		
	}

	@Override
	public void stop(Future<Void> future) throws Exception {

		initialized = false
		
		if(client != null) {
			
			client.callFunction(CallFunctionHandler.VERTX_UNREGISTER_HANDLER, [functionName: 'AlchemyAPI_ProcessText']) { ResponseMessage rm ->
				
				if(rm.exceptionType) {
					log.error(rm.exceptionType + ' - ' + rm.exceptionMessage)
				}
				
				ResultList rl = rm.response
				
				if(rl.status.status == VitalStatus.Status.ok) {
				
					log.info("Hanlder unregistered successfully")
						
				} else {
				
					log.error("Error when unregistering handler: ${rl.status.message}")
				}
				
				future.complete(true)
				
			}
			
		} else {

			future.complete(true)
					
		}
		
		
	}
	
	

}
