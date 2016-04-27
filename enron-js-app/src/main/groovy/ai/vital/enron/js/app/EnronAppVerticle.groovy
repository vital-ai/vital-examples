package ai.vital.enron.js.app

import org.slf4j.Logger
import org.slf4j.LoggerFactory;

import ai.vital.enron.js.app.handlers.EnronDoSearchHandler;
import ai.vital.enron.js.app.handlers.EnronGetMessagesHandler;
import ai.vital.enron.js.app.handlers.EnronGetDetailsHandler
import ai.vital.service.vertx3.VitalServiceVertx3;
import ai.vital.service.vertx3.async.VitalServiceAsyncClient
import ai.vital.service.vertx3.binary.ResponseMessage
import ai.vital.service.vertx3.handler.CallFunctionHandler;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.VitalApp;
import ai.vital.vitalsigns.model.VitalSegment;
import io.vertx.core.Future
import io.vertx.lang.groovy.GroovyVerticle

class EnronAppVerticle extends GroovyVerticle {
	
	public static boolean initialized = false
	
	public static VitalService serviceInstance = null

	public static String appID = null
		
	public static VitalSegment enronSegment = null

	private final static Logger log = LoggerFactory.getLogger(EnronAppVerticle.class)
	
	
	//async start with notification
	@Override
	public void start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.complete(true)
			return
		}
		
		synchronized (EnronAppVerticle.class) {
			
			if(initialized) {
				startedResult.complete(true)
				return
			}
			
			if(context == null) context = vertx.getOrCreateContext()
			
			appID = context.config().get('app')
			
			if(!appID) {
				startedResult.fail("No 'app' config parameter")
				return
			}
			
			
			VitalServiceAsyncClient client = null
			
			try {
				client = new VitalServiceAsyncClient(vertx, VitalApp.withId(appID))
			} catch(Exception e) {
				startedResult.fail(e)
				return
			}
			
			serviceInstance = VitalServiceVertx3.registeredServices.get(appID)
			
			if(serviceInstance == null) {
				startedResult.fail("No registered service instance found for app: ${appID}")
				return
			}
			
			enronSegment = serviceInstance.getSegment('enron')
			
			if(enronSegment == null) {
				startedResult.fail("Segment not found: 'enron'")
				return
			}
			
			
			client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: EnronDoSearchHandler.enron_do_search, handlerClass: EnronDoSearchHandler.class.canonicalName]) { ResponseMessage m1 ->

				if(m1.exceptionType) {
					startedResult.fail(m1.exceptionType + ' - ' + m1.exceptionMessage)
					return
				}
				
				ResultList rl1 = m1.response
				
				if(rl1.status.status != VitalStatus.Status.ok) {
					startedResult.fail(rl1.status.message)
					return
				}
				
				client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: EnronGetDetailsHandler.enron_get_details, handlerClass: EnronGetDetailsHandler.class.canonicalName]) { ResponseMessage m2 ->

					if(m2.exceptionType) {
						startedResult.fail(m2.exceptionType + ' - ' + m2.exceptionMessage)
						return
					}
					
					ResultList rl2 = m2.response
					
					if(rl2.status.status != VitalStatus.Status.ok) {
						startedResult.fail(rl2.status.message)
						return
					}
	
										
					client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: EnronGetMessagesHandler.enron_get_messages, handlerClass: EnronGetMessagesHandler.class.canonicalName]) { ResponseMessage m3 ->
						
						if(m3.exceptionType) {
							startedResult.fail(m3.exceptionType + ' - ' + m3.exceptionMessage)
							return
						}
						
						ResultList rl3 = m3.response
						
						if(rl3.status.status != VitalStatus.Status.ok) {
							startedResult.fail(rl3.status.message)
							return
						}
						
						startedResult.complete(true)
						
					}
					
				}
								
			}
			
			
			//register handlers
			
			initialized = true
		}
		
	}

	void stop() throws Exception {
		appID = null
		initialized = false
		enronSegment = null
	};
}
