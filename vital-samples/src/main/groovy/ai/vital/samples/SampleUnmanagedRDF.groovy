package ai.vital.samples

import ai.vital.vitalservice.model.App;
import ai.vital.vitalsigns.VitalSigns
import ai.vital.vitalsigns.model.VITAL_Node
import ai.vital.vitalsigns.model.*
import ai.vital.vitalsigns.rdf.RDFFormat


class SampleUnmanagedRDF {

	static App app
	
	static {
		app = new App(ID: 'app', organizationID: 'organization')
	}
	
	static main(args) {
	
		VitalSigns vs = VitalSigns.get()
		
		vs.setCurrentApp(app)
		
		vs.addExternalNamespace("myapp", "http://example.org/myapp/myapp.owl#")
		
		println "Hello World!"
		
		VITAL_Node node = new VITAL_Node().generateURI()
		
		node."myapp:name" = "John"^xsd.xstring
		node."myapp:birthday" = "January 1, 1970"^xsd.xdatetime("MMMM d, yyyy")
		
		node."myapp:age" = "1"^xsd.xint
		
		node."myapp:price" = "1.99"^"xsd:double"
		
		node."myapp:happy" = "true"^xsd.xboolean
		
		node."myapp:colors" = ["red"^xsd.xstring, "blue"^xsd.xstring, "white"^xsd.xstring]
		
		node."myapp:friends" = ["fred", "mary", "bob"]
		
		node."myapp:hashvalue" = "1010101"^"myapp:hash"
		
		println "URI: " + node.URI
		println "Name: " + node."myapp:name"
		println "Birthday: " + node."myapp:birthday".rawValue()
		println "Age: " + node."myapp:age"
		println "Price: " + node."myapp:price"
		println "Happy: " + node."myapp:happy"
		println "Colors: " + node."myapp:colors"
		println "Friends: " + node."myapp:friends"
		println "Hashvalue: " + node."myapp:hashvalue"
		
		
		
		
		println node.toRDF()
		println node.toRDF(RDFFormat.RDF_XML)
		
		println node.toJSON()
		println node.toCompactString()
		
		String myrdf = node.toRDF()
		
		
		def objs = vs.fromRDFGraph(myrdf)
		
		objs.each {
			
			println it.toCompactString()
			println it."myapp:birthday".rawValue()
			
			
		}
		
		
	}

}
