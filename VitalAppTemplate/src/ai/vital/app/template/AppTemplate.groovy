package ai.vital.app.template

import ai.vital.vitalservice.VitalService;

import ai.vital.vitalservice.factory.Factory;

class AppTemplate {

	public static void main(String[] args) {
		
		VitalService service = Factory.getVitalService()
		
		
		service.ping();
		
	}
	
}
