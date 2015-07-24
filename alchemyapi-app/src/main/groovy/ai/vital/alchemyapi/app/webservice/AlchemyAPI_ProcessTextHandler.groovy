package ai.vital.alchemyapi.app.webservice

import ai.vital.domain.Document
import ai.vital.service.vertx.handler.functions.VertxHandler
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.exception.VitalServiceException
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException
import ai.vital.vitalservice.factory.VitalServiceFactory
import ai.vital.vitalservice.model.App
import ai.vital.vitalservice.model.Organization
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.uri.URIGenerator

class AlchemyAPI_ProcessTextHandler extends VertxHandler {

	public AlchemyAPI_ProcessTextHandler() {
		super(null);
	}

	@Override
	public ResultList callFunction(Organization organization, App app,
			String function, Map<String, Object> params)
			throws VitalServiceUnimplementedException, VitalServiceException {

				
		ResultList rl = new ResultList();
		
		try {
			
			String text = getRequiredStringParam('text', params)
			
			ResultList qrl = VitalServiceFactory.getVitalService().callFunction('commons/scripts/Aspen_Usage',
				[action: 'incrementUsage', key:'alchemyapi', increment: 1, limit: 1000])
				
			if(qrl.status.status != VitalStatus.Status.ok) {
				throw new Exception("Error when incrementing usage counter: ${qrl.status.message}")
			}
				
			
			Document doc = new Document()
			doc.URI = URIGenerator.generateURI((App) null, Document.class)
			
			String modelName = null
			
			if(text.trim().matches('^https?://\\S+$')) {
				
				modelName = 'alchemy-api-url-categorization'
				
				doc.url = text.trim()
						
			} else {
			
				modelName = 'alchemy-api-text-categorization'
				
				doc.body = text
				
			}
			
			
			//call datascript
			rl = VitalServiceFactory.getVitalService().callFunction('commons/scripts/Aspen_Predict', 
					['inputBlock': [doc], 'modelName': modelName])
				
		} catch(Exception e) {
			e.printStackTrace();
			rl.setStatus(VitalStatus.withError(e.localizedMessage))
		}
		
		return rl;
	}

}

