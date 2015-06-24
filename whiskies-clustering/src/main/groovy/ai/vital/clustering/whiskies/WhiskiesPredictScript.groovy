package ai.vital.clustering.whiskies

import org.example.whiskies.domain.Whisky;

import ai.vital.domain.Annotation;
import ai.vital.domain.Document
import ai.vital.domain.FlowPredictModel;
import ai.vital.domain.TargetNode;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.block.BlockCompactStringSerializer;
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.BlockIterator;
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
			bf longOpt: 'builder-file', 'vital builder file path with INSTANTIATE, mutually exclusive with --block-file', args:1, required: false
			bl longOpt: 'block-file', 'input vital block filem, extension: ( .vital[.gz] ), mutually exclusive with --builder-file', args: 1, required: false
		}
			
		if(args.length == 0) {
			cli.usage()
			return
		}
		
		def options = cli.parse(args)
		
		
		if(!options) {
			return
		}
		
		String modelName = options.n ? options.n : null
		String modelURI = options.u ? options.u : null
		String builderFilePath = options.bf ? options.bf : null
		String blockFilePath = options.bl ? options.bl : null
			
		if((modelName && modelURI) || (!modelName && !modelURI)) {
			System.err.println "--model-name and --model-uri parameters are mutually exclusive, exactly 1 required"
			return
		}
		
		if(modelName) println ("Model name: $modelName")
		if(modelURI) println ("Model name: $modelURI")
		
		if( builderFilePath &&  blockFilePath ) {
			System.err.println "--builder-file and --block-file options are mutually exclusive, cannot accept both"
			return
		}
		
		if(!builderFilePath && ! blockFilePath ) {
			System.err.println "either --builder-file or --block-file required"
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
		
		if(builderFilePath != null) {
			
			println "Builder file path: ${builderFilePath}"
			
			File builderFile = new File(builderFilePath)
			if(!builderFile.isFile()) {
				System.err.println "builder file path is not a file or does not exist: ${builderFile.getAbsolutePath()}"
				return
			}
			
			def builder = new VitalBuilder()
			
			println "Parsing builder file..."
			List<VitalBlock> blocks = builder.queryString(builderFile.text).toBlock()
			
			println "Parsed into ${blocks.size()} blocks"
			
			for(int i = 0 ; i < blocks.size(); i++) {
				
				println "Processing block ${i+1} of ${blocks.size()}"
				
				processBlock(service, modelName, modelURI, blocks.get(i))
				
			}
			
		} else if(blockFilePath != null) {
		
			println "Block file path: ${blockFilePath}"
		
			File blockFile = new File(blockFilePath)
			
			int i = 0
			
			for(VitalBlock b : BlockCompactStringSerializer.getBlocksIterator(blockFile)) {
				
				i++
				
				println "Processing block ${i}"
				
				processBlock(service, modelName, modelURI, b)
				
			}
		
		
		}
		
		
	}
	
	def static processBlock(VitalService service, String modelName, String modelURI, VitalBlock block) {

		ResultList predictRL = service.callFunction("commons/scripts/Aspen_Predict", ['modelName': modelName, 'modelURI': modelURI, 'inputBlock': block.toList()] )

		Whisky whisky = null
		for(GraphObject g : block.toList() ) {
			if(g instanceof Whisky) {
				whisky = g
			}
		}
		
		if(!whisky) {
			System.err.println("No whisky node in a block - skipping")
			return
		}
		
				
		if(predictRL.status.status != VitalStatus.Status.ok) {
			System.err.println "Error when calling predict datascript: ${predictRL.status.message}"
			return
		}
		
		println "Whisky name ${whisky.name},  predictions:"
		
		int c = 0
		
		for(GraphObject g : predictRL) {
			
			if(g instanceof TargetNode) {
				
				println "${++c}: cluster ${g.targetDoubleValue.intValue()}, score: ${g.targetScore}"
				
			}
			
		}
		
		if(c == 0) println "(none)"

				
	}
	
}
