package ai.vital.amazon.echo.humor.app.webservice

import groovy.json.JsonOutput;
import groovy.json.JsonSlurper;

import org.apache.velocity.app.event.NullSetEventHandler.ShouldLogOnNullSetExecutor;
import org.vertx.java.core.Handler
import org.vertx.java.core.buffer.Buffer
import org.vertx.java.core.http.HttpServerRequest;
import org.vertx.java.core.http.HttpServerResponse;

class RequestHandler implements Handler<HttpServerRequest> {

	static final String APPLICATION_JSON_CHARSET_UTF_8 = "application/json;charset=UTF-8"

	static List<String> jokesDB = [
		'The clear history button in your browser has saved more lives than Superman.',
		'I bet earth makes fun of the other planets for having no life',
		'the color red white and blue represents freedom, until it\'s flashing in the back of your car...',
		'Neil Armstrong was the first man on the moon, Neil A. backwards is Alien. Anyone else freaked out right now?!?!',
		'your mother is so intelligent that she brought a fork and a knife to the hunger games'
	]
	
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
		
		req.bodyHandler(new Handler<Buffer>(){
			
			void handle(Buffer data) {
		
				try {
					
					handleRequest(req, res, data)
				} catch(Exception e) {
				
					e.printStackTrace()
				
					//catch everything as a server side error?
					res.setStatusCode(500).setStatusMessage("INTERNAL SERVER ERROR").end("Exception: ${e.localizedMessage}" ,'UTF-8')
				
				}
				
						
			}
			
		});
		
		
	}

	static void badRequest(HttpServerResponse res, String message) {
		println "400 - BAD REQUEST - ${message}"
		res.setStatusCode(400).setStatusMessage("BAD REQUEST").end(message, 'UTF-8')
	}
	
	static void handleRequest(HttpServerRequest req, HttpServerResponse res, Buffer data) {
	
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
		
		String outputSpeechText = null
		
		String repromptSpeechText = null
		
		String cardTitle = null
		
		String cardContent = null
		
		cardTitle = "The FunnyBot"
		
		boolean shouldEndSession = false;
		
		Random r = new Random()
		
		if(type == "LaunchRequest") {
		
//			the funnybot app to ask "would you like to hear another joke?" after telling a joke. "yes" would tell another joke. "no" would end the session. anything else would do "i didn't understand that. would you like to hear another joke?" (this is to test keeping the session going and ending it upon a "no"). Dariusz Kobylarz
			outputSpeechText = "Hi! I'm the FunnyBot. Would you like to hear a joke?"
			
			cardContent = outputSpeechText
			
			repromptSpeechText = "I didn't understand that. Would you like to hear a joke?"
			
		} else if(type == "IntentRequest") {

		
			Map intent = requestObj.request.intent
			
			if(!intent) throw new RuntimeException("No request.intent object")
 			
			String name = intent.name
			
			if(!name) throw new RuntimeException("No request.intent.name string")
			
			if(name == 'TellAJoke') {
				
				outputSpeechText = jokesDB.get(r.nextInt(jokesDB.size())) + '. Do you want to hear another joke?'
				
			} else if( name == 'WantAJoke' ) {
			
				def Answer = intent.slots.Answer
				
				if(!Answer) throw new RuntimeException("No 'Answer' slot")
				
				String answerVal = Answer.value
				
				if(answerVal.equalsIgnoreCase('no')) {
					
					outputSpeechText = "Have a nice day!"
					
					shouldEndSession = true;
					
				} else {
				
					outputSpeechText = jokesDB.get(r.nextInt(jokesDB.size())) + '. Do you want to hear another joke?'
				
				}
				
			} else {
				throw new RuntimeException('Unknown intent: ${name}');
			}
			
			cardContent = outputSpeechText
			
			repromptSpeechText = "I didn't understand that. Would you like to hear another joke?"
			
			shouldEndSession = true
			
		} else if(type == "SessionEndedRequest") {
		
			repromptSpeechText = "Bye!"
			
			cardContent = repromptSpeechText
			
			repromptSpeechText = repromptSpeechText;
		
			shouldEndSession = true
			
		} else {
			throw new RuntimeException("Invalid request type: " + type)
		}
		
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
	
	static void endRequest(HttpServerResponse res, Map responseObject) {
		
		String json = JsonOutput.prettyPrint(JsonOutput.toJson(responseObject))
		
		res.headers().add("Content-Type", APPLICATION_JSON_CHARSET_UTF_8)
		res.headers().add("Content-Length", '' + json.getBytes('UTF-8').length)
		
		println "output: ${json}"
		
		res.end(json, 'UTF-8') 
		
	}
}
