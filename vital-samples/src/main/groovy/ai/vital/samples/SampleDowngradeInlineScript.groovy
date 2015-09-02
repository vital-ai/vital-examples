package ai.vital.samples

import ai.vital.vitalsigns.VitalSigns
import ai.vital.vitalsigns.block.BlockCompactStringSerializer;
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.BlockIterator;
import ai.vital.vitalsigns.block.BlockCompactStringSerializer.VitalBlock;
import ai.vital.vitalsigns.model.DomainModel
import ai.vital.vitalsigns.model.GraphObject

/**
 * Sample inline data downgrade example
 * The prerequisites for the operations are:
 * * vitalsigns config: domainsStrategy=dynamic, loadDeployedJars=false, autoLoad=false
 * * the older movielens domain ontology **./resources/movielens-migration/movielens-1.0.0.owl** must be copied into vitalsigns domain-ontology archive: ```$VITAL_HOME/domain-ontology/archive/```   
 * @author Derek
 *
 */
class SampleDowngradeInlineScript {

	static main(args) {

		VitalSigns vs = VitalSigns.get();
		
		File currentDomainJar = new File("./resources/movielens-migration/movielens-groovy-1.0.1.jar")
		
		vs.registerOntology(currentDomainJar.toURI().toURL());
		
		//loaded from archive
		vs.loadOtherDomainVersion("movielens-1.0.0.owl")
		
		
		//input file - new version
		File inputFile = new File("./resources/movielens-migration/ml-10K_all.v_1_0_1.vital")
		
		//output file - old version
		File outputFile = new File("./resources/movielens-migration/ml-10K_all.v_1_0_0.inlinedowngrade.vital")
		
		
		//set the old version as preferred in order to write correct headers into output block file
		boolean oldVersionFound = false
		for(DomainModel dm : vs.getDomainModels('http://vital.ai/ontology/movielens')) {
			if(dm.versionInfo.toString() == '1.0.0') {
				dm.preferred = true
			} else {
				dm.preferred = false
			}
		}
		
		vs.doScript {
			
			BlockCompactStringSerializer writer = new BlockCompactStringSerializer(outputFile)
			
			for( BlockIterator blockIterator = BlockCompactStringSerializer.getBlocksIterator(inputFile) ; blockIterator.hasNext() ; ) {
				
				VitalBlock block = blockIterator.next()
				
				writer.startBlock()
				
				for(GraphObject g : block.toList()) {
					
					GraphObject out = null
					
					if(NEW_User.isInstance(g)) {
						
						out = OLD_User.newInstance()
						out.URI = g.URI
						out.name = g.username
						
					} else if(NEW_Movie.isInstance(g)) {
					
						out = OLD_Movie.newInstance()
						out.URI = g.URI
						out.name = g.name	
					
					} else if(NEW_Edge_hasMovieRating.isInstance(g)) {
					
						out = OLD_Edge_hasMovieRating.newInstance()
						out.URI = g.URI
						out.timestamp = g.timestamp
						out.sourceURI = g.sourceURI
						out.destinationURI = g.destinationURI
						out.rating = g.ratingNew
						
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
