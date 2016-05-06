package ai.vital.amazon.echo.humor.app.main

import io.vertx.core.AsyncResult
import io.vertx.groovy.core.Vertx
import io.vertx.groovy.core.http.HttpServer
import io.vertx.groovy.ext.web.Router
import io.vertx.groovy.ext.web.RoutingContext;
import ai.vital.amazon.echo.humor.app.webservice.FunnybotWebserviceAppVerticle
import ai.vital.amazon.echo.humor.app.webservice.RequestHandler
import ai.vital.amazon.echo.humor.app.webservice.StatusHandler
import ai.vital.service.vertx3.VitalServiceVertx3
import ai.vital.service.vertx3.async.VitalServiceAsyncClient
import ai.vital.vitalsigns.VitalSigns;
import ai.vital.vitalsigns.model.DomainModel
import ai.vital.vitalsigns.model.VitalApp

import com.typesafe.config.Config
import com.typesafe.config.ConfigFactory

class FunnyBotAppMain {

	
	def static main(args) {
		
		println "Funny Bot App - Vertx 3"
		
		if(args.length != 1) {
			System.err.println('usage: funnybot-app <conf_file>')
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
		
		new FunnyBotAppMain().init(config).startVitalService()
		
	}
	
	Vertx vertx
	Config mainCfg
	Config vitalserviceCfg
	Config webserverCfg
	
	public FunnyBotAppMain() {
		vertx = Vertx.vertx()
	}
	
	FunnyBotAppMain init(Config config) {
	
		mainCfg = config
		
		vitalserviceCfg = config.getConfig("vitalservice")
		
		webserverCfg = config.getConfig("webserver")
		
		return this
	}
	
	def startVitalService() {
		
		println "VitalSigns init"
		
		boolean nlpModelFound = false
		boolean humorAppModelFound = false
		for(DomainModel dm : VitalSigns.get().getDomainModels() ) {
			if(dm.URI == 'http://vital.ai/ontology/vital-nlp') {
				nlpModelFound = true
			} else if(dm.URI == 'http://vital.ai/ontology/humor-app') {
				humorAppModelFound = true
			}
		}
		
		if(!nlpModelFound) { throw new RuntimeException("NLP domain model not found") }
		if(!humorAppModelFound) { throw new RuntimeException("humor-app domain model not found")}
		
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
			
			startFunnyBotAppVerticle()
			
		}
		
		
	}
	
	
	def startFunnyBotAppVerticle() {
		
		vertx.deployVerticle("groovy:" + FunnybotWebserviceAppVerticle.class.canonicalName, 
			[
				config: mainCfg.root().unwrapped(), 
				instances: Runtime.getRuntime().availableProcessors()
			]) { AsyncResult<String> res ->
		
			if(!res.succeeded()) {
				res.cause().printStackTrace()
				System.err.println("${FunnybotWebserviceAppVerticle.class.canonicalName} init failed: " + res.cause())
				System.exit(-1)
			}
			
			println "${FunnybotWebserviceAppVerticle.class.canonicalName} started: ${res.result()}"
		
			//vertx will scale nicely
			for(int i = 0 ; i < Runtime.getRuntime().availableProcessors(); i++) {
				
				startHttpServer()
				
			}
			
		}
			
		
	}
		
	def startHttpServer() {
		
//		Config webserver = config.getConfig("webserver")
		
		def router = Router.router( vertx )

		
		if(!FunnybotWebserviceAppVerticle.appID) throw new RuntimeException("AppID not set in " + FunnybotWebserviceAppVerticle.class.canonicalName)
		
		VitalServiceAsyncClient vitalservice = new VitalServiceAsyncClient(vertx, VitalApp.withId(FunnybotWebserviceAppVerticle.appID))

		router.get('/status').handler(new StatusHandler())
		
		router.route("/funnybot-webservice").handler(new RequestHandler(vitalservice))
//		matcher.noMatch(staticHandler());
		router.route().handler({ RoutingContext rc ->
			rc.response().setStatusCode(404).end("NOT FOUND", "UTF-8")
		})
		
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
