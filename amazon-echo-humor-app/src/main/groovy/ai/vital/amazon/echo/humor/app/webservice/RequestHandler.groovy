package ai.vital.amazon.echo.humor.app.webservice

import groovy.json.JsonOutput
import groovy.json.JsonSlurper

import java.util.Map.Entry

import org.example.humor.app.domain.EchoIntentRequest
import org.example.humor.app.domain.EchoLaunchRequest
import org.example.humor.app.domain.EchoRequest
import org.example.humor.app.domain.EchoResponse
import org.example.humor.app.domain.EchoSessionEndedRequest
import org.example.humor.app.domain.EchoSlot
import org.vertx.java.core.Handler
import org.vertx.java.core.buffer.Buffer
import org.vertx.java.core.http.HttpServerRequest
import org.vertx.java.core.http.HttpServerResponse

import ai.vital.service.vertx.async.VitalServiceAsyncClient
import ai.vital.service.vertx.binary.ResponseMessage
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.vitalsigns.uri.URIGenerator

class RequestHandler implements Handler<HttpServerRequest> {

	static final String APPLICATION_JSON_CHARSET_UTF_8 = "application/json;charset=UTF-8"

	static List<String> jokesDB = [
		'The clear history button in your browser has saved more lives than Superman.',
		'I bet earth makes fun of the other planets for having no life',
		'the color red white and blue represents freedom, until it\'s flashing in the back of your car...',
		'Neil Armstrong was the first man on the moon, Neil A. backwards is Alien. Anyone else freaked out right now?!?!',
		'your mother is so intelligent that she brought a fork and a knife to the hunger games'
	]
	
	VitalServiceAsyncClient vitalservice
			
	public RequestHandler(VitalServiceAsyncClient vitalservice) {
		this.vitalservice = vitalservice
	}
	
	@Override
	public void handle(HttpServerRequest req) {

		String method = req.method()
		
		HttpServerResponse res = req.response()
		
		if("get".equalsIgnoreCase(method)) {
			
			req.response().end("funnybot-webservice, use POST method to use the service", "UTF-8")
			return
			
		}
		
		if(!"post".equalsIgnoreCase(method)) {
			req.response().setStatusCode(405).setStatusMessage("METHOD NOT ALLOWED").end("method ${method} not allowed, only get/post")
			return
		}
		
		List all = req.headers().getAll('Content-Type')
		String contentType = req.headers().get('Content-Type')
		if(!contentType) {
			badRequest('no Content-Type') 
			return
		}
		
		if(!contentType.equalsIgnoreCase(APPLICATION_JSON_CHARSET_UTF_8)) {
			println "WARN: content-type: ${contentType}"
//			badRequest(res, "expected ${APPLICATION_JSON_CHARSET_UTF_8}")
//			return
		}
		
		final def _this = this
		
		req.bodyHandler(new Handler<Buffer>(){
			
			void handle(Buffer data) {
		
				try {
					
					_this.handleRequest(req, res, data)
				} catch(Exception e) {
				
					e.printStackTrace()
				
					//catch everything as a server side error?
					internalError(res, e.localizedMessage)
//					res.setStatusCode(500).setStatusMessage("INTERNAL SERVER ERROR").end("Exception: ${e.localizedMessage}" ,'UTF-8')
				
				}
				
						
			}
			
		});
		
		
	}

	static void badRequest(HttpServerResponse res, String message) {
		println "400 - BAD REQUEST - ${message}"
		res.setStatusCode(400).setStatusMessage("BAD REQUEST").end(message, 'UTF-8')
	}
	
	static void internalError(HttpServerResponse res, String message) {
		res.setStatusCode(500).setStatusMessage("INTERNAL SERVER ERROR").end("Exception: ${message}" ,'UTF-8')
	}
	
	void handleRequest(HttpServerRequest req, HttpServerResponse res, Buffer data) {
	
		def requestObj = null;
		try {
			String jsonString = data.toString('UTF-8')
			println "input: ${jsonString}"
			requestObj = new JsonSlurper().parseText(jsonString)
		} catch(Exception e) {
			badRequest(res, 'Error when parsing JSON: ' + e.localizedMessage)
			return
		}
			
		println requestObj
		
		String type = requestObj.request.type
		
		EchoRequest echoRequest = null
		
		List<EchoSlot> slots = []
		
		Random r = new Random()
		
		if(type == "LaunchRequest") {
		
			echoRequest = new EchoLaunchRequest()
			
		} else if(type == "IntentRequest") {

		
			Map intent = requestObj.request.intent
			
			if(!intent) throw new RuntimeException("No request.intent object")
 			
			String name = intent.name
			
			if(!name) throw new RuntimeException("No request.intent.name string")

			echoRequest = new EchoIntentRequest()
			echoRequest.name = name
			
			Map slotsMap = intent.slots
			
			if(slotsMap != null) {
				
				for( Entry<String, Object> e : slotsMap.entrySet() ) {
					
					Map sm = e.value
							
							EchoSlot slot = new EchoSlot()
					slot.URI = URIGenerator.generateURI((VitalApp) null, EchoSlot.class)
					slot.name = e.key
					slot.value = sm.value
					//slot type ?
					
					slots.add(slot)
					
				}
				
			}
			
			
		} else if(type == "SessionEndedRequest") {
		
			echoRequest = new EchoSessionEndedRequest()
			echoRequest.reason = requestObj.request.reason
		
		} else {
		
			throw new RuntimeException("Invalid request type: " + type)
			
		}
		
		echoRequest.URI = URIGenerator.generateURI((VitalApp) null, echoRequest.getClass())
		echoRequest.sessionNew = requestObj.session['new']
		echoRequest.sessionId = requestObj.session.sessionId
		
		Map functionParams = [:]
		functionParams.put(echoRequest.URI, echoRequest)
		for(EchoSlot slot : slots) {
			functionParams.put(slot.URI, slot)
		}
		
		vitalservice.callFunction('commons/scripts/HumorAppHandlerDatascript', functionParams) { ResponseMessage msg ->
			
			if(msg.exceptionMessage) {
				internalError(res, msg.exceptionMessage)
				return
			}
			
			
			ResultList rl = msg.response
			if(rl.status.status != VitalStatus.Status.ok) {
				internalError(res, rl.status.message)
				return
			}
			
			GraphObject g = rl.first()
			
			if(g == null || !(g instanceof EchoResponse)) {
				internalError(res, 'Datascript didn\'t return EchoResponse object')
				return
			}
			
			EchoResponse er = g
			
			String outputSpeechText = er.outputSpeechText?.toString()
			
			String repromptSpeechText = er.repromptOutputSpeechText?.toString()
			
			String cardTitle = er.cardTitle?.toString()
			
			String cardContent = er.cardContent?.toString()
			
			cardTitle = "The FunnyBot"
			
			boolean shouldEndSession = er.shouldEndSession ? er.shouldEndSession.booleanValue() : false;
			
			Map response = [
				"outputSpeech": [
					"type": "PlainText",
					"text": outputSpeechText
				],
				"card": [
					"type": "Simple",
					"title": cardTitle,
					"content": cardContent
				],
				"reprompt": [
					"outputSpeech": [
						"type": "PlainText",
						"text": repromptSpeechText
					]
				],
				"shouldEndSession": shouldEndSession
			];
			
			Map responseOpaque = [
				"version": "1.0",
				"sessionAttributes": [ : ],
				"response": response
			]
			
			endRequest(res, responseOpaque);
			
		}
		
		

	}
	
	static void endRequest(HttpServerResponse res, Map responseObject) {
		
		String json = JsonOutput.prettyPrint(JsonOutput.toJson(responseObject))
		
		res.headers().add("Content-Type", APPLICATION_JSON_CHARSET_UTF_8)
		res.headers().add("Content-Length", '' + json.getBytes('UTF-8').length)
		
		println "output: ${json}"
		
		res.end(json, 'UTF-8') 
		
	}
}
