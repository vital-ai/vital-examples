package ai.vital.enron.js.app

import org.vertx.groovy.platform.Verticle;
import org.vertx.java.core.Future;








import ai.vital.enron.js.app.handlers.EnronDoSearchHandler;
import ai.vital.enron.js.app.handlers.EnronGetMessagesHandler;
import ai.vital.enron.js.app.handlers.EnronGetDetailsHandler;
import ai.vital.service.vertx.VitalServiceMod;
import ai.vital.service.vertx.async.VitalServiceAsyncClient;
import ai.vital.service.vertx.binary.ResponseMessage;
import ai.vital.service.vertx.handler.CallFunctionHandler;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.VitalApp;
import ai.vital.vitalsigns.model.VitalSegment;

import org.vertx.java.core.Future

class EnronAppVerticle extends Verticle {
	
	public static boolean initialized = false
	
	public static VitalService serviceInstance = null
	
	public static VitalSegment enronSegment = null
	
	//async start with notification
	@Override
	public Object start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.setResult(true)
			return startedResult
		}
		
		synchronized (EnronAppVerticle.class) {
			
			if(initialized) return
			
			String appID = container.getConfig().get('app')
			
			if(!appID) {
				startedResult.setFailure(new Exception("No 'app' config parameter"))
				return startedResult
			}
			
			VitalServiceAsyncClient client = null
			
			try {
				client = new VitalServiceAsyncClient(vertx, VitalApp.withId(appID))
			} catch(Exception e) {
				startedResult.setFailure(e)
				return startedResult
			}
			
			serviceInstance = VitalServiceMod.registeredServices.get(appID)
			
			if(serviceInstance == null) {
				startedResult.setFailure(new Exception("No registered service instance found for app: ${appID}"))
				return startedResult
			}
			
			enronSegment = serviceInstance.getSegment('enron')
			
			if(enronSegment == null) {
				startedResult.setFailure(new Exception("Segment not found: 'enron'"))
				return startedResult;
			}
			
			
			client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: EnronDoSearchHandler.enron_do_search, handlerClass: EnronDoSearchHandler.class.canonicalName]) { ResponseMessage m1 ->

				if(m1.exceptionMessage) {
					startedResult.setFailure(new RuntimeException(m1.exceptionMessage))
					return
				}
				
				ResultList rl1 = m1.response
				
				if(rl1.status.status != VitalStatus.Status.ok) {
					startedResult.setFailure(new RuntimeException(rl1.status.message))
					return
				}
				
				client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: EnronGetDetailsHandler.enron_get_details, handlerClass: EnronGetDetailsHandler.class.canonicalName]) { ResponseMessage m2 ->

					if(m2.exceptionMessage) {
						startedResult.setFailure(new RuntimeException(m2.exceptionMessage))
						return
					}
					
					ResultList rl2 = m2.response
					
					if(rl2.status.status != VitalStatus.Status.ok) {
						startedResult.setFailure(new RuntimeException(rl2.status.message))
						return
					}
	
										
					client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: EnronGetMessagesHandler.enron_get_messages, handlerClass: EnronGetMessagesHandler.class.canonicalName]) { ResponseMessage m3 ->
						
						if(m3.exceptionMessage) {
							startedResult.setFailure(new RuntimeException(m3.exceptionMessage))
							return
						}
						
						ResultList rl3 = m3.response
						
						if(rl3.status.status != VitalStatus.Status.ok) {
							startedResult.setFailure(new RuntimeException(rl3.status.message))
							return
						}
						
						startedResult.setResult(true)
						
					}
					
				}
								
			}
			
			
			//register handlers
			
			initialized = true
		}
		
	}

}
