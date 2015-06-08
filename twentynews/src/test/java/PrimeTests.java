import java.util.HashMap;

import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.exception.VitalServiceException;
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList;


public class PrimeTests {

	public static void main(String[] args) throws VitalServiceUnimplementedException, VitalServiceException {
		
		VitalServiceFactory.setServiceProfile("vitalservice020wordnetprime");
		VitalService service = VitalServiceFactory.getVitalService();
		
		ResultList rl = service.callFunction("vital.ai/app/Aspen_ModelManagerJob", new HashMap<String, Object>());
		
		VitalStatus status = rl.getStatus();
		System.out.println(status + " errors: " + status.getErrors() + " successes" + status.getSuccesses() + " failedURIs" + status.getFailedURIs() + " total: " + rl.getTotalResults());
		
	}
	
}
