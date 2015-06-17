import ai.vital.vitalsigns.model.URIReference


INSTANTIATE {
	
	value app: "app"
	
	instance (URIReference.class, provides: 'doc1') { URIReference ref ->
		
		ref.uRIRef = 'http://vital.ai/vital.ai/twentynews/Message/alt.atheism__53340'
		
	}
	
}