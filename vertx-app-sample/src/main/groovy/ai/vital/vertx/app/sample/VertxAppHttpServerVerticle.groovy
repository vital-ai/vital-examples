package ai.vital.vertx.app.sample

import groovy.lang.MetaClass
import io.vertx.core.AsyncResult
import io.vertx.core.Future
import io.vertx.groovy.core.http.HttpServer
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext
import io.vertx.ext.web.handler.StaticHandler
import io.vertx.ext.web.handler.sockjs.SockJSHandler
import io.vertx.lang.groovy.GroovyVerticle;
import java.util.Map.Entry

class VertxAppHttpServerVerticle extends GroovyVerticle {

	@Override
	public void start(Future<Void> startFuture) throws Exception {

		def router = Router.router( vertx )
		
		if(context == null) {
			context = vertx.getOrCreateContext()
		}
		
		Map cfg = context.config().get("webserver")
		
		if(cfg == null) {
			startFuture.fail("No 'webserver' config")
			return
		}
		
		
		StaticHandler staticHandler = StaticHandler.create()
		staticHandler.setFilesReadOnly(false)
		
		SockJSHandler sockJSHandler = SockJSHandler.create(vertx)
		//		maxAddressLength : int
		//		maxHandlersPerSocket : int
		//		pingTimeout : long
		//		replyTimeout : long
		//		inboundPermitted : List<PermittedOptions>
		//		outboundPermitted : List<PermittedOptions>
				
		def inboundPermitted1 = [
			address: ai.vital.auth.vertx3.VitalJSEndpointsManager.ENDPOINT_PREFIX + VertxAppSampleVerticle.appID
		]
		
		def inboundPermitteds = [
			inboundPermitted1
		]
		
		def outboundPermitted1 = [
			//addressRegex:"stream\\..+"
		]
		
		def sockJSOptions = [
			inboundPermitteds: inboundPermitteds/*,
			outboundPermitteds:[
			  outboundPermitted1
			]*/
		]
				
		sockJSHandler.bridge(sockJSOptions)
		router.get('/status').handler(new StatusHandler())
		router.route('/eventbus/*').handler(sockJSHandler)
				
		//static resources
		router.getWithRegex('^(.*)\\.(html|ico|css|js|jsonp|map|gif|jpe?g|png|svg)$').handler(staticHandler);
		
		//everything else goes to /index.html
		router.route().handler({ RoutingContext context ->
			
			context.reroute("/index.html")
			
		})
		
		def server = vertx.createHttpServer(cfg)
		server.requestHandler(router.&accept)
		server.listen() { AsyncResult<HttpServer> res ->
		
			if(! res.succeeded() ) {
				startFuture.fail(res.cause())
				System.err.println("Error when starting www server: ${res.cause()}")
			} else {
				println "WWW server started - host: ${cfg.host} port ${cfg.port}"
				startFuture.complete()
			}
				
		}
		
	}

}
