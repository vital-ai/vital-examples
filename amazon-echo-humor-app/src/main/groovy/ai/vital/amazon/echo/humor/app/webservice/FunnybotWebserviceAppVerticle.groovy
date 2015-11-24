package ai.vital.amazon.echo.humor.app.webservice

import org.vertx.groovy.platform.Verticle
import org.vertx.java.core.Future

class FunnybotWebserviceAppVerticle extends Verticle {
	
	public static boolean initialized = false
	
	public static String appID = null
	
	//async start with notification
	@Override
	public Object start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.setResult(true)
			return
		}
		
		String app = container.getConfig().get("app")
		if(!app) {
			startedResult.setFailure(new Exception("No 'app' param"))
			return
		}
		
		container.logger.info "AppID: ${app}"
		appID = app
		
		synchronized (FunnybotWebserviceAppVerticle.class) {
			
			if(initialized) return
			
			startedResult.setResult(true)
			
			//register handlers
			
			initialized = true
		}
		
	}

}
