package ai.vital.twentynewsClassificationApp

import ai.vital.predict.PredictModel
import ai.vital.vitalsigns.VitalSigns;
import ai.vital.vitalsigns.model.VITAL_Edge

import org.example.twentynews.*


class TwentyNewsClassificationApp {

	static main(args) {
	
		
		// Input properties
		
		String subject = "Let's play softball in the park!"
		
		String body = "Softball game tonight.  Bring your bats!"
		
		// Model Jar Path
		 
		String modelJarPath = "..."
		
		
		// Initialize Predict Model
		PredictModel model = new PredictModel()
		
		model.loadJar(new File(modelJarPath))
		
		// Do prediction
		// predict.predict(mydoc)

		// Create instance of TwentyNewsDocument
		
		TwentyNewsDocument mydoc = new TwentyNewsDocument()
		
		mydoc.URI = "http://example.org/twentynews/TwentyNewsDocument/123"
		mydoc.title = subject
		mydoc.body = body

		
				
		model.predict(mydoc)
		
		
		// Display categories with scores in edges
		List<Category> categories = mydoc.getNewsCategories()
		
		// no other edges expected 1:1 lists lengths
		List<VITAL_Edge> edges = mydoc.getOutgoingEdges()
		
		for( int i = 0 ; i < categories.size(); i++ ) {
			
			float score = 0f
			
			for(VITAL_Edge edge : edges) {
				if(Edge_hasNewsCategory.class == edge.class && edge.sourceURI == mydoc.URI && edge.destinationURI == categories[i].URI) {
					score = edge.score
					break
				}
			}
			
			println "${categories[i].name} ${score}"
		}
		
		
		
		
	}

}
