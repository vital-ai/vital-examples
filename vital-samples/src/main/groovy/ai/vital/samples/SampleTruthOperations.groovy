package ai.vital.samples

import ai.vital.vitalsigns.datatype.Truth

// this shouldn't be necessary, but makes eclipse happy:
import static ai.vital.vitalsigns.datatype.Truth.*
  
import ai.vital.vitalsigns.VitalSigns
import ai.vital.vitalsigns.groovy.VitalSignsAnnotation

import ai.vital.vitalsigns.model.property.*
  
import ai.vital.vitalsigns.model.*
  
import ai.vital.vitalsigns.datatype.Truth

import ai.vital.vitalsigns.model.xsd


class SampleTruthOperations {

	static main(args) {
	
			println "Running..."
			
			VitalSigns vs = VitalSigns.get()
		  
			vs.addExternalNamespace("myapp", "http://example.org/myapp/myapp")
		  
		  
		Truth t = YES
		
		Truth u = UNKNOWN
		  
		Truth f = NO
		
		Truth m = MU
		
		println "Answer: " + (u && t )
		
		println "Answer: " + (f && u )
		
		println "Answer: " + (f || u )
		  
		println "Answer: " + (f || t )
		  
		println "Answer: " + (t || u )
		   
		println "Answer: " + (f && t )
		 
		println "Answer: " + (t && u )
		 
		println "Answer: " + (t && m)
		
		  print "Switch: "
		  
		  switch(f || t  ) {
			case YES:
			  println "YES";  break;
			case NO:
			  println "NO";  break;
			case UNKNOWN:
			  println "UNKNOWN";  break;
			case MU:
			  println "MU";  break;
		  }
		  
		 
		  
		  VITAL_Node john = new VITAL_Node()
			john.URI = "http://vital.ai/ontology/person/john"
			
			
		  
		  john.name = "John"
			
		  VITAL_Node marc = new VITAL_Node()
		  
		  marc.name = "Marc"
		  
			marc.name = assign john.@something,
							   { println "it is unknown!"; println john.toJSON(); null },
							   { println "it is mu!"; println john.toRDF(); null}
			
			
			
			marc.name = assign MU,
							   { println "it is unknown!"; println john.toJSON(); null },
							   { println "it is mu!"; println john.toRDF(); null}
			
			
			
			
			
			println marc.toJSON()
			
		
			marc.name = "Marc"
		
		
		
		 
			if(john.@name >= marc.@name) {
			   
			  println "greater than/equal!"
			  
			}
			else {
			  println "not greater than/equal!"
			}
		   
			
			
			consider (john.@name >= marc.@name)  {
			  
			  YES: { println "it is YES"}
			  
			  NO: {
				
				println "it is NO"
			  
				consider (john.@name <= marc.@name) {
				  
				  YES: { println "embedded is YES"}
				  NO: { println "embedded is NO"}
				  UNKNOWN: { println "embedded is UNKNOWN" }
				  MU: { println "embedded is MU" }
				}
			  
			  
			  
			  }
			  
			  UNKNOWN: { println "it is UNKNOWN" }
			  
			  MU: { println "it is MU" }
			  
			}
			
			
		  //marc."myapp:age" = "40"^xsd.xint
		  
		  
		  marc."myapp:nickname" = "Marc"
			
		  println "Nickname: " + marc.@"myapp:nickname"
		   
		  println "Nickname2: " + marc.@"myapp:nickname2"
			
			
			
		 // VitalAuthKey key = new VitalAuthKey()
		  
		  
		  //key.key = "Fred"
		  
		  
		  //john."myapp:weight" = "40"^xsd.xint
		  
		  
		  print "John cmp Marc: "
		  
		  switch(john.name >= marc.name) {
			
			case true:
			  println "True"; break;
			case false:
			  println "False"; break;
			case YES:
			  println "YES";  break;
			case NO:
			  println "NO";  break;
			case UNKNOWN:
			  println "UNKNOWN";  break;
			case MU:
			  println "MU";  break;
		  }
		  
		  
		  marc.name = null
		  
		  println "Marc: " + marc.toJSON()
		  
		  
		  def mn = marc.@name
		  
		  println "class: " + mn.class
		  
		  println "marc.name: " + marc.@name
		  
		  //int i = count(marc.@name)
		  //println "count: " + i
		  
		  john.name = marc.name
		  
		  
		  try {
			  
			  john.name = marc.@name
			  
		  }catch(Exception ex) { ex.printStackTrace() }
		  
		  
		  john.name = assign marc.@name,
		  { println "it is unknown!"; println john.toJSON(); null },
		  { println "it is mu!"; println john.toRDF(); null}

		  
		  
		  
		  println john.name
		  
		  
		  println "marc.what: " + marc.@what
		  
		  //println "marc.what: " + marc.what
		  
		  marc.name = "Marc"
		 
		  
		  
		  println "Timestamp: " + marc.@timestamp
		  
		  //println "Something: " + marc.something
		
		
		
		
	}

}
