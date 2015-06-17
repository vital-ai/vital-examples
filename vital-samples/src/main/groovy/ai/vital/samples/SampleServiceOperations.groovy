package ai.vital.samples



import ai.vital.query.Capture
import ai.vital.query.Delete
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.service.lucene.model.LuceneVitalSegment
import ai.vital.vitalservice.ServiceDeleteOperation
import ai.vital.vitalservice.ServiceOperation
import ai.vital.vitalservice.ServiceOperations
import ai.vital.vitalservice.VitalService
import ai.vital.vitalservice.model.App
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalGraphQuery
import ai.vital.vitalservice.query.VitalSelectQuery
import ai.vital.vitalservice.segment.VitalSegment
import ai.vital.vitalsigns.VitalSigns
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.lucene.model.LuceneSegmentType

import ai.vital.vitalservice.admin.VitalServiceAdmin
import ai.vital.vitalservice.factory.VitalServiceFactory
import ai.vital.vitalsigns.model.*

import ai.vital.vitalsigns.uri.URIGenerator

import vitalai.samples.domain.*


class SampleServiceOperations {

	
	// Service Operations
	
	static App app
	static {
		app = new App(ID: 'app', organizationID: 'organization')
	}
	
	
	static main(args) {
	
		
		VitalSigns vs = VitalSigns.get()
		
		
		VitalServiceAdmin service = VitalServiceFactory.getVitalServiceAdmin()
		
	
		//service.addApp(app)
		
		vs.setCurrentApp(app)
		
		
		VitalSegment segment = new LuceneVitalSegment()
			segment.appId = app.ID
			segment.id = 'testing'
			segment.readOnly = false
			segment.storeObjects = true
			segment.type = LuceneSegmentType.memory
		
		
		service.addSegment(app, segment, true)
		
		
		service.listSegments(app).each {  println "Segment:" + it.id}
		
		
		// Insert
		
		def builder = new VitalBuilder()
		
		ServiceOperations insertQ1 = builder.query {
			
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
					
				insert(Edge_hasMember) { Edge_hasMember member ->
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
			
		}.toService()

		
	
		service.doOperations(app, insertQ1)
		
		
		
		
		ServiceOperations updateQ1 = builder.query {
			
			UPDATE {
				
				value segment: 'testing'
				
				update(uri: "thebeatles") { thebeatles ->
					thebeatles.name = "Something Else"
				}
				
				
				update(uri: "john") { john ->
					john.name = "George"
				}
					
				
					
			}
			
		}.toService()

		
	
		service.doOperations(app, updateQ1)
		
		
		VitalSelectQuery q1 = builder.query {
			
			SELECT {
				
			value segments: [VitalSegment.withId('testing')]
			
			node_constraint { VITAL_Node.expandSubclasses(true) }
			
			//edge_constraint { VITAL_Edge.expandSubclasses(true) }
			
			
			}
			
			
			
		}.toQuery()
		
		
		ResultList results1 = service.query(app, q1)
		
		results1.each { println it }
		
		
		
		
		
		ServiceOperations deleteQ1 = builder.query {
			
			DELETE {
				
				//value segment: 'testing'
				
				
				for(def x in 1..10) {
					
					delete(uri: ( "john" + x) )
					
				}
				
				delete(uri: "john")
				delete(uri: "thebeatles")
				
					
			}
			
		}.toService()

		
	
		service.doOperations(app, deleteQ1)
		
		println "did delete"
		
		VitalSelectQuery q2 = builder.query {
			
			SELECT {
				
			value segments: [VitalSegment.withId('testing')]
			
			node_constraint { VITAL_Node.expandSubclasses(true) }
			
			//edge_constraint { VITAL_Edge.expandSubclasses(true) }
			
			
			}
			
			
			
		}.toQuery()
		
		
		ResultList results2 = service.query(app, q2)
		
		results2.each { println it }
		
		
		
		
		
		// Graph Query Currently Unavailable on Lucene
		
		VitalGraphQuery q3 = builder.query {
			
			GRAPH {
				
			
			value segments: [VitalSegment.withId('testing')]
			
			value inlineObjects: true
			
			ARC {
				
				node_constraint { MusicGroup.class }
				
				
				ARC { }
				
				
			}
			
			}
		}.toQuery()
		
		
		//ResultList list = service.query(app, q3)
		
		//list.each { println it }
	
		
		
	}

}
