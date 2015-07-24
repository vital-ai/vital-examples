package ai.vital.metamind.app.webservice

import java.util.Map

import org.apache.commons.collections.map.LRUMap;
import org.vertx.groovy.core.sockjs.SockJSServer;

import ai.vital.domain.Image
import ai.vital.domain.ImageReference;
import ai.vital.service.vertx.handler.AbstractVitalServiceHandler;
import ai.vital.service.vertx.handler.CallFunctionHandler;
import ai.vital.service.vertx.handler.functions.VertxHandler;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.exception.VitalServiceException;
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.model.App;
import ai.vital.vitalservice.model.Organization;
import ai.vital.vitalservice.query.ResultElement
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.VITAL_Category;
import ai.vital.vitalsigns.model.VITAL_Edge;
import ai.vital.vitalsigns.model.property.URIProperty;
import ai.vital.vitalsigns.uri.URIGenerator;

class MetaMind_ProcessImageHandler extends VertxHandler {

	public MetaMind_ProcessImageHandler() {
		super(null);
	}

	//keep a map of 10 last requests
	Map map = Collections.synchronizedMap(new LRUMap(10))
	
	@Override
	public ResultList callFunction(Organization organization, App app,
			String function, Map<String, Object> params)
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
				
				ResultList qrl = VitalServiceFactory.getVitalService().callFunction('commons/scripts/Aspen_Usage',
					[action: 'incrementUsage', key:'metamind', increment: 1, limit: 1000])
				
				if(qrl.status.status != VitalStatus.Status.ok) {
					throw new Exception("Error when incrementing usage counter: ${qrl.status.message}")
				}
				
				
				//call datascript
				
				Image img = new Image()
				img.URI = URIGenerator.generateURI((App) null, Image.class)
				img.imageData = sb.toString() 
				
				rl = VitalServiceFactory.getVitalService().callFunction('commons/scripts/Aspen_Predict', 
					['inputBlock': [img], 'modelName': 'metamind-image-categorization'])
				
			}
			
			
		} catch(Exception e) {
			e.printStackTrace();
			rl.setStatus(VitalStatus.withError(e.localizedMessage))
		}
		
		return rl;
	}

}

