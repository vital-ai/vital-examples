package ai.vital.samples

import ai.vital.vitalsigns.VitalSigns

import com.hp.hpl.jena.ontology.OntClass
import com.hp.hpl.jena.ontology.OntModel
import com.hp.hpl.jena.ontology.OntProperty
import com.hp.hpl.jena.rdf.model.NodeIterator
import com.hp.hpl.jena.rdf.model.RDFNode
import com.hp.hpl.jena.util.iterator.ExtendedIterator
import com.hp.hpl.jena.ontology.Individual



class SampleJenaModels {

	static main(args) {
	
		VitalSigns vs = VitalSigns.get()
		
		OntModel model = VitalSigns.get().getOntologyModel()
		
		ExtendedIterator<OntClass> classes = model.listClasses()
		
		for(OntClass c in classes) {
	
		if(c.getURI()?.startsWith("http://vital.ai/ontology/")) {	
			
				println c
			}
		}
		
		ExtendedIterator<Individual> individuals = model.listIndividuals()
		
		for(Individual ind in individuals) {
	
		if(ind.getURI()?.startsWith("http://vital.ai/ontology/")) {
			
				println ind
			}
		}
		
		
		
		
	}

}
