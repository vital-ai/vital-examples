package ai.vital.alchemyapi.app.webservice

import com.vitalai.domain.nlp.Document

import ai.vital.service.vertx.VitalServiceMod;
import ai.vital.service.vertx.handler.functions.VertxHandler
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.exception.VitalServiceException
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException
import ai.vital.vitalservice.factory.VitalServiceFactory
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalOrganization
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.uri.URIGenerator

class AlchemyAPI_ProcessTextHandler extends VertxHandler {

	public AlchemyAPI_ProcessTextHandler() {
		super(null);
	}

	@Override
	public ResultList callFunction(VitalOrganization organization, VitalApp app,
			String function, Map<String, Object> params, Map<String, Object> sessionParams)
			throws VitalServiceUnimplementedException, VitalServiceException {

				
		ResultList rl = new ResultList();
		
		try {
			
			String text = getRequiredStringParam('text', params)
			
			def vitalService = VitalServiceMod.registeredServices.get(app.appID.toString())
			
			ResultList qrl = vitalService.callFunction('commons/scripts/Aspen_Usage',
				[action: 'incrementUsage', key:'alchemyapi', increment: 1, limit: 1000])
				
			if(qrl.status.status != VitalStatus.Status.ok) {
				throw new Exception("Error when incrementing usage counter: ${qrl.status.message}")
			}
				
			
			Document doc = new Document()
			doc.URI = URIGenerator.generateURI((VitalApp) null, Document.class)
			
			String modelName = null
			
			if(text.trim().matches('^https?://\\S+$')) {
				
				modelName = 'alchemy-api-url-categorization'
				
				doc.url = text.trim()
						
			} else {
			
				modelName = 'alchemy-api-text-categorization'
				
				doc.body = text
				
			}
			
			
			//call datascript
			rl = vitalService.callFunction('commons/scripts/Aspen_Predict', 
					['inputBlock': [doc], 'modelName': modelName])
				
		} catch(Exception e) {
			e.printStackTrace();
			rl.setStatus(VitalStatus.withError(e.localizedMessage))
		}
		
		return rl;
	}

}

