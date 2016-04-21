package ai.vital.vertx.app.sample.webserver

import org.vertx.java.core.Handler
import org.vertx.java.core.http.HttpServerRequest
import org.vertx.java.core.http.RouteMatcher;
import org.vertx.java.core.json.JsonObject
import org.vertx.mods.web.StaticFileHandler
import org.vertx.mods.web.WebServerBase;

class CustomRouteMatcher extends WebServerBase {

	@Override
	protected RouteMatcher routeMatcher() {
		
		RouteMatcher matcher = new RouteMatcher();
	
		Handler<HttpServerRequest> staticHandler = staticHandler()
		
		String webRoot = getOptionalStringConfig("web_root", DEFAULT_WEB_ROOT);
			
//		rewrite ^(.*)\.(ico|css|js|jsonp|map|gif|jpe?g|png|svg)$ $1.$2 break;
		matcher.getWithRegEx('^(.*)\\.(ico|css|js|jsonp|map|gif|jpe?g|png|svg)$', staticHandler);
		matcher.noMatch(new Handler<HttpServerRequest>(){
			
			public void handle(HttpServerRequest req) {
				
				//just get the web page
				req.response().sendFile(webRoot + '/index.html')
			}
			
		});
		return matcher;
	}

}
