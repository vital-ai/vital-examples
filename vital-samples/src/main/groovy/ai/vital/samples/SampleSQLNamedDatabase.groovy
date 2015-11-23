package ai.vital.samples

import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.factory.VitalServiceFactory
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalExternalSqlQuery;
import ai.vital.vitalsigns.model.DatabaseConnection
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.vitalsigns.model.SqlDatabaseConnection
import ai.vital.vitalsigns.model.SqlResultRow;
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalServiceAdminKey
import ai.vital.vitalsigns.model.property.IProperty;
import java.util.Map.Entry

/**
 * Sample named SQL Database query example
 * Requirements:
 * - a mysql database instance with data loaded from https://github.com/datacharmer/test_db
 * - a 'default' profile configured as LuceneMemory endpoint
 * - updated sqlDBConnection object properties (below)
 * 
 * @author Derek
 *
 */
class SampleSQLNamedDatabase {

	static String databaseName = 'localmysql1'
	
	static main(args) {

		SqlDatabaseConnection sqlDBConnection = new SqlDatabaseConnection()
		sqlDBConnection.database = 'employees'
		sqlDBConnection.endpointType = 'MySQL'
		sqlDBConnection.endpointURL = 'jdbc:mysql://localhost:3306'
		sqlDBConnection.name = databaseName
		sqlDBConnection.password = 'password'
		sqlDBConnection.username = 'username'
		
			
		//use default inmemory profile
		VitalServiceAdminKey key = new VitalServiceAdminKey().generateURI((VitalApp) null)
		key.key = 'aaaa-aaaa-aaaa'
		
		def adminService = VitalServiceFactory.openAdminService(key)
		VitalApp app = VitalApp.withId('app')
		adminService.addApp(app)
		
		VitalStatus addStatus = adminService.addDatabaseConnection(app, sqlDBConnection)
		
		println "ADD DB connection status: ${addStatus}"
		
		for(GraphObject g : adminService.listDatabaseConnections(app)) {
			DatabaseConnection dbConn = g
			println "Connection: ${dbConn.name} - ${dbConn.endpointType} - ${dbConn.endpointURL}"
		}
	
		VitalExternalSqlQuery query = new VitalBuilder().query {
			
			SQL {
				
				value database: sqlDBConnection.name.toString()
				
				value sql: """\

 select * from employees limit 10

""" 
				
				
			}
			
		}.toQuery()
		
			
		ResultList rl = adminService.query(app, query)
		println "Query status: ${rl.status}"
		
		for(GraphObject g : rl) {
			
			SqlResultRow row = g

			println row			
			
		}
		
	}

}
