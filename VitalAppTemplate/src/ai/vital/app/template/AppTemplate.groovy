package ai.vital.app.template

import ai.vital.service.VitalService;

class AppTemplate {

	public static void main(String[] args) {
		
		VitalService.setEndpoint("http://127.0.0.1:9080", "", "")
		
		VitalService.getInstance().ping();
		
	}
	
}
