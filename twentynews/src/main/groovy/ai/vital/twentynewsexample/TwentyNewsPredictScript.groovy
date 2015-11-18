package ai.vital.twentynewsexample

import org.example.twentynews.domain.Message;

import com.vitalai.domain.nlp.Annotation;
import com.vitalai.domain.nlp.Document
import com.vitalai.domain.nlp.FlowPredictModel;
import com.vitalai.domain.nlp.TargetNode;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock;
import ai.vital.vitalsigns.meta.GraphContext;
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalServiceKey
import ai.vital.vitalsigns.model.property.IProperty;
import ai.vital.vitalsigns.model.property.URIProperty;

class TwentyNewsPredictScript {

	static String TP = "twentynews-predict"
	
	
	def static main(args) {
	
		def cli = new CliBuilder(usage: "${TP} [options]")
		cli.with {
			n longOpt: 'model-name', 'prediction model name, mutually exclusive with model-uri', args:1, required:false
			u longOpt: 'model-uri', 'prediction model URI, mutually exclusive with model-name', args:1, required:false
			prof longOpt: 'profile', 'vitalservice profile, default: default', args: 1, required: false
			bf longOpt: 'builder-file', 'vital builder file path with INSTANTIATE', args:1, required: true
			sk longOpt: 'service-key', 'service key, xxxx-xxxx-xxxx format', args: 1, required: true
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
			println "vitalservice profile: ${profile}"
		} else {
			println "using default vitalservice profile: ${VitalServiceFactory.DEFAULT_PROFILE}"
			profile = VitalServiceFactory.DEFAULT_PROFILE
		}
		
		VitalServiceKey serviceKey = new VitalServiceKey().generateURI((VitalApp) null)
		serviceKey.key = options.sk
		
		def service = VitalServiceFactory.openService(serviceKey, profile)
		

		def builder = new VitalBuilder()
		
		println "Parsing builder file..."
		List<VitalBlock> blocks = builder.queryString(builderFile.text).toBlock()
		
		println "Parsed into ${blocks.size()} blocks"
		
		for(int i = 0 ; i < blocks.size(); i++) {
			
			def block = blocks.get(i)
			
			Message msg = null
			
			for(GraphObject g : block.toList()) {
				
				if(g instanceof Message) {
					msg = g
				}
				
			}
			
			if(msg == null) {
				System.err.println("No 20news message in input block - skipping")
				continue
			}
			
			println "Processing block ${i+1} of ${blocks.size()}"
			ResultList predictRL = service.callFunction("commons/scripts/Aspen_Predict", ['modelName': modelName, 'modelURI': modelURI, 'inputBlock': block.toList()] )
			
			if(predictRL.status.status != VitalStatus.Status.ok) {
				System.err.println "Error when calling predict datascript: ${predictRL.status.message}"
				continue
			}
			
			println "Message subject: ${msg.subject}, predictions:"
			
			int c = 0
			
			for(GraphObject g : predictRL) {
				
				if(g instanceof TargetNode) {
					
					println "${++c}:  ${g.targetStringValue} , score: ${g.targetScore}"
					
				}
				
			}
			
			if(c == 0) println "(none)"
			
		}
		

		
		

		
	}
	
}
