package ai.vital.vertx.app.sample.vitalservice.groovyclient

import com.vitalai.domain.wordnet.NounSynsetNode;

import ai.vital.domain.UserSession;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.service.vertx3.binary.ResponseMessage;
import ai.vital.service.vertx3.websocket.VitalServiceAsyncWebsocketClient
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalSelectQuery
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VitalApp;
import io.vertx.groovy.core.Vertx;;

class VitalServiceGroovyClientExample {

	static main(args) {
	
		new VitalServiceGroovyClientExample().run()
		
	}

	
	VitalServiceAsyncWebsocketClient client
	
	UserSession session
	
	VitalServiceGroovyClientExample() {
		
		VitalApp app = VitalApp.withId('vertx-app-sample')
		
		String endpointURL = "https://demos.vital.ai/vertx-app-sample/eventbus/websocket/"
		
		this.client = new VitalServiceAsyncWebsocketClient(Vertx.vertx(), app, 'endpoint.', endpointURL)
		
	}
	
	def error(String msg) {
		
		System.err.println(msg)
		
		if(client != null) client.closeWebsocket()
		
		System.exit(1)
		
	}	
	
	def run() {
		
		client.connect() { Throwable exception ->
			
			if(exception != null) {
				error("Error when connecting to endpoing: ${exception.localizedMessage}")
				return
			}
		
			doAuth()
			
				
		}
		
	}

	def doAuth() {
		
		client.callFunction('vitalauth.login', [loginType: 'Login', username: 'guest', password: 'guest']) { ResponseMessage loginRes ->
			
			if(loginRes.exceptionType) {
				error("Logging in exception: ${loginRes.exceptionType} - ${loginRes.exceptionMessage}")
				return
			}
			
			ResultList res = loginRes.response
			
			if(res.status.status != VitalStatus.Status.ok) {
				error("Logging in failed: ${res.status.message}")
				return
			}
			
			//logged in successfully keep session for further requests
			session = res.iterator(UserSession.class).next();
			if(session == null) {
				error("No session object in positive login response")
				return
			} 
			
			println "Session obtained: ${session.sessionID}"
			
			//set it in the client for future requests
			client.appSessionID = session.sessionID
			
			doQuery()
			
		}		
	}
	
	def doQuery() {
		
		//json serialization fails with query objects
		String queryString= """

			SELECT {
				
				value segments: ['wordnet']
				
				value offset: 0
				
				value limit: 10
				
				node_constraint { ${NounSynsetNode.class.canonicalName}.class }
				node_constraint { ${NounSynsetNode.class.canonicalName}.props().name.contains_i("apple") }
				
			}

		"""
		client.query(queryString) { ResponseMessage queryRes ->
			
			if(queryRes.exceptionType) {
				error("Query exception: ${queryRes.exceptionType} - ${queryRes.exceptionMessage}")
				return
			}
			
			ResultList queryRL = queryRes.response
			
			println "Found ${queryRL.totalResults} total results, listing first 10..."
			
			int i = 0
			for(GraphObject g : queryRL) {
				i++
				println "${i} ${g.name} ${g.URI}"
				
			}
			
			//close client, otherwise internal vertx thread won't let stop the jvm
			client.closeWebsocket()
			
		}
		
	}
}
