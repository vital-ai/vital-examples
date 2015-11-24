package ai.vital.amazon.echo.humor.app.webservice

import org.vertx.groovy.core.Vertx
import org.vertx.java.core.http.RouteMatcher
import org.vertx.mods.web.WebServerBase;

import ai.vital.service.vertx.async.VitalServiceAsyncClient
import ai.vital.vitalsigns.model.VitalApp;;

class FunnyBotWebserver extends WebServerBase {
	
	@Override
	protected RouteMatcher routeMatcher() {
		
	  println "FUNNYBOT WEBSERVER matcher"
		
	  RouteMatcher matcher = new RouteMatcher();
	  
	  if(!FunnybotWebserviceAppVerticle.appID) throw new RuntimeException("AppID not set in " + FunnybotWebserviceAppVerticle.class.canonicalName)
	  
	  VitalServiceAsyncClient vitalservice = new VitalServiceAsyncClient(new Vertx(vertx), VitalApp.withId(FunnybotWebserviceAppVerticle.appID))
	  
	  matcher.all("/funnybot-webservice", new RequestHandler(vitalservice))
	  matcher.noMatch(staticHandler());
	  return matcher;
	}

}
