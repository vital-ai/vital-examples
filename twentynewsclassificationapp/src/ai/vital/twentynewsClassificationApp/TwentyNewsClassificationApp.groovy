package ai.vital.twentynewsClassificationApp

import org.example.twentynews.*


class TwentyNewsClassificationApp {

	static main(args) {
	
		
		
		// Input properties
		
		String subject = "Let's play softball in the park!"
		
		String body = "Softball game tonight.  Bring your bats!"
		
		// Create instance of TwentyNewsDocument
		
		def mydoc = new TwentyNewsDocument()
		
		mydoc.URI = "http://example.org/twentynews/TwentyNewsDocument/123"
		mydoc.title = subject
		mydoc.body = body
		
		// Model Jar Path 
		
		
		// Initialize Predict Model
		
		
		// Do prediction
		// predict.predict(mydoc)
		
		
		// Display categories with scores in edges
		// mydoc.getCategories()
		
		
		
		
	}

}
