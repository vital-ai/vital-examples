import java.util.Arrays;

import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VITAL_Category;
import ai.vital.aspen.groovy.featureextraction.CategoricalFeatureData;
import ai.vital.aspen.groovy.modelmanager.AspenPrediction;
import ai.vital.aspen.model.CategoriesListPrediction
import com.vitalai.domain.nlp.Document;
import com.vitalai.domain.nlp.Edge_hasCategory;
import com.vitalai.domain.nlp.Image;
import com.vitalai.domain.nlp.TargetNode;
import ai.vital.predictmodel.Prediction
import ai.vital.vitalsigns.model.VitalApp
import com.vitalai.domain.nlp.Edge_hasTargetNode
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

	value URI: 'urn:metamind-image-categorization'

	value name: 'metamind-image-categorization'

	value type: 'metamind-image-categorization'

	value algorithm: 'metamind'

	ALGORITHM {
		
		value classifierID: 'imagenet-1k-net'
		//value classifierID: 'food-net'
		
		value apiKey: 'API_KEY'
		
	}
	
	value preferredLocation: 'hdfs://somewhere'

	  // there is an input block, which minimally contains the main object
	  // it may contain other objects which could be used in the
	  // feature functions

	FEATURES {

		FEATURE {

			value URI: 'urn:feature-image'

			value name: 'image'

			value type: 'image'
			
			value allowedMissing: false
			
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

			value provides: 'image'

			value function: { VitalBlock block, Map features ->
				
				def img = block.toContainer(false).iterator(Image.class, false).next()
				
				return img
				
			}

		}

	}


	TRAIN {

		value type: 'categorical' 
		
		value taxonomy: 'metamind-taxonomy'
		
		value function: { VitalBlock block, Map features ->

			Edge_hasCategory edge = block.toContainer(false).iterator(Edge_hasCategory.class).next()
			
			return TAXONOMY['metamind-taxonomy'].container.get( edge.getDestinationURI() )

		}
		
	}


// returns the objects to assert for predictions
// this could include new objects and/or updated objects
// such as the doc object with a new property


// this could be specified in the ontology via annotations

	TARGET {

		value function: { VitalBlock block, Map features, Prediction result ->

			def imRef = block.getMainObject()

			def metamindPrediction = (CategoriesListPrediction)result
			
			List res = []
			
			for(CategoryPrediction categoryPrediction : metamindPrediction.predictions) {
				
				def categoryURI = 'http://vital.ai/vital.ai/app/VITAL_Category/metamind_' + categoryPrediction.categoryID
				
				VITAL_Category category = TAXONOMY['metamind-taxonomy'].container.get( categoryURI )
				
				if(category == null) throw new RuntimeException("Category not found ${categoryURI}")
				
				def target = new TargetNode()
				target.URI = URIGenerator.generateURI((VitalApp)null, TargetNode.class)
				
				target.targetStringValue = categoryURI
				target.targetScore = categoryPrediction.score;
				target.name = category?.name
						
				def edge = new Edge_hasTargetNode().addSource(imRef).addDestination(target)
				edge.URI = URIGenerator.generateURI((VitalApp)null, Edge_hasTargetNode.class)
				
				res.addAll([target, edge])
			}
			
			return res
			

		}

	}
	

  TAXONOMY {
    
    value provides: 'metamind-taxonomy'
    
    value taxonomyPath: 'imagenet-1k-net_taxonomy.txt'
	 
  }

	
// end of MODEL
}
