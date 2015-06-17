import java.util.Arrays;

import org.example.autompg.domain.AutoMpg;

import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VITAL_Category;
import ai.vital.aspen.groovy.featureextraction.CategoricalFeatureData;
import ai.vital.aspen.groovy.modelmanager.AspenPrediction;
import ai.vital.domain.Document;
import ai.vital.domain.Edge_hasCategory;
import ai.vital.domain.TargetNode;
import ai.vital.predictmodel.Prediction
import ai.vital.vitalservice.model.App
import ai.vital.domain.Edge_hasTargetNode
import ai.vital.vitalsigns.uri.URIGenerator
import ai.vital.aspen.model.CategoryPrediction;
import ai.vital.aspen.model.RegressionPrediction;

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

	value URI: 'urn:spark-randomforest-regression-autompg'

	value name: 'spark-randomforest-regression-autompg'

	value type: 'spark-randomforest-regression'

	value algorithm: 'randomforest-regression'

	ALGORITHM {

    value numTrees: 20 // Use more in practice.
    value featureSubsetStrategy: 'auto' // Let the algorithm choose.
    value impurity: 'variance'
    value maxDepth: 10
    value maxBins: 32

	}
	
	  // there is an input block, which minimally contains the main object
	  // it may contain other objects which could be used in the
	  // feature functions

	FEATURES {

		//2
		FEATURE {

			value URI: 'urn:cylinders'

			value name: 'cylinders'

			value type: 'numerical'
			
		}

		//3
		FEATURE {

			value URI: 'urn:displacement'
			
			value name: 'displacement'

			value type: 'numerical'
			
		
		}
		
		//4
		FEATURE {
			
			value URI: 'urn:horsepower'
				
			value name: 'horsepower'
						
			value type: 'numerical'
						
						
		}
		
		//5
		FEATURE {
			
			value URI: 'urn:weight'
				
			value name: 'weight'
					
			value type: 'numerical'
						
		}
		
		//6
		FEATURE {
			
			value URI: 'urn:acceleration'
				
			value name: 'acceleration'
					
			value type: 'numerical'
						
		}
		
		//7
		FEATURE {
			
			value URI: 'urn:modelYear'
				
			value name: 'modelYear'
					
			value type: 'numerical'
			
		}
		
		//8
		FEATURE {
			
			value URI: 'urn:origin'
				
			value name: 'origin'
				
			value type: 'categorical'
			
			value taxonomy: 'origin-taxonomy'
						
		}
		
	}
	
	
	AGGREGATES {

	}


	// once we add local queries on containers, the feature functions
	// could use those to extract objects from the block
	
	
	// the annotations in the ontology can provide mappings
	// from property to feature name
	
	// these functions below would override those (if present)

	FUNCTIONS {

		//1
		FUNCTION {

			value provides: 'cylinders'

			value function: { VitalBlock block, Map features ->
				def auto = (AutoMpg) block.getMainObject()
				return auto.cylinders.intValue()
			}

		}

		//2
		FUNCTION {

			value provides: 'displacement'

			value function: { VitalBlock block, Map features ->
				def auto = (AutoMpg) block.getMainObject()
				return auto.displacement.doubleValue()
			}

		}
		
		//3
		FUNCTION {
			
			value provides: 'horsepower'
				
				value function: { VitalBlock block, Map features ->
				def auto = (AutoMpg) block.getMainObject()
				return auto.horsepower.doubleValue()
			}
			
		}
		
		
		//4
		FUNCTION {
			
			value provides: 'weight'
				
				value function: { VitalBlock block, Map features ->
				def auto = (AutoMpg) block.getMainObject()
				return auto.weight.doubleValue()
			}
			
		}
		
		//5
		FUNCTION {
			
			value provides: 'acceleration'
				
				value function: { VitalBlock block, Map features ->
				def auto = (AutoMpg) block.getMainObject()
				return auto.acceleration.doubleValue()
			}
			
		}
		
		//6
		FUNCTION {
			
			value provides: 'modelYear'
			
			value function: { VitalBlock block, Map features ->
				def auto = (AutoMpg) block.getMainObject()
				return auto.modelYear.intValue()
			}
			
		}
		
		//7
		FUNCTION {
			
			value provides: 'origin'
				
				value function: { VitalBlock block, Map features ->
				def auto = (AutoMpg) block.getMainObject()
				def originCategory = new VITAL_Category()
				originCategory.setURI('urn:origin-taxonomy' + auto.origin.intValue())
				originCategory.name = 'Origin ' + auto.origin.intValue() 
				return originCategory
			}
			
		}
		
	}

	// returns the value to use for training
	// this could be specified in the ontology via annotations

	TRAIN {

		value type: 'numerical'
		
		value function: { VitalBlock block, Map features ->
			def auto = (AutoMpg) block.getMainObject()
			return auto.mpg.doubleValue()
		}
		
	}


// returns the objects to assert for predictions
// this could include new objects and/or updated objects
// such as the doc object with a new property


// this could be specified in the ontology via annotations

	TARGET {

		value function: { VitalBlock block, Map features, Prediction result ->

			def doc = block.getMainObject()

			def regressionPrediction = (RegressionPrediction)result
			
			def target = new TargetNode()
			target.URI = URIGenerator.generateURI((App)null, TargetNode.class)

			target.targetDoubleValue = regressionPrediction.value
			target.targetScore = 1D;

			def edge = new Edge_hasTargetNode().addSource(doc).addDestination(target)
			edge.URI = URIGenerator.generateURI((App)null, Edge_hasTargetNode.class)

			return [target, edge]

		}

	}
	
	TAXONOMY {
		
		value provides: 'origin-taxonomy'
		
		value introspect: true
		
	}
// end of MODEL
}
