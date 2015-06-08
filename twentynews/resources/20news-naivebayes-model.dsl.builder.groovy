import java.util.Arrays;

import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
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

	value URI: 'spark-naive-bayes-prediction'

	value name: 'spark-naive-bayes-prediction'

	value type: 'spark-naive-bayes-prediction'

	value algorithm: 'bayes'

	ALGORITHM {
		
	}
	
	value preferredLocation: 'hdfs://somewhere'

	  // there is an input block, which minimally contains the main object
	  // it may contain other objects which could be used in the
	  // feature functions

	FEATURES {

		FEATURE {

			value URI: 'my-uri'

			value name: 'title'

			value type: 'text'
			
			allowMissing: true
			
		}

		FEATURE {

			value URI: 'my-uri'

			value name: 'body'

			value type: 'text'
			
			allowMissing: true
			
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

		FUNCTION {

			value provides: 'title'

			value function: { VitalBlock block, Map features ->
				def doc = (Document) block.getMainObject()
				def title = null
				try { title = doc.subject?.toString() } catch(Exception e) {}
				if(! title ) title = doc.title?.toString()
				return title
			}

		}

		FUNCTION {

			value provides: 'body'

			value function: {  VitalBlock block, Map features ->
				
				def doc = (Document) block.getMainObject()
				return doc.body?.toString()
			}

		}
		
		FUNCTION {
			
			value requires: 'body'
			value provides: 'body-length'
				
			value function: {  VitalBlock block, Map features ->
				return ((String)features.get('body')).length()
			}
			
		}

	}

	// returns the value to use for training
	// this could be specified in the ontology via annotations

	TRAIN {

		value function: { VitalBlock block, Map features ->

			Edge_hasCategory edge = block.toContainer(false).iterator(Edge_hasCategory.class).next()

			return edge.getDestinationURI()

		}
		
	}


// returns the objects to assert for predictions
// this could include new objects and/or updated objects
// such as the doc object with a new property


// this could be specified in the ontology via annotations

	TARGET {

		value function: { VitalBlock block, Map features, Prediction result ->

			def doc = block.getMainObject()

			def categoryPrediction = (CategoryPrediction)result
			
			def category = categoryPrediction.category
			
			//validatre category in taxonomy
			
			if( TAXONOMY['twentynews-taxonomy'].taxonomy.container.get(category) == null ) {
				
				throw new RuntimeException("20news category with URI $category not found")
				
			}
			
			def target = new TargetNode()
			target.URI = URIGenerator.generateURI((App)null, TargetNode.class)

			target.targetStringValue = category
			target.targetScore = 1D;

			def edge = new Edge_hasTargetNode().addSource(doc).addDestination(target)
			edge.URI = URIGenerator.generateURI((App)null, Edge_hasTargetNode.class)

			return [target, edge]

		}

	}
	
	TAXONOMY {
	
    value provides: 'twentynews-taxonomy'

    value root: 'http://vital.ai/ontology/twentynews#Taxonomy'

	}
	
// end of MODEL
}
