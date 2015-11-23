package ai.vital.samples

import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalservice.query.VitalExternalSparqlQuery;
import ai.vital.vitalsigns.model.DatabaseConnection;
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.vitalsigns.model.RDFStatement
import ai.vital.vitalsigns.model.SparqlAskResponse;
import ai.vital.vitalsigns.model.SparqlBinding;
import ai.vital.vitalsigns.model.SparqlDatabaseConnection;
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalServiceAdminKey


/**
 * Sample named SPARQL Database query example
 * Requirements:
 * - an allegrograph database instance with wordnet data loaded: 
 *   https://github.com/vital-ai/vital-datasets/raw/master/Wordnet/wordnet.0.2.300.nt.gz
 * - a 'default' profile configured as LuceneMemory endpoint
 * - updated sparqlDBConnection object properties (below)
 *
 * @author Derek
 *
 */
class SampleSPARQLNamedDatabase {
	
	static String databaseName = 'agraph1'

	static main(args) {
	
		SparqlDatabaseConnection sparqlDBConnection = new SparqlDatabaseConnection()
		sparqlDBConnection.catalogName = '' //usually empty, but fill it in if custom agraph catalog
		sparqlDBConnection.endpointType = 'Allegrograph'
		sparqlDBConnection.endpointURL = 'http://example.org:10035'
		sparqlDBConnection.name = databaseName
		sparqlDBConnection.password = 'password'
		sparqlDBConnection.repositoryName = 'repositoryName'
		sparqlDBConnection.username = 'username'
		
		
		//use default inmemory profile
		VitalServiceAdminKey key = new VitalServiceAdminKey().generateURI((VitalApp) null)
		key.key = 'aaaa-aaaa-aaaa'
		
		def adminService = VitalServiceFactory.openAdminService(key)
		VitalApp app = VitalApp.withId('app') 
		adminService.addApp(app)
		
		
		VitalStatus addStatus = adminService.addDatabaseConnection(app, sparqlDBConnection)
		
		println "ADD DB connection status: ${addStatus}"
		
		for(GraphObject g : adminService.listDatabaseConnections(app)) {
			DatabaseConnection dbConn = g
			println "Connection: ${dbConn.name} - ${dbConn.endpointType} - ${dbConn.endpointURL}"
		}
	
		
		//sample SELECT QUERY
		
        VitalExternalSparqlQuery selectQuery = new VitalBuilder().query {
            
            SPARQL {
                
                value database: databaseName
                
                value sparql: """\

SELECT ?s ?p ?o WHERE {
  ?s ?p ?o .
  ?s a <http://vital.ai/ontology/vital-wordnet#NounSynsetNode> .
  ?s <http://vital.ai/ontology/vital-core#hasName> "thing" .
}

""" 
				
                
            }
            
        }.toQuery()
		
			
		ResultList selectRL = adminService.query(app, selectQuery)
		println "SELECT Query status: ${selectRL.status}"
		
		for(GraphObject g : selectRL) {
			
			SparqlBinding binding = g
			
			println "${binding.s} ${binding.p} ${binding.o}"
			
		}
		
		
		//SAMPLE CONSTRUCT QUERY
		VitalExternalSparqlQuery constructQuery = new VitalBuilder().query {
			
			SPARQL {
				
				value database: databaseName
				
				value sparql: """\

CONSTRUCT { ?s ?p ?o } WHERE {
  ?s ?p ?o .
  ?s a <http://vital.ai/ontology/vital-wordnet#NounSynsetNode> .
  ?s <http://vital.ai/ontology/vital-core#hasName> "thing" .
}

""" 
				
				
			}
			
		}.toQuery()
		
			
		ResultList constructRL = adminService.query(app, constructQuery)
		println "CONSTRUCT Query status: ${constructRL.status}"
		
		for(GraphObject g : constructRL) {
			
			RDFStatement binding = g
			
			println "${binding.rdfSubject} ${binding.rdfPredicate} ${binding.rdfObject}"
			
		}

		
		//SAMPLE ASK QUERY
		VitalExternalSparqlQuery askQuery = new VitalBuilder().query {
			
			SPARQL {
				
				value database: databaseName
				
				value sparql: """\

ASK  { ?s <http://vital.ai/ontology/vital-core#hasName> "thing" . }

"""
				
			}
			
		}.toQuery()
		
		ResultList askRL = adminService.query(app, askQuery)
		println "ASK Query status: ${askRL.status}"
		
		for(GraphObject g : askRL) {
			
			SparqlAskResponse askRes = g
			
			println "ASK response: ${askRes.positiveResponse}"
			
		}
		
			
			
	}

}
