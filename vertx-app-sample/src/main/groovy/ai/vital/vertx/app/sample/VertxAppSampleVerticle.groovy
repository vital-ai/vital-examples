package ai.vital.vertx.app.sample

import org.slf4j.Logger
import org.slf4j.LoggerFactory

import ai.vital.service.vertx3.VitalServiceVertx3;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalSegment;;
import io.vertx.core.Future
import io.vertx.lang.groovy.GroovyVerticle

class VertxAppSampleVerticle extends GroovyVerticle {
	
	public static boolean initialized = false
	
	public static String appID
	
	private final static Logger log = LoggerFactory.getLogger(VertxAppSampleVerticle.class)
	
	@Override
	public void start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.complete(true)
			return
		}
		
		synchronized (VertxAppSampleVerticle.class) {
			
			
			if(initialized) {
				startedResult.complete(true)
				return
			}
			
			if(context == null) context = vertx.getOrCreateContext()
			
			String app = context.config().get('app')
			
			log.info "AppID: ${app}"
			
			if(!app) {
				startedResult.fail("No app config param")
				return
			}
			
			appID = app			
			
			//there should be a registered vitalservice for appID
			
			VitalService service = null
			
			String n = VitalServiceVertx3.SERVICE_NAME_PREFIX + app
			
			for(VitalService vs : VitalServiceFactory.listOpenServices()) {
				
				if(vs.getName().equals(n)) {
					service = vs;
				}
				
			}
			
			if(service == null) {
				startedResult.fail("Vitalservice instance not found: ${n}, appID: ${app}")
				return
			}
			
			//make sure the wordnet segment is there
			VitalSegment wordnetSegment = service.getSegment('wordnet')
			if(wordnetSegment == null) {
				startedResult.fail("'wordnet' segment not found in app: ${app}")
				return
			}
			
			startedResult.complete(true)
			
			initialized = true
		}
		
	}
	
	@Override
	public void stop() throws Exception {
		initialized = false
		appID = null
	}

}
