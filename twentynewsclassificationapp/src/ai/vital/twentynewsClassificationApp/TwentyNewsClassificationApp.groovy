package ai.vital.twentynewsClassificationApp

import ai.vital.predict.PredictModel
import ai.vital.vitalsigns.VitalSigns;
import ai.vital.vitalsigns.model.VITAL_Edge

import org.example.twentynews.*


class TwentyNewsClassificationApp {

	static main(args) {
	
		if(args.length != 1) {
			System.err.println("Expected exactly 1 argument - model jar path")
			return
		}
		
		
		// Input properties
		
		String subject = "Let's play softball in the park!"
		
		String body = "Softball game tonight.  Bring your bats!"
		
		// Model Jar Path
		 
		String modelJarPath = args[0]
		
		println "Model jar path: ${modelJarPath}"
		
		
		
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
		
		for( int i = 0 ; i < categories.size(); i++ ) {
			
			Edge_hasNewsCategory edge = mydoc.getNewsCategoryEdges(categories[i])[0]
			
			float score = edge.score
			
			println "${categories[i].name} ${score}"
		}
		
		
		
		
	}

}
