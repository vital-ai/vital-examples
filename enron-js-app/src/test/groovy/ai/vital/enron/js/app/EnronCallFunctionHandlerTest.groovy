package ai.vital.enron.js.app

import ai.vital.enron.js.app.EnronCallFunctionHandler;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.GraphObject;
import junit.framework.TestCase

class EnronCallFunctionHandlerTest extends TestCase {

	static EnronCallFunctionHandler handler = null
	
	static VitalService service = null
	
	@Override
	protected void setUp() throws Exception {

		super.setUp();
		
		if(service == null) {
			
			VitalServiceFactory.setServiceProfile('vitaldevelopmentprime')
			
			service = VitalServiceFactory.getVitalService()
			
			handler = new EnronCallFunctionHandler()
			
		}
		
		
		
		
				
	}
	
	public void testSearch() {
		
		ResultList rl = handler.callFunction(service.getOrganization(), service.getApp(), EnronCallFunctionHandler.do_search, ['query' : 'application', 'offset': 0, 'limit': 10] )
		
		assertEquals(rl.status.status, VitalStatus.Status.ok)
		
		println "SEARCH " + rl.totalResults
		
		for(GraphObject g : rl) {
			println g.URI
		}
		
	}
	
	public void testMessageDetails() {
		
		ResultList rl = handler.callFunction(service.getOrganization(), service.getApp(), EnronCallFunctionHandler.get_details, ['URI': 'http://vital.ai/vital.ai/app/EnronEmail/jones-t__notes_inbox__5235.'])
		
		
		assertEquals(rl.status.status, VitalStatus.Status.ok)
		
		println "MSG DETAILS"
		
		for(GraphObject g : rl) {
			println g.URI
		}
		
	}
	
	public void testPersonDetails() {
		
		ResultList rl = handler.callFunction(service.getOrganization(), service.getApp(), EnronCallFunctionHandler.get_details, ['URI': 'http://vital.ai/vital.ai/app/EnronPerson/tana.jones%40enron.com'])
				
		assertEquals(rl.status.status, VitalStatus.Status.ok)
		
		println "PERSON DETAILS"
		
		for(GraphObject g : rl) {
			println g.URI
		}
		
	}
	
	public void testGetInbox() {
		
		ResultList rl = handler.callFunction(service.getOrganization(), service.getApp(), EnronCallFunctionHandler.get_messages, ['URI': 'http://vital.ai/vital.ai/app/EnronPerson/tana.jones%40enron.com', 'mailbox': 'inbox', 'offset': 0, 'limit': 10])
		
		assertEquals(rl.status.status, VitalStatus.Status.ok)
		
		println "INBOX"
		
		for(GraphObject g : rl) {
			println g.URI
		}
		
	}
	
	public void testGetOutbox() {
		
		ResultList rl = handler.callFunction(service.getOrganization(), service.getApp(), EnronCallFunctionHandler.get_messages, ['URI': 'http://vital.ai/vital.ai/app/EnronPerson/tana.jones%40enron.com', 'mailbox': 'outbox', 'offset': 0, 'limit': 10])
				
		assertEquals(rl.status.status, VitalStatus.Status.ok)
				
		println "OUTBOX"
				
		for(GraphObject g : rl) {
			println g.URI
		}
		
	}
	
}
