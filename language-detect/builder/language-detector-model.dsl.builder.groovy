import ai.vital.predictmodel.Prediction
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.aspen.nlp.LanguageDetectorFactory;
import ai.vital.aspen.model.BuilderFunctionPrediction;
import ai.vital.aspen.model.CategoryPrediction;
import ai.vital.aspen.groovy.nlp.steps.LanguageDetectorStep;
import com.vitalai.domain.nlp.Document
import com.vitalai.domain.nlp.Annotation
import ai.vital.vitalsigns.model.VitalApp

MODEL {

	value URI: 'urn:language-detector'

	value name: 'language-detector'

	value type: 'builder-function'

	value algorithm: 'language-detector'

	ALGORITHM {
		
	}
	
	value preferredLocation: 'hdfs://somewhere'

	FEATURES {

		FEATURE {

			value URI: 'urn:feature-body'

			value name: 'body'

			value type: 'string'
			
		}

	}
	
	
	AGGREGATES {

	}

	FUNCTIONS {

		FUNCTION {

			value provides: 'body'

			value function: {  VitalBlock block, Map features ->
				
				def doc = (Document) block.getMainObject()
				return doc.body?.toString()
			}

		}

	}


	TRAIN {

		value type: 'binary' 
		
		value function: { VitalBlock block, Map features ->

			return true
			
		}
		
	}
	
	PREDICT {
		
		value function: { Map features, Map modelConfig ->
			
			//create some input document
			def doc = new Document().generateURI((VitalApp)null)
			doc.body = features.body
			
			LanguageDetectorStep languageDetector = LanguageDetectorFactory.getInstance()
			
			String lang = null
			
			for(GraphObject g : languageDetector.processDocument(doc)) {
				if(g instanceof Annotation) {
					lang = ((Annotation)g).annotationValue?.toString()
				}
			}
			
			BuilderFunctionPrediction prediction = new BuilderFunctionPrediction()
			prediction.value = lang
			return prediction
			
		}
	}


	TARGET {

		value function: { VitalBlock block, Map features, Prediction result ->

			def doc = block.getMainObject()
			
			BuilderFunctionPrediction bfp = result
			
			String lang = bfp.value
			
			doc.lang = lang
			
			List res = [doc]
			
			return res
			

		}

	}
	
	
// end of MODEL
}
