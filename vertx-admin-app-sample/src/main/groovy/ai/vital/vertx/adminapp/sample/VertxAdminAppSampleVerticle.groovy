package ai.vital.vertx.adminapp.sample

import org.slf4j.Logger
import org.slf4j.LoggerFactory

import ai.vital.service.admin.vertx3.VitalServiceAdminVertx3;
import ai.vital.service.vertx3.VitalServiceVertx3;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.admin.VitalServiceAdmin;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalSegment;;
import io.vertx.core.Future
import io.vertx.lang.groovy.GroovyVerticle

class VertxAdminAppSampleVerticle extends GroovyVerticle {
	
	public static boolean initialized = false
	
	public static String appID
	
	private final static Logger log = LoggerFactory.getLogger(VertxAdminAppSampleVerticle.class)
	
	@Override
	public void start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.complete(true)
			return
		}
		
		synchronized (VertxAdminAppSampleVerticle.class) {
			
			
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
			
			VitalServiceAdmin serviceAdmin = null
			
			String n = VitalServiceAdminVertx3.SERVICE_NAME
			
			for(VitalServiceAdmin vs : VitalServiceFactory.listOpenAdminServices()) {
				
				if(vs.getName().equals(n)) {
					serviceAdmin = vs;
				}
				
			}
			
			if(serviceAdmin == null) {
				startedResult.fail("VitalserviceAdmin instance not found: ${n}, appID: ${app}")
				return
			}
			
			VitalApp appObj = serviceAdmin.getApp(appID)
			
			if(appObj == null) {
				startedResult.fail("app not found: ${appID}")
				return
			}
			
			
			//make sure the wordnet segment is there
			VitalSegment wordnetSegment = serviceAdmin.getSegment(appObj, 'wordnet')
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
