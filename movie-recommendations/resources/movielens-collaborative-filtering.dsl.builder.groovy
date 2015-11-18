import java.util.Arrays;

import org.movielens.domain.Edge_hasMovieRating;

import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.aspen.groovy.featureextraction.CategoricalFeatureData;
import ai.vital.aspen.groovy.modelmanager.AspenPrediction;
import ai.vital.aspen.model.CategoryPrediction;
import com.vitalai.domain.nlp.TargetNode;
import ai.vital.predictmodel.Prediction
import ai.vital.vitalsigns.model.VitalApp
import com.vitalai.domain.nlp.Edge_hasTargetNode
import ai.vital.vitalsigns.uri.URIGenerator
import ai.vital.aspen.model.RecommendationPrediction

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

	value URI: 'urn:spark-collaborative-filtering-prediction-movielens'

	value name: 'spark-collaborative-filtering-prediction-movielens'

	value type: 'spark-collaborative-filtering-prediction'

	value algorithm: 'als'

	value domainJars: [
		'<url_of_movielens-groovy-1.0.0.jar>'
	]
	
	
	ALGORITHM {
		
		value rank: 10
		value lambda: 0.01d
		value iterations: 20
  }
  
	  // there is an input block, which minimally contains the main object
	  // it may contain other objects which could be used in the
	  // feature functions

	FEATURES {

		FEATURE {

			value URI: 'urn:feature_user_uri'

			//special value
			value name: 'feature_user_uri'

			value type: 'word'
			
		}
		
		FEATURE {
			
			value URI: 'urn:feature_product_uri'
				
			//special value
			value name: 'feature_product_uri'
						
			value type: 'word'
			
			value allowedMissing: true
						
		}

		FEATURE {
			
			value URI: 'urn:feature_rating'
				
				//special value
			value name: 'feature_rating'
						
			value type: 'numerical'
						
			value allowedMissing: true
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

			value provides: 'feature_user_uri'

			value function: { VitalBlock block, Map features ->
				
				GraphObject g = block.mainObject
				
				if(g instanceof Edge_hasMovieRating) {
					
					def edge = (Edge_hasMovieRating) block.getMainObject()
					return edge.sourceURI
					
				} else {
				
					return g.URI
				
				}
				
			}

		}

		FUNCTION {

			value provides: 'feature_product_uri'

			value function: {  VitalBlock block, Map features ->
				GraphObject g = block.mainObject
				
				if(g instanceof Edge_hasMovieRating) {
					
					def edge = (Edge_hasMovieRating) block.getMainObject()
					return edge.destinationURI
				}
				
				return null
				
			}
			
		}
		
		FUNCTION {
			
			value provides: 'feature_rating'
				
			value function: {  VitalBlock block, Map features ->
				GraphObject g = block.mainObject
				
				if(g instanceof Edge_hasMovieRating) {
					
					def edge = (Edge_hasMovieRating) block.getMainObject()
					return edge.rating.rawValue()
				} 
				
				return null
				
			}
			
		}

	}

	// returns the value to use for training
	// this could be specified in the ontology via annotations

	TRAIN {

		value type: 'numerical'
		
		value function: { VitalBlock block, Map features ->
			def edge = (Edge_hasMovieRating) block.getMainObject()
			return edge.rating
		}
		
	}


// returns the objects to assert for predictions
// this could include new objects and/or updated objects
// such as the doc object with a new property


// this could be specified in the ontology via annotations

	TARGET {

		value function: { VitalBlock block, Map features, Prediction result ->

			def doc = block.getMainObject()

			def recommendationPrediction = (RecommendationPrediction)result 
			
			List res = []
			
			for(int i = 0 ; i < recommendationPrediction.productURIs.size(); i++) {
				String productURI = recommendationPrediction.productURIs.get(i)
				Double rating = recommendationPrediction.productRatings.get(i)
				
				if(rating.doubleValue() > 5d) {
					rating = 5d
				}
				
				def target = new TargetNode()
				target.URI = URIGenerator.generateURI((VitalApp)null, TargetNode.class)
				target.targetStringValue = productURI
				target.targetScore = rating;
				
				def edge = new Edge_hasTargetNode().addSource(doc).addDestination(target)
				edge.URI = URIGenerator.generateURI((VitalApp)null, Edge_hasTargetNode.class)
				
				res.add(target)
				res.add(edge)
				
			}
			

			return res

		}

	}
	
// end of MODEL
}
