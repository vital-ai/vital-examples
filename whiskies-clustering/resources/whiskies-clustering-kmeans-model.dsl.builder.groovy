import java.util.Arrays;

import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
import org.example.whiskies.domain.Whisky
import ai.vital.aspen.groovy.modelmanager.AspenPrediction;
import ai.vital.aspen.model.ClusterPrediction;
import com.vitalai.domain.nlp.TargetNode;
import ai.vital.predictmodel.Prediction
import ai.vital.vitalsigns.model.VitalApp
import com.vitalai.domain.nlp.Edge_hasTargetNode
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
			
			
			value restrictionLevel: 'warning'
			
			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
		}

		//2
		FEATURE {

			value URI: 'urn:sweetness'

			value name: 'sweetness'
			
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'
			
			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}
		
		//3
		FEATURE {
			
			value URI: 'urn:smoky'
			
			value name: 'smoky'
			
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'
			
			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}

		}
		
		//4
		FEATURE {
			
			value URI: 'urn:medicinal'
			
			value name: 'medicinal'
			
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'
						
			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}
		
		//5
		FEATURE {
			
			value URI: 'urn:tobacco'
				
			value name: 'tobacco'
					
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'

			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}
		
		//6
		FEATURE {
			
			value URI: 'urn:honey'
				
			value name: 'honey'
					
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'

			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}

		//7
		FEATURE {
			
			value URI: 'urn:spicy'
				
			value name: 'spicy'
					
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'

			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}
		
		//8
		FEATURE {
			
			value URI: 'urn:winey'
				
			value name: 'winey'
					
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'

			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}
		
		//9
		FEATURE {
			
			value URI: 'urn:nutty'
				
			value name: 'nutty'
					
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'

			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}
		
		
		//10
		FEATURE {
			
			value URI: 'urn:malty'
				
			value name: 'malty'
					
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'

			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}
		
		//11
		FEATURE {
			
			value URI: 'urn:fruity'
				
			value name: 'fruity'
					
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'

			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
		}
		
		//12
		FEATURE {
			
			value URI: 'urn:floral'
				
			value name: 'floral'
					
			value type: 'numerical'
			
			
			value restrictionLevel: 'warning'

			RESTRICTIONS {
				RESTRICTION { value minValueInclusive: 0 }
				RESTRICTION { value maxValueInclusive: 4 }
			}
			
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
			target.URI = URIGenerator.generateURI((VitalApp)null, TargetNode.class)

			target.targetDoubleValue = clusterPrediction.clusterID.doubleValue()
			target.targetScore = clusterPrediction.squaredDistance

			def edge = new Edge_hasTargetNode().addSource(doc).addDestination(target)
			edge.URI = URIGenerator.generateURI((VitalApp)null, Edge_hasTargetNode.class)

			return [target, edge]

		}

	}

// end of MODEL
}
