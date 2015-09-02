package ai.vital.samples

import ai.vital.vitalsigns.VitalSigns
import ai.vital.vitalsigns.block.BlockCompactStringSerializer;
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.BlockIterator;
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock;
import ai.vital.vitalsigns.model.GraphObject

/**
 * Sample inline data upgrade example
 * The prerequisites for the operations are:
 * * vitalsigns config: domainsStrategy=dynamic, loadDeployedJars=false, autoLoad=false
 * * the older movielens domain ontology **./resources/movielens-migration/movielens-1.0.0.owl** must be copied into vitalsigns domain-ontology archive: ```$VITAL_HOME/domain-ontology/archive/```   
 * @author Derek
 *
 */
class SampleUpgradeInlineScript {

	static main(args) {

		VitalSigns vs = VitalSigns.get();
		
		File currentDomainJar = new File("./resources/movielens-migration/movielens-groovy-1.0.1.jar")
		
		vs.registerOntology(currentDomainJar.toURI().toURL());
		
		//loaded from archive
		vs.loadOtherDomainVersion("movielens-1.0.0.owl")
		
		
		//input file - old version
		File inputFile = new File("./resources/movielens-migration/ml-10K_all.v_1_0_0.vital")
		
		//output file - new version
		File outputFile = new File("./resources/movielens-migration/ml-10K_all.v_1_0_1.inlineupgrade.vital")
		
		
		vs.doScript {
			
			BlockCompactStringSerializer writer = new BlockCompactStringSerializer(outputFile)
			
			for( BlockIterator blockIterator = BlockCompactStringSerializer.getBlocksIterator(inputFile) ; blockIterator.hasNext() ; ) {
				
				VitalBlock block = blockIterator.next()
				
				writer.startBlock()
				
				for(GraphObject g : block.toList()) {
					
					GraphObject out = null
					
					if(OLD_User.isInstance(g)) {
						
						out = NEW_User.newInstance()
						out.URI = g.URI
						out.username = g.name
						
					} else if(OLD_Movie.isInstance(g)) {
					
						out = NEW_Movie.newInstance()
						out.URI = g.URI
						out.name = g.name	
					
					} else if(OLD_Edge_hasMovieRating.isInstance(g)) {
					
						out = NEW_Edge_hasMovieRating.newInstance()
						out.URI = g.URI
						out.timestamp = g.timestamp
						out.sourceURI = g.sourceURI
						out.destinationURI = g.destinationURI
						out.ratingNew = g.rating
						
					} else {
						throw new RuntimeException("Unexpected graph object instance ${g.class.canonicalName}")
					}
				
					writer.writeGraphObject(out)
						
				}
				
				writer.endBlock()
				
			}
			
			writer.close()
			
		}
		
		
			
	}

}
