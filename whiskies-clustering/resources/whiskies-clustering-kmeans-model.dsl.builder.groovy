import java.util.Arrays;

import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
import org.example.whiskies.domain.Whisky
import ai.vital.aspen.groovy.modelmanager.AspenPrediction;
import ai.vital.aspen.model.ClusterPrediction;
import ai.vital.domain.TargetNode;
import ai.vital.predictmodel.Prediction
import ai.vital.vitalservice.model.App
import ai.vital.domain.Edge_hasTargetNode
import ai.vital.vitalsigns.uri.URIGenerator

// the input is a block with all data needed for feature generation

// the pipeline DSL could be used to collect the data for the features
// so the input in that case would be the "main" object
// and pipeline DSL within features would be used to generate the components


// the model and features can be serialized via the graph object
// for model and feature nodes, such as:
// model123 / hasFeature / feature123
// feature123.name = "title"

// the feature functions may be serialized as strings within the
// feature node
// feature123.function = '''{ VitalBlock block, Map features ->
//	  	   def doc = block.filter(Document.class).get(0)
//		   return doc.title
//	  }'''



MODEL {

	value URI: 'urn:whiskies-kmeans-clustering'

	value name: 'whiskies-kmeans-clustering'

	value type: 'spark-kmeans-prediction'

	value algorithm: 'kmeans'

	ALGORITHM {
		value clustersCount: 4
    value numIterations: 20
	}
	
	value preferredLocation: 'hdfs://somewhere'

	  // there is an input block, which minimally contains the main object
	  // it may contain other objects which could be used in the
	  // feature functions

	FEATURES {

		//1
		FEATURE {

			value URI: 'urn:body'

			value name: 'body'

			value type: 'numerical'
		}

		//2
		FEATURE {

			value URI: 'urn:sweetness'

			value name: 'sweetness'
			
			value type: 'numerical'
			
		}
		
		//3
		FEATURE {
			
			value URI: 'urn:smoky'
			
			value name: 'smoky'
			
			value type: 'numerical'
						
		}
		
		//4
		FEATURE {
			
			value URI: 'urn:medicinal'
			
			value name: 'medicinal'
			
			value type: 'numerical'
						
		}
		
		//5
		FEATURE {
			
			value URI: 'urn:tobacco'
				
			value name: 'tobacco'
					
			value type: 'numerical'
							
		}
		
		//6
		FEATURE {
			
			value URI: 'urn:honey'
				
			value name: 'honey'
					
			value type: 'numerical'
							
		}

		//7
		FEATURE {
			
			value URI: 'urn:spicy'
				
			value name: 'spicy'
					
			value type: 'numerical'
							
		}
		
		//8
		FEATURE {
			
			value URI: 'urn:winey'
				
			value name: 'winey'
					
			value type: 'numerical'
							
		}
		
		//9
		FEATURE {
			
			value URI: 'urn:nutty'
				
			value name: 'nutty'
					
			value type: 'numerical'
							
		}
		
		
		//10
		FEATURE {
			
			value URI: 'urn:malty'
				
			value name: 'malty'
					
			value type: 'numerical'
							
		}
		
		//11
		FEATURE {
			
			value URI: 'urn:fruity'
				
			value name: 'fruity'
					
			value type: 'numerical'
							
		}
		
		//12
		FEATURE {
			
			value URI: 'urn:floral'
				
			value name: 'floral'
					
			value type: 'numerical'
							
		}
	}
	
	
	AGGREGATES {

		
	}


	FUNCTIONS {

		//1
		FUNCTION {

			value provides: 'body'

			value function: { VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.body
			}

		}

		//2
		FUNCTION {

			value provides: 'sweetness'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.sweetness
			}

		}
		
		//3
		FUNCTION {
			
			value provides: 'smoky'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.smoky
			}
			
		}
		
		//4
		FUNCTION {
			
			value provides: 'medicinal'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.medicinal
			}
			
		}

		//5
		FUNCTION {
			
			value provides: 'tobacco'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.tobacco
			}
			
		}
		
		//6
		FUNCTION {
			
			value provides: 'honey'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.honey
			}
			
		}
		
		//7
		FUNCTION {
			
			value provides: 'spicy'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.honey
			}
			
		}
		
		//8
		FUNCTION {
			
			value provides: 'winey'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.winey
			}
			
		}
		
		//9
		FUNCTION {
			
			value provides: 'nutty'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.nutty
			}
			
		}
		
		//10
		FUNCTION {
			
			value provides: 'malty'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.malty
			}
			
		}
		
		//11
		FUNCTION {
			
			value provides: 'fruity'

			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.fruity
			}
			
		}
		
		//12
		FUNCTION {
			
			value provides: 'floral'
				
			value function: {  VitalBlock block, Map features ->
				def whisky = (Whisky) block.getMainObject()
				return whisky.floral
			}
			
		}
		
	}

	// returns the value to use for training
	// this could be specified in the ontology via annotations

	TRAIN {

		value type: 'numerical'
		
		value function: { VitalBlock block, Map features ->
			throw new RuntimeException("clustering train value ignored!")
		}
		
	}


// returns the objects to assert for predictions
// this could include new objects and/or updated objects
// such as the doc object with a new property


// this could be specified in the ontology via annotations

	TARGET {

		value function: { VitalBlock block, Map features, Prediction result ->

			def doc = block.getMainObject()

			def clusterPrediction = (ClusterPrediction)result 
			
			def target = new TargetNode()
			target.URI = URIGenerator.generateURI((App)null, TargetNode.class)

			target.targetDoubleValue = clusterPrediction.clusterID.doubleValue()
			target.targetScore = 1D;

			def edge = new Edge_hasTargetNode().addSource(doc).addDestination(target)
			edge.URI = URIGenerator.generateURI((App)null, Edge_hasTargetNode.class)

			return [target, edge]

		}

	}

	/*	
	TAXONOMY {
		
		//a simple inline taxonomy for taste values range 0-4
		value provides: 'taste-taxonomy'
		
		def SCALE_NS = 'urn:taste-scale/'
		
		CATEGORY {
			value name: 'Scale Root'
			value uri: SCALE_NS + 'root'
			CATEGORY {
				value name: '0'
				value uri: SCALE_NS + '0'
			}
			CATEGORY {
				value name: '1'
				value uri: SCALE_NS + '1'
			}
			CATEGORY {
				value name: '2'
				value uri: SCALE_NS + '2'
			}
			CATEGORY {
				value name: '3'
				value uri: SCALE_NS + '3'
			}
			CATEGORY {
				value name: '4'
				value uri: SCALE_NS + '4'
			}
		}	
	}
	*/
	
// end of MODEL
}
