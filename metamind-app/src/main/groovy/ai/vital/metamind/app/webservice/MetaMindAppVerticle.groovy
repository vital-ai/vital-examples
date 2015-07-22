package ai.vital.metamind.app.webservice

import org.vertx.groovy.platform.Verticle
import org.vertx.java.core.Future

import ai.vital.service.vertx.handler.AbstractVitalServiceHandler;

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
			
			if(initialized) return
			
			startedResult.setResult(true)
			
			if(AbstractVitalServiceHandler.callFunctionHandlers != null) {
				AbstractVitalServiceHandler.callFunctionHandlers.put('MetaMind_ProcessImage', new MetaMind_ProcessImageHandler());
			}
			
			//register handlers
			
			initialized = true
		}
		
	}

}
