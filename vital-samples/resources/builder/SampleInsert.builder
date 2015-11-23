import vitalai.samples.domain.Edge_hasMember 
import vitalai.samples.domain.MusicGroup
import vitalai.samples.domain.Musician

INSERT {
	
	value segment: 'testing'
	
	insert(MusicGroup.class, provides: "thebeatles") { MusicGroup thebeatles ->
		thebeatles.name = "The Beatles"
		thebeatles.URI = "thebeatles"
	}
	
	
	insert(Musician.class, provides: "john") { Musician john ->
		john.name = "John"
		john.URI = "john"
	}
		
	insert(Edge_hasMember.class) { Edge_hasMember member ->
		member.sourceURI = ref("thebeatles").toString()
		member.destinationURI = ref("john").toString()
		member.URI = "edge1"
		
	}
	
	
	for(def x in 1..10) {
		
		insert(Musician.class, provides: "john$x") { Musician john ->
			john.name = "John$x"
			john.URI = ( "john" + x)
		}
		
		
	}
	
	
		
}