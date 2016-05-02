package ai.vital.movielensexample.js.app.main

import io.vertx.core.AsyncResult
import io.vertx.groovy.core.Vertx
import io.vertx.groovy.core.http.HttpServer
import io.vertx.groovy.ext.web.Router;
import io.vertx.groovy.ext.web.handler.StaticHandler
import io.vertx.groovy.ext.web.handler.sockjs.SockJSHandler
import ai.vital.auth.vertx3.VitalAuthManager
import ai.vital.movielensexample.js.app.MovieLensAppVerticle;
import ai.vital.movielensexample.js.app.StatusHandler
import ai.vital.service.vertx3.VitalServiceVertx3

import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory

class MovieLensAppMain {

	
	def static main(args) {
		
		println "MovieLens App - Vertx 3"
		
		if(args.length != 1) {
			System.err.println('usage: movielens-app <conf_file>')
			System.exit(-1)
			return
		}
		
		File confFile = new File(args[0])
		
		println "conf file path: ${confFile.absolutePath}"
		
		if(!confFile.exists()) {
			System.err.println("file not found: ${confFile.absolutePath}")
			System.exit(-1)
			return
		}
		
		Config config = ConfigFactory.parseFile(confFile)
		
		new MovieLensAppMain().init(config).startVitalService()
		
	}
	
	Vertx vertx
	Config mainCfg
	Config vitalserviceCfg
	Config vitalauthCfg
	Config webserverCfg
	
	public MovieLensAppMain() {
		vertx = Vertx.vertx()
	}
	
	MovieLensAppMain init(Config config) {
	
		mainCfg = config
		
		vitalserviceCfg = config.getConfig("vitalservice")
		
		vitalauthCfg = config.getConfig("vitalauth")
		
		webserverCfg = config.getConfig("webserver")
		
		return this
	}
	
	def startVitalService() {
		
		
		vertx.deployVerticle("groovy:" + VitalServiceVertx3.class.canonicalName, 
			[
				worker: true, 
				instances: Runtime.getRuntime().availableProcessors(), 
				config: vitalserviceCfg.root().unwrapped()
			]) { AsyncResult<String> vsRes ->
			
			if(!vsRes.succeeded()) {
				vsRes.cause().printStackTrace()
				System.err.println("VitalService verticle init failed: " + vsRes.cause())
				System.exit(-1)
			}
			
			println "VitalService verticle started: ${vsRes.result()}"
			
			startVitalAuthVerticle()
		}
	}
	
	def startVitalAuthVerticle() {
		
		vertx.deployVerticle("groovy:" + VitalAuthManager.class.canonicalName,
			[
				worker: false,
				instances: Runtime.getRuntime().availableProcessors(),
				config: vitalauthCfg.root().unwrapped()
			]) { AsyncResult<String> aRes ->
		
			if(!aRes.succeeded()) {
				aRes.cause().printStackTrace()
				System.err.println("VitalAuth verticle init failed: " + aRes.cause())
				System.exit(-1)
			}
			
			println "VitalAuth verticle started: ${aRes.result()}"
		
			startMovieLensAppVerticle()
			
		}
		
		
	}
	
	
	def startMovieLensAppVerticle() {
		
		vertx.deployVerticle("groovy:" + MovieLensAppVerticle.class.canonicalName, 
			[
				config: mainCfg.root().unwrapped(), 
				instances: Runtime.getRuntime().availableProcessors()
			]) { AsyncResult<String> res ->
		
			if(!res.succeeded()) {
				res.cause().printStackTrace()
				System.err.println("${MovieLensAppVerticle.class.canonicalName} init failed: " + res.cause())
				System.exit(-1)
			}
			
			println "${MovieLensAppVerticle.class.canonicalName} started: ${res.result()}"
		
			//vertx will scale nicely
			for(int i = 0 ; i < Runtime.getRuntime().availableProcessors(); i++) {
				startHttpServer()
			}
			
		}
			
		
	}
		
	def startHttpServer() {
		
//		Config webserver = config.getConfig("webserver")
		
		def router = Router.router( vertx )

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
			address: ai.vital.auth.vertx3.VitalJSEndpointsManager.ENDPOINT_PREFIX + MovieLensAppVerticle.appID
		]
		
		def outboundPermitted1 = [
			//addressRegex:"stream\\..+"
		]
		
		def sockJSOptions = [
			inboundPermitteds:[
			  inboundPermitted1
			]/*,
			outboundPermitteds:[
			  outboundPermitted1
			]*/
		  ]
		
		sockJSHandler.bridge(sockJSOptions)
		router.get('/status').handler(new StatusHandler())
		router.route('/eventbus/*').handler(sockJSHandler)
				
		router.route().handler(staticHandler)
		
		def cfg = webserverCfg.root().unwrapped()
		
		def server = vertx.createHttpServer(cfg)
		server.requestHandler(router.&accept)
		server.listen() { AsyncResult<HttpServer> res ->
		
			if(! res.succeeded() ) {
				res.cause().printStackTrace()
				System.err.println("Error when starting www server: ${res.cause()}")
				System.exit(-1)
			}
				
			println "WWW server started - host: ${cfg.host} port ${cfg.port}"
		}
		
	}
	
}
