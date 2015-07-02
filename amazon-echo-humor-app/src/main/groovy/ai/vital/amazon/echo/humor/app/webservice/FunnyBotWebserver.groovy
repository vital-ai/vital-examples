package ai.vital.amazon.echo.humor.app.webservice

import org.vertx.java.core.http.RouteMatcher
import org.vertx.mods.web.WebServerBase;

class FunnyBotWebserver extends WebServerBase {
	
	@Override
	protected RouteMatcher routeMatcher() {
		
	  println "FUNNYBOT WEBSERVER matcher"
		
	  RouteMatcher matcher = new RouteMatcher();
	  
	  matcher.all("/funnybot-webservice", new RequestHandler())
	  matcher.noMatch(staticHandler());
	  return matcher;
	}

}
