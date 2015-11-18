import java.util.Arrays;

import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.aspen.groovy.featureextraction.CategoricalFeatureData;
import ai.vital.aspen.groovy.modelmanager.AspenPrediction;
import com.vitalai.domain.nlp.Document;
import com.vitalai.domain.nlp.Edge_hasCategory;
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

	value URI: 'urn:spark-randomforest-prediction-20news'

	value name: 'spark-randomforest-prediction-20news'

	value type: 'spark-randomforest-prediction'

	value algorithm: 'randomforest'

	ALGORITHM {
		
	}
	
	value preferredLocation: 'hdfs://somewhere'

  
  
	  // there is an input block, which minimally contains the main object
	  // it may contain other objects which could be used in the
	  // feature functions

	FEATURES {

		FEATURE {

			value URI: 'urn:feature-title'

			value name: 'title'

			value type: 'text'
			
			value allowedMissing: true
			
			value minDF: 10
			
			value maxDFP: 30
			
		}

		FEATURE {

			value URI: 'urn:feature-body'

			value name: 'body'

			value type: 'text'
			
			value minDF: 10
			
			value maxDFP: 30
			
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
		
	}

	// returns the value to use for training
	// this could be specified in the ontology via annotations

    TRAIN_QUERIES {
        
        TRAIN_QUERY {
            
            value query : {
                
                GRAPH {
                
                    value segments: ['20news']
                            
                    ARC {
                         
                         ARC {
                         
                            edge_constraint { Edge_hasCategory.class }
                            
                         }
                         
                    }
                            
                
                }
            
            }
            
        }
        
    }

	TRAIN {

		value type: 'categorical' 
		
		value taxonomy: 'twentynews-taxonomy'
		
		value function: { VitalBlock block, Map features ->

			Edge_hasCategory edge = block.toContainer(false).iterator(Edge_hasCategory.class).next()
			
			return TAXONOMY['twentynews-taxonomy'].container.get( edge.getDestinationURI() )

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
			
			def categoryURI = categoryPrediction.categoryURI
			
			
			def target = new TargetNode()
			target.URI = URIGenerator.generateURI((VitalApp)null, TargetNode.class)

			target.targetStringValue = categoryURI
			target.targetScore = 1D;

			def edge = new Edge_hasTargetNode().addSource(doc).addDestination(target)
			edge.URI = URIGenerator.generateURI((VitalApp)null, Edge_hasTargetNode.class)

			return [target, edge]

		}

	}
	
	TAXONOMY {
	
    value provides: 'twentynews-taxonomy'

    value root: 'http://vital.ai/ontology/twentynews#Taxonomy'

	}
	
// end of MODEL
}
