import java.util.Arrays;

import com.vitalai.domain.ibmwatson.PersonalityInsight
import com.vitalai.domain.ibmwatson.Edge_hasPersonalityInsight
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VITAL_Category;
import ai.vital.aspen.model.BuilderFunctionPrediction
import com.vitalai.domain.nlp.Document;
import ai.vital.predictmodel.Prediction
import ai.vital.vitalsigns.model.VitalApp
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

	value URI: 'urn:ibm-watson-personality-insights'

	value name: 'ibm-watson-personality-insights'

	value type: 'ibm-watson-personality-insights'

	value algorithm: 'ibm-watson'

	ALGORITHM {
		
		value apiUsername: '<api_username>'
		
		value apiPassword: '<api_password>'
		
	}
	
	value preferredLocation: 'hdfs://somewhere'

	  // there is an input block, which minimally contains the main object
	  // it may contain other objects which could be used in the
	  // feature functions

	FEATURES {

		FEATURE {

			value URI: 'urn:feature-text'

			value name: 'text'

			value type: 'text'
			
			value allowedMissing: false
			
		}
		
		FEATURE {
		
      value URI: 'urn:feature-language'
      
      value name: 'language'
      
      value type: 'string'
      
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

			value provides: 'text'

			value function: { VitalBlock block, Map features ->
				
				Document doc = block.getMainObject()
				
				return doc.body?.toString()
				
			}

		}
		
		FUNCTION {
		
      value provides: 'language'
      
      value function: { VitalBlock block, Map features ->
      
        Document doc = block.getMainObject()
        
        return doc.lang?.toString()
      
      }
		
		}
		

	}


	TRAIN {

		value type: 'binary' 
		
		value function: { VitalBlock block, Map features ->

			return true
			
		}
		
	}


// returns the objects to assert for predictions
// this could include new objects and/or updated objects
// such as the doc object with a new property


// this could be specified in the ontology via annotations

	TARGET {

		value function: { VitalBlock block, Map features, Prediction result ->

			def doc = block.getMainObject()

			def personalityPredictions = ((BuilderFunctionPrediction)result).value
			
			List res = []
			
			for(PersonalityInsight personalityInsight : personalityPredictions) {
				
				def edge = new Edge_hasPersonalityInsight().addSource(doc).addDestination(personalityInsight)
				edge.generateURI((VitalApp)null)
				
				res.addAll([personalityInsight, edge])
				
			}
			
			return res
			

		}

	}
	

// end of MODEL

}
