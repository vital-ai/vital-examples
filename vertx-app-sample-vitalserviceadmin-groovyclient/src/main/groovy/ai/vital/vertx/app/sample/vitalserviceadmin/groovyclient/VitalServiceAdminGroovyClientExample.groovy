package ai.vital.vertx.app.sample.vitalserviceadmin.groovyclient

import com.vitalai.domain.wordnet.NounSynsetNode;

import ai.vital.domain.UserSession;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.service.admin.vertx3.async.VitalServiceAdminAsyncWebsocketClient;
import ai.vital.service.vertx3.binary.ResponseMessage;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalSelectQuery
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VitalApp;
import io.vertx.groovy.core.Vertx;;

class VitalServiceAdminGroovyClientExample {

	static main(args) {
	
		if(args.length != 2) {
			System.err.println "usage: [username] [password]"
			return
		}
		new VitalServiceAdminGroovyClientExample(args[0], args[1]).run()
		
	}

	
	VitalServiceAdminAsyncWebsocketClient client
	
	UserSession session
	
	String username
	String password
	
	String adminAppID
	VitalApp adminAppObj
	
	String vertxAppSampleAppID
	VitalApp vertxAppSampleAppObj
	
	
	VitalServiceAdminGroovyClientExample(String username, String password) {
	
		this.username = username
		this.password = password
		
		String endpointURL = "https://demos.vital.ai/vertx-admin-app-sample/eventbus/websocket/"
		adminAppID = 'apps-admin'
		vertxAppSampleAppID = 'vertx-app-sample'
		
		String address = 'endpoint.' + adminAppID
		
		
		this.client = new VitalServiceAdminAsyncWebsocketClient(Vertx.vertx(), address, endpointURL)
		
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
		
		//first obtain the app object 
		
		client.getApp(adminAppID) { ResponseMessage appRes ->
			
			if(appRes.exceptionType) {
				error("Error when getting app object: ${appRes.exceptionType} - ${appRes.exceptionMessage}")
				return
			}
			
			adminAppObj = appRes.response
			
			if(adminAppObj == null) {
				error("App not found: ${adminAppID}")
				return
			}
		
			client.callFunction(adminAppObj,'vitalauth.login', [loginType: 'AdminLogin', username: username, password: password]) { ResponseMessage loginRes ->
				
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
				
				getAppObj()
			}
			
		}		
	}
	
	def getAppObj() {
		
		client.getApp(vertxAppSampleAppID) { ResponseMessage appRes ->
			
			if(appRes.exceptionType) {
				error("Error when getting app object: ${appRes.exceptionType} - ${appRes.exceptionMessage}")
				return
			}
			
			vertxAppSampleAppObj = appRes.response
			
			if(adminAppObj == null) {
				error("App not found: ${adminAppID}")
				return
			}
			
			doQuery()
		}
		
	}
	
	def doQuery() {
		
		//first obtain the target app Object
		
		
		VitalSelectQuery query = new VitalBuilder().query {
			
			SELECT {
				
				value segments: ['wordnet']
				
				value offset: 0
				
				value limit: 10
				
				node_constraint { NounSynsetNode.class }
				node_constraint { NounSynsetNode.props().name.contains_i("apple") }
				
			}
			
		}.toQuery()
		
		client.query(vertxAppSampleAppObj, query) { ResponseMessage queryRes ->
			
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
