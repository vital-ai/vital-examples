package ai.vital._20newsClassificationApp

import org.example._20news.*


class _20newsClassificationApp {

	static main(args) {
	
		
		
		// Input properties
		
		String subject = "Let's play software in the park!"
		
		String body = "Softball game tonight.  Bring your bats!"
		
		// Create instance of _20NewsDocument
		
		def mydoc = new _20NewsDocument()
		
		mydoc.URI = "http://example.org/20news/20NewsDocument/123"
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
