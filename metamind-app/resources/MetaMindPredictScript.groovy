package commons.scripts

import groovy.json.JsonOutput;
import groovy.json.JsonSlurper;

import java.util.Map;

import org.apache.commons.httpclient.HttpClient
import org.apache.commons.httpclient.methods.PostMethod
import org.apache.log4j.chainsaw.LoggingReceiver.Slurper;

import ai.vital.prime.VitalPrime;
import ai.vital.prime.groovy.v2.VitalPrimeGroovyScriptV2;
import ai.vital.prime.groovy.v2.VitalPrimeScriptInterfaceV2;
import ai.vital.prime.uribucket.UriBucket;
import ai.vital.prime.uribucket.UriBucketComponent;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultElement
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.VITAL_Category

class MetaMindPredictScript implements VitalPrimeGroovyScriptV2 {

	static String apiKey = "RHJW8lmfwFnZl6kIhgubsGmHzfwVG2fcPcE56MKnJ00JPSZeIg";
	
	static int MAX_USAGE = 1000
	
	static String METAMIND_API_USAGE = 'METAMIND_API_USAGE'
	
	static HttpClient client = new HttpClient();
	
	@Override
	public ResultList executeScript(
			VitalPrimeScriptInterfaceV2 scriptInterface,
			Map<String, Object> parameters) {

		ResultList rl = new ResultList()
		
		try {
			
			String action = parameters.get('action')
			
			if(!action) throw new Exception("No 'action' parameter")
			
			if( ! VitalPrime.get().uriBucketsComponent ) throw new Exception("No uri buckets component")
			
			UriBucketComponent bucket = VitalPrime.get().uriBucketsComponent.getStatsBucket();
			
			if(bucket == null) throw new Exception("No stats bucket");
			
			if(!( action == 'getQuota' || action == 'predict')) throw new Exception("Unknown action: ${action}, only 'getQuota' and 'predict' implemented")
				
			
			int currentUsage = 0
			
			List<UriBucket> buckets = bucket.getLastNBuckets(true, 24)
			
			GregorianCalendar current = new GregorianCalendar()
			int dayOfMonth = current.get(GregorianCalendar.DAY_OF_MONTH)
			
			for(UriBucket b : buckets) {
				
				GregorianCalendar gc = new GregorianCalendar()
				gc.setTime(b.getBucketStart())
				
				int d = gc.get(GregorianCalendar.DAY_OF_MONTH)
				
				if(d == dayOfMonth) {
					
					Integer v = b.getHistogram().get(METAMIND_API_USAGE)
					
					if(v == null) v = 0
					
					currentUsage += v
					
				}
				
			}
			
			int quota = MAX_USAGE - currentUsage
			if(quota < 0) quota = 0
			
			if(action == 'getQuota') {
				
				rl.setLimit(quota)
				
			} else if(action == 'predict') {

				String content = parameters.get('content')
				if(!content) throw new RuntimeException("No 'content' parameter");
						
				if(quota < 1) throw new Exception("Qouta limit reached today: ${MAX_USAGE}")

				
				PostMethod pm = new PostMethod("https://www.metamind.io/vision/classify");
				
				pm.addRequestHeader("Authorization", "Basic " + apiKey);
				
				pm.addParameter("classifier_id", "imagenet-1k-net");
				
				
				Map<String, Object> m = new HashMap<String, Object>();
				m.put("classifier_id", "imagenet-1k-net");
		//		m.put("image_url", "https://www.metamind.io/static/images/classification-demo-examples/macarons.jpg");
				m.put("image_url", content);
				String json = JsonOutput.toJson(m);
				
				pm.setRequestBody(json);
				
				bucket.putUri(METAMIND_API_USAGE, null, 1)
				
				
				int status = client.executeMethod(pm);
				
				String resp = "";
				try {
					resp = pm.getResponseBodyAsString();
				} catch(Exception e) {
				}
				
				pm.releaseConnection();
				
				if(status < 200 || status > 299) {
					throw new Exception("MetaMind API returned status ${status} - ${resp}")
				}
				
				JsonSlurper slurper = new JsonSlurper()
				
				Map response = slurper.parseText(resp)
				
				List predictions = response.predictions
				
				for(Map pred : predictions) {
					
					VITAL_Category c1 = new VITAL_Category();
					c1.URI = "urn:metamind/" + pred.class_id
					c1.name = pred.class_name
					rl.results.add(new ResultElement(c1, pred.prob))
					
				}
				
				rl.setLimit(quota-1)
				
			}
			
			
		} catch(Exception e) {
			rl.setStatus(VitalStatus.withError(e.localizedMessage))
		}
		
		return rl;
	}

}
