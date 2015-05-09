package ai.vital.samples

import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalService
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.factory.VitalServiceFactory
import ai.vital.vitalservice.model.App
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalGraphQuery
import ai.vital.vitalservice.query.VitalSelectQuery
import ai.vital.vitalsigns.VitalSigns
import ai.vital.query.graph.*

import ai.vital.vitalsigns.model.*
import ai.vital.vitalsigns.model.properties.*
import static ai.vital.query.Utils.*

import ai.vital.domain.*
import ai.vital.domain.properties.*

import ai.vital.vitalservice.segment.VitalSegment


class SampleVitalService {
	
	static main(args) {
	
		VitalSigns vs = VitalSigns.get()
		
		VitalService service = VitalServiceFactory.getVitalService()
		
		println "Ping: " + service.ping()
		
		VitalStatus s = service.ping()
		
		println "PingTime: " + s.pingTimeMillis
		
		println "Endpoint: " + service.getEndpointType()
		
		println "Organization: " + service.getOrganization()
		
		println "App: " + service.getApp().ID
		
		service.listSegments().each{ println "Segment: " + it.ID }
		
		println "Default Segment Name: " + service.getDefaultSegmentName()
		
		println "Validate: " + service.validate()
		
		def builder = new VitalBuilder()
		
		// Select Adjectives with "happy" in the name (case indifferent)
		
		VitalSelectQuery q = builder.query {
			
			SELECT {
				
				value segments: [VitalSegment.withId('wordnet')]
				
				value limit: 100
				
				node_constraint { AdjectiveSynsetNode.class }
				
				node_constraint { AdjectiveSynsetNode.props().name.contains_i("happy") }
			
			}
			
		}.toQuery()
		
		println "Sparql:\n" + q.toSparql()
		
		ResultList list = service.query( q )
		
		println "Results:\n" + list.results.size()
		
		
		// print out: URI : name
		
		def i = 1
		
		list.each { println i++ + ": " + it.URI + " : " + it.name }
		
		
		// Find the graph of all words with "happy" in its name and what it's connected to (one edge hop)
		
		VitalGraphQuery q2 = builder.query {
			
			GRAPH {
				
				value segments: [VitalSegment.withId('wordnet')]
				
				value inlineObjects: true
				
				ARC {
					
					// bind this node to name "node1"
					node_bind { "node1" }
					
					// include subclasses of SynsetNode: Noun, Verb, Adjective, Adverb
					node_constraint { SynsetNode.expandSubclasses(true) }
							
					node_constraint { SynsetNode.props().name.contains_i("happy") }
		
					// alternate way to specify constraint
					//node_constraint { PropertyConstraint(Property_hasName.class).contains_i("happy") }
								
					ARC {
						// bind the node and edge to names "node2" and "edge"
						edge_bind { "edge" } 
						node_bind { "node2" } 
						}	
				}
			}
	
		}.toQuery()
			
		println "Sparql:\n" + q2.toSparql()
		
		ResultList list2 = service.query( q2 )
		
		println "Results:\n" + list2.results.size()
		
		def j = 1
		
		list2.each { 
			
			// Use the binding names to get the URI values out of GraphMatch
			def node1_uri = it."node1".toString()
			def edge_uri = it."edge".toString()
			def node2_uri = it."node2".toString()
			
			// inlineObjects is true, which embeds unseen objects into the results
			// if cache is null, get graph object out of GraphMatch results
			// graph objects referenced via the URI 
						
			def node1 = vs.getFromCache(node1_uri) ?: it."$node1_uri"
			def edge = vs.getFromCache(edge_uri) ?: it."$edge_uri"
			def node2 = vs.getFromCache(node2_uri) ?: it."$node2_uri"
			
			// add new ones into cache, doesn't hurt to refresh existing ones
			vs.addToCache([node1, edge, node2])
				
			// print out node1 --edge--> node2, with edge type (minus the namespace)
			println j++ + ": " + node1.name + "---" + (edge.vitaltype.toString() - "http://vital.ai/ontology/vital#") + "-->" + node2.name
		}
		
		service.close()
	
	}

}
