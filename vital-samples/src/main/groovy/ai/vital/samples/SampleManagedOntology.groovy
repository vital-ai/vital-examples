package ai.vital.samples

import ai.vital.vitalsigns.model.property.URIProperty
import ai.vital.vitalservice.model.App;

import vitalai.samples.domain.*

import ai.vital.vitalsigns.VitalSigns
import ai.vital.vitalsigns.model.*

import vitalai.samples.domain.ontology.Ontology

class SampleManagedOntology {

	
	// This is the name of the App
	// This is used to help generate URIs
	static App app
	static {
		app = new App(ID: 'app')
	}
	
	static main(args) {
	
		VitalSigns vs = VitalSigns.get()
		
		// This helps VitalSigns generate URIs
		vs.setCurrentApp(app)
		
		
		// This is the ontology class defined in our domain:
		// vitalai.samples		
		String base_uri = Ontology.ONTOLOGY_IRI
		
		// A list to hold our classes, we'll add this into the in-memory cache
		def myobjs = []
		
		println "Hello World!"
		
		// Generate a URI with "john" as the unique part.  We know this is unique for this app, 
		// but in generate we would allow VitalSigns to generate a randomized URI, that we can be sure is
		// globally unique
		 
		Musician john = new Musician().generateURI("john")
		
		john.name = "John Lennon"
		
		john.birthday = "October 9, 1940"^xsd.xdatetime("MMMM d, yyyy")
						
		Musician paul = new Musician().generateURI("paul")
		
		paul.name = "Paul McCartney"
		
		paul.birthday = "June 18, 1942"^xsd.xdatetime("MMMM d, yyyy")
				
		Musician george = new Musician().generateURI("george")
		
		george.name = "George Harrison"
		
		george.birthday = "February 25, 1943"^xsd.xdatetime("MMMM d, yyyy")
				
		Musician ringo = new Musician().generateURI("ringo")
		
		ringo.name = "Ringo Starr"
		
		ringo.birthday = "July 7, 1940"^xsd.xdatetime("MMMM d, yyyy")
				
		MusicGroup thebeatles = new MusicGroup().generateURI("thebeatles")
		
		thebeatles.name = "The Beatles"
		
		// try to assign the wrong property, throws an exception
		try { 
		thebeatles.birthday = "January 1, 1970"^xsd.xdatetime("MMMM d, yyyy")
		} catch(Exception ex) { println ex } // no such property exception
		
		
		myobjs.addAll([john, paul, george, ringo, thebeatles])
		
		// Link the The Beatles to its members
		myobjs.add( thebeatles.addEdge_hasMember(john) )
		myobjs.add( thebeatles.addEdge_hasMember(paul) )
		myobjs.add( thebeatles.addEdge_hasMember(george) )
		myobjs.add( thebeatles.addEdge_hasMember(ringo) )
		
		// or
		// myobjs.add( thebeatles.addEdge(Edge_hasMember, ringo ))
		
		// We could create a new instance for an instrument
		// MusicInstrument guitar = new MusicInstrument().generateURI("guitar")
		// guitar.name = "Guitar"
		// myobjs.add( guitar )
		
		// but let's get an individual defined in our domain ontology
		// we happen to know its URI...
		def g_uri = URIProperty.withString(base_uri + "#" + "Guitar")
		
		def guitar  = vs.getIndividual(g_uri.toString())
		
		myobjs.add(guitar)
		
		
		// We could have listed all the music instruments in our domain ontology...
		//vs.listDomainIndividuals(MusicInstrument.class, null).each { println "Individual: " + it }
		
		// Let's add some "plays" links...
		
		myobjs.add( john.addEdge_playsInstrument(guitar) )
		myobjs.add( george.addEdge_playsInstrument(guitar) )
		
		// here's how comparisons can be made...
		println "Is John's birthday before Paul's? : " + ( john.birthday < paul.birthday)
		
		
		// Let's use different serialization methods to print out our objects
		myobjs.each {
			
			println it.toRDF()
			println it.toJSON()
			println it.toCompactString()
			
		}
		
		// Let's put all those objects into the cache
		// This will allow our helper methods to resolve edges
		vs.addToCache(myobjs)
		
		// Follow the hasMember edges...
		println "The Beatles members: "
		thebeatles.getMembers().each{ println it.name } 
		
		// Follow the plays edges in reverse: Instrument <-- Musician
		println "Who plays guitar: "
		guitar.getPlaysInstrumentsReverse().each{ println it.name }
		
		// Follow the plays edges in forward directions: Musician --> Instrument
		
		println "John plays what: " 
		john.getPlaysInstruments().each { println it.name }
	
	}

}
