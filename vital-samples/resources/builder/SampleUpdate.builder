
UPDATE {
	
	value segment: 'testing'
	
	update(uri: "thebeatles") { thebeatles ->
		thebeatles.name = "Something Else"
	}
	
	
	update(uri: "john") { john ->
		john.name = "George"
	}
		
	
		
}