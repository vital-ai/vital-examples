import java.util.Arrays;

import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VITAL_Node;

import ai.vital.aspen.model.PageRankPrediction;
import ai.vital.predictmodel.Prediction


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

	value URI: 'urn:spark-page-rank-prediction'

	value name: 'spark-page-rank-prediction-wordnet'

	value type: 'spark-page-rank-prediction'

	value algorithm: 'pagerank'

	ALGORITHM {
		
		value outputPath: 'hdfs://somewhere'
		
	}
	
	value preferredLocation: 'hdfs://somewhere'

	  // there is an input block, which minimally contains the main object
	  // it may contain other objects which could be used in the
	  // feature functions

	FEATURES {

	}	
	
	AGGREGATES {

	}


	FUNCTIONS {

	}

	// returns the value to use for training
	// this could be specified in the ontology via annotations

	TRAIN {

		value type: 'numerical'
		
		value function: { VitalBlock block, Map features ->
			throw new RuntimeException("pagerank train value ignored!")
		}
		
	}


// returns the objects to assert for predictions
// this could include new objects and/or updated objects
// such as the doc object with a new property


// this could be specified in the ontology via annotations

	TARGET {

		value function: { VitalBlock block, Map features, Prediction result ->

			//block and features are null
			PageRankPrediction pageRankPrediction = result

			def results = []
			
			for( GraphObject g : block.toList() ) {
				
				if(g instanceof VITAL_Node) {
					
					Double rank = pageRankPrediction.uri2Rank.get(g.URI)
					
					((VITAL_Node)g).pageRank = rank
					
					results.add(g)
				}
				
			}
			
			return results

		}

	}

// end of MODEL
}
