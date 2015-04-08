package ai.vital.samples

import ai.vital.vitalservice.model.App;

import vitalai.samples.domain.*

import ai.vital.vitalsigns.VitalSigns
import ai.vital.vitalsigns.model.*



class SampleManagedOntology {

	static App app
	
	static {
		app = new App(ID: 'app', organizationID: 'organization')
	}
	
	static main(args) {
	
		VitalSigns vs = VitalSigns.get()
		
		vs.setCurrentApp(app)
		
		String base_uri = "http://vital.ai/ontology/vital-samples"
		
		def myobjs = []
		
		println "Hello World!"
		
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
		
		try { 
		thebeatles.birthday = "January 1, 1970"^xsd.xdatetime("MMMM d, yyyy")
		} catch(Exception ex) { println ex } // no such property exception
		
		
		myobjs.addAll([john, paul, george, ringo, thebeatles])
		
		myobjs.add( new Edge_hasMember().generateURI().addSource(thebeatles).addDestination(john) )
		myobjs.add( new Edge_hasMember().generateURI().addSource(thebeatles).addDestination(paul) )
		myobjs.add( new Edge_hasMember().generateURI().addSource(thebeatles).addDestination(george) )
		myobjs.add( new Edge_hasMember().generateURI().addSource(thebeatles).addDestination(ringo) )
		
		
		MusicInstrument guitar = new MusicInstrument().generateURI("guitar")
		
		guitar.name = "Guitar"
		
		myobjs.add( guitar )
		
		// get individual
		def guitar_ind = vs.getIndividual(base_uri + "#" + "Guitar")
		
		println "Guitar Individual: " + guitar_ind
		
		vs.listDomainIndividuals(MusicInstrument.class, null).each { println "Individual: " + it }
		
		myobjs.add( new Edge_playsInstrument().generateURI().addSource(john).addDestination(guitar) )
		
		myobjs.add( new Edge_playsInstrument().generateURI().addSource(george).addDestination(guitar) )
		
		//myobjs.add( paul.addEdge_playsInstrument(guitar) )
		
		println "Is John's birthday before Paul's? : " + ( john.birthday < paul.birthday)
		
		vs.addToCache(myobjs)
		
		myobjs.each {
			
			println it.toRDF()
			
		}
		
		println "The Beatles members: "
		thebeatles.getMembers().each{ println it.name } 
		
		println "Who plays guitar: "
		guitar.getPlaysInstrumentsReverse().each{ println it.name }
		
		println "John plays what: " 
		john.getPlaysInstruments().each { println it.name }
	
	}

}
