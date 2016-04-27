package ai.vital.metamind.app.webservice

import org.apache.commons.collections.map.LRUMap

import ai.vital.service.vertx3.VitalServiceVertx3;
import ai.vital.service.vertx3.handler.functions.VertxHandler
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.exception.VitalServiceException
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalOrganization
import ai.vital.vitalsigns.uri.URIGenerator

import com.vitalai.domain.nlp.Image

class MetaMind_ProcessImageHandler extends VertxHandler {

	public MetaMind_ProcessImageHandler() {
		super(null);
	}

	//keep a map of 10 last requests
	Map map = Collections.synchronizedMap(new LRUMap(10))
	
	@Override
	public ResultList callFunction(VitalOrganization organization, VitalApp app,
			String function, Map<String, Object> params, Map<String, Object> sessionParams)
			throws VitalServiceUnimplementedException, VitalServiceException {

				
		ResultList rl = new ResultList();
		
		try {
			
			String id = getRequiredStringParam('id', params)
			
			String filename = getRequiredStringParam('filename', params)
			
			String type = getRequiredStringParam('filetype', params)
			
			String content = getRequiredStringParam('content', params);
			
			Integer part = params.get('part')
			if(part == null) throw new Exception("No part param")
			
			Integer total = params.get('total')
			if(total == null) throw new Exception("No total param")
			
			StringBuilder sb = null
			if(part.intValue() == 1) {
				sb = new StringBuilder()
				map.put(id, sb)
			} else {
				sb = map.get(id)
				if(sb == null) throw new Exception("No upload context for id: ${id}");
			}
			
			sb.append(content)
			
			if(part == total) {
				
				map.remove(id)
				
				def vitalService = VitalServiceVertx3.registeredServices.get(app.appID.toString())
				
				ResultList qrl = vitalService.callFunction('commons/scripts/Aspen_Usage',
					[action: 'incrementUsage', key:'metamind', increment: 1, limit: 1000])
				
				if(qrl.status.status != VitalStatus.Status.ok) {
					throw new Exception("Error when incrementing usage counter: ${qrl.status.message}")
				}
				
				
				//call datascript
				
				Image img = new Image()
				img.URI = URIGenerator.generateURI((VitalApp) null, Image.class)
				img.imageData = sb.toString() 
				
				rl = vitalService.callFunction('commons/scripts/Aspen_Predict', 
					['inputBlock': [img], 'modelName': 'metamind-image-categorization'])
				
			}
			
			
		} catch(Exception e) {
			e.printStackTrace();
			rl.setStatus(VitalStatus.withError(e.localizedMessage))
		}
		
		return rl;
	}

}

