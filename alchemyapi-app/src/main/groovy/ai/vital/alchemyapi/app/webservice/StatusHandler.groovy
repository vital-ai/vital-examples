package ai.vital.alchemyapi.app.webservice

import groovy.json.JsonOutput
import io.vertx.core.Handler
import io.vertx.groovy.core.http.HttpServerRequest
import io.vertx.groovy.ext.web.RoutingContext

class StatusHandler implements Handler<RoutingContext> {

	@Override
	public void handle(RoutingContext rc) {

		HttpServerRequest req = rc.request()
		
		def res = req.response()
		
		Map r = [:]
			
		r.ok = true
				
		res.end(JsonOutput.toJson(r), 'UTF-8')
			
	}

}
