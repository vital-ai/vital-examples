package ai.vital.alchemyapi.app.webservice

import org.vertx.groovy.platform.Verticle
import org.vertx.java.core.Future

import ai.vital.service.vertx.handler.AbstractVitalServiceHandler;

class AlchemyAPIAppVerticle extends Verticle {
	
	public static boolean initialized = false
	
	//async start with notification
	@Override
	public Object start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.setResult(true)
			return
		}
		
		synchronized (AlchemyAPIAppVerticle.class) {
			
			if(initialized) return
			
			if(AbstractVitalServiceHandler.callFunctionHandlers != null) {
				AbstractVitalServiceHandler.callFunctionHandlers.put('AlchemyAPI_ProcessText', new AlchemyAPI_ProcessTextHandler());
			}
			
			startedResult.setResult(true)
			
			//register handlers
			
			initialized = true
		}
		
	}

}
