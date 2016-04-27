package ai.vital.amazon.echo.humor.app.webservice

import org.slf4j.Logger
import org.slf4j.LoggerFactory;

import io.vertx.core.Future
import io.vertx.lang.groovy.GroovyVerticle

class FunnybotWebserviceAppVerticle extends GroovyVerticle {
	
	public static boolean initialized = false
	
	public static String appID = null

	private final static Logger log = LoggerFactory.getLogger(FunnybotWebserviceAppVerticle.class)
		
	//async start with notification
	@Override
	public void start(Future<Void> startedResult) {
	
		if(initialized) {
			
			synchronized (FunnybotWebserviceAppVerticle.class) {
				
				if(initialized) {
					startedResult.complete(true)
					return
				}
				
				initialized = true
				
			}
		}
		
		if(context == null) {
			context = vertx.getOrCreateContext() 
		}
		
		String app = context.config().get("app")
		if(!app) {
			startedResult.fail("No 'app' param")
			return
		}
		
		log.info "AppID: ${app}"
		
		appID = app
		
		startedResult.complete(true)
			
	}
	
	@Override
	public void stop() throws Exception {
		appID = null
		initialized = false
	}

}
