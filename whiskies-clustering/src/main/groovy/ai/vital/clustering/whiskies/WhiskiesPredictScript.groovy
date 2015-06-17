package ai.vital.clustering.whiskies

import ai.vital.domain.Annotation;
import ai.vital.domain.Document
import ai.vital.domain.FlowPredictModel;
import ai.vital.domain.TargetNode;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock;
import ai.vital.vitalsigns.meta.GraphContext;
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.property.IProperty;
import ai.vital.vitalsigns.model.property.URIProperty;

class WhiskiesPredictScript {

	static String WP = "whiskies-predict"
	
	
	def static main(args) {
	
		def cli = new CliBuilder(usage: "${WP} [options]")
		cli.with {
			n longOpt: 'model-name', 'prediction model name, mutually exclusive with model-uri', args:1, required:false
			u longOpt: 'model-uri', 'prediction model URI, mutually exclusive with model-name', args:1, required:false
			prof longOpt: 'profile', 'vitalservice profile, default: default', args: 1, required: false
			bf longOpt: 'builder-file', 'vital builder file path with INSTANTIATE', args:1, required: true
		}
			
		def options = cli.parse(args)
		if(!options) {
			return
		}
		
		String modelName = options.n ? options.n : null
		String modelURI = options.u ? options.u : null
		String builderFilePath = options.bf
			
		if((modelName && modelURI) || (!modelName && !modelURI)) {
			System.err.println "--model-name and --model-uri parameters are mutually exclusive, exactly 1 required"
			return
		}
		
		if(modelName) println ("Model name: $modelName")
		if(modelURI) println ("Model name: $modelURI")
		println "Builder file path: ${builderFilePath}"
		
		File builderFile = new File(builderFilePath)
		if(!builderFile.isFile()) {
			System.err.println "builder file path is not a file or does not exist: ${builderFile.getAbsolutePath()}"
			return
		}
		
		
		String profile = options.prof ? options.prof : null
		if(profile != null) {
			println "Setting vitalservice profile to: ${profile}"
			VitalServiceFactory.setServiceProfile(profile)
		} else {
			println "using default vitalservice profile: ${VitalServiceFactory.getServiceProfile()}"
		}
		
		def service = VitalServiceFactory.getVitalService()
		

		def builder = new VitalBuilder()
		
		println "Parsing builder file..."
		List<VitalBlock> blocks = builder.queryString(builderFile.text).toBlock()
		
		println "Parsed into ${blocks.size()} blocks"
		
		for(int i = 0 ; i < blocks.size(); i++) {
			
			println "Processing block ${i+1} of ${blocks.size()}"
			ResultList predictRL = service.callFunction("commons/scripts/Aspen_Predict", ['modelName': modelName, 'modelURI': modelURI, 'inputBlock': blocks.get(i).toList()] )
			
			if(predictRL.status.status != VitalStatus.Status.ok) {
				System.err.println "Error when calling predict datascript: ${predictRL.status.message}"
				continue
			}
			
			println "predictions:"
			
			int c = 0
			
			for(GraphObject g : predictRL) {
				
				if(g instanceof TargetNode) {
					
					println "${++c}:  cluster ${g.targetDoubleValue.intValue()} , score: ${g.targetScore}"
					
				}
				
			}
			
			if(c == 0) println "(none)"
			
		}
		

		
		

		
	}
	
}
