package ai.vital.pagerank.wordnet

import ai.vital.domain.SynsetNode;
import ai.vital.query.Utils;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.VitalSortProperty;
import ai.vital.vitalsigns.VitalSigns;
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.VITAL_Node;

class WordnetPageRankExample {

	def static String WPRE = 'wordnet-pagerank-example'
	
	def static main(args) {
		
		def cli = new CliBuilder(usage: "${WPRE} [options]")
		cli.with {
			s longOpt: 'segment', 'segment containing page-ranked data', args: 1, required: true
			prof longOpt: 'profile', 'vitalservice profile, default: default', args: 1, required: false
		}
			
		def options = cli.parse(args)
		if(!options) {
			return
		}
		
		String segment = options.s
		String profile = options.prof != null ? options.prof : null
		
		println "segment: $segment"
		
		if(profile) {
			println "Seting vital service profile: $profile"
			VitalServiceFactory.setServiceProfile(profile)
		}
		
		def vitalService = VitalServiceFactory.getVitalService()
		
		//query for most recent
		
		def query = new VitalBuilder().query {
			
			SELECT {
		
				value limit: 10
						
				value segments: [segment]
				
				value sortProperties: [new VitalSortProperty(VitalSigns.get().getProperty("pageRank"), null, true)]
				
				
				node_constraint { SynsetNode.expandSubclasses(true) }
				
				node_constraint { Utils.PropertyConstraint("pageRank").exists() }
				
			}
			
		}.toQuery()
		
		def results = vitalService.query(query)
		
		if(results.status.status != VitalStatus.Status.ok) {
			System.err.println("Query error: " + results.status.message)
			return
		}
		
		int c = 0
		
		println "Top 10 synset nodes:"
		
		for(GraphObject g : results) {
		
			c++
			
			println "$c. ${g.name}, rank: ${g.pageRank}"
				
		}
		
		
		
	}
	
}
