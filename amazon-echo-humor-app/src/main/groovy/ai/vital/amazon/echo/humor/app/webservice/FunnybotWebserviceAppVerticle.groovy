package ai.vital.amazon.echo.humor.app.webservice

import org.vertx.groovy.platform.Verticle
import org.vertx.java.core.Future

class FunnybotWebserviceAppVerticle extends Verticle {
	
	public static boolean initialized = false
	
	//async start with notification
	@Override
	public Object start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.setResult(true)
			return
		}
		
		synchronized (FunnybotWebserviceAppVerticle.class) {
			
			if(initialized) return
			
			startedResult.setResult(true)
			
			//register handlers
			
			initialized = true
		}
		
	}

}
