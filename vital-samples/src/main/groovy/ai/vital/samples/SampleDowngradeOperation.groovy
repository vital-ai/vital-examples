package ai.vital.samples

import org.apache.commons.io.FileUtils;

import ai.vital.prime.service.model.PrimeVitalSegment
import ai.vital.vitalservice.ServiceOperations;
import ai.vital.vitalservice.DowngradeOptions;
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.admin.VitalServiceAdmin;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.impl.UpgradeDowngradeProcedure;
import ai.vital.vitalservice.model.App
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.segment.VitalSegment


/**
 * This class demonstrates how to downgrade live data segment in vitalprime
 * To avoid any prerequisites this script unloads and undeploys any existing movielens domains first
 * Yet there's one: movielens-1.0.0.owl must be available in prime's $VITAL_HOME/domain-ontology/archive 
 */
class SampleDowngradeOperation {

	static def main(args) {
		
		File resourcesDir = new File("./resources/movielens-migration")
		
		String serviceProfile = "default"
		
		App app = new App()
		app.setID('app')
		
		String oldJarName = 'movielens-groovy-1.0.0.jar'
		String newJarName = 'movielens-groovy-1.0.1.jar'
		
		
		File newDataFile = new File(resourcesDir, "ml-10K_all.v_1_0_1.vital")
		
		File outOldDataFile = new File(resourcesDir, "ml-10K_all.v_1_0_0.segment-downgraded.vital")
		
		File builderFile = new File(resourcesDir, "movielens-downgrade.groovy")
		
		
		VitalServiceFactory.setServiceProfile(serviceProfile)
		
		VitalServiceAdmin serviceAdmin = VitalServiceFactory.getVitalServiceAdmin()
		
		VitalSegment sourceSegment = VitalSegment.withId("movielens-migration-source")
		
		VitalSegment destinationSegment = VitalSegment.withId("movielens-migration-destination")
		
		
		//start with empty segments
		try {
			serviceAdmin.removeSegment(app, sourceSegment, true)
		} catch(Exception e) {System.err.println(e.localizedMessage)}
		PrimeVitalSegment lvs1 = segmentDef(app, sourceSegment)
		serviceAdmin.addSegment(app, lvs1, true)

		try {
			serviceAdmin.removeSegment(app, destinationSegment, true)
		} catch(Exception e) {System.err.println(e.localizedMessage)}
		PrimeVitalSegment lvs2 = segmentDef(app, destinationSegment)
		serviceAdmin.addSegment(app, lvs2, true)
		
		
		//remove all current domains
		unloadDomainJar(serviceAdmin, app, oldJarName)
		unloadDomainJar(serviceAdmin, app, newJarName)

		//load new domain version
		loadDomainJar(serviceAdmin, app, resourcesDir, newJarName)	

		FileInputStream fis = new FileInputStream(newDataFile)
		serviceAdmin.bulkImport(app, sourceSegment, fis)
		fis.close()
		
		
		String builderFileContents = FileUtils.readFileToString(builderFile, "UTF-8")
		
		
		//utitlity method to parse builder file into operations object but without closures compilation
		ServiceOperations ops = UpgradeDowngradeProcedure.parseUpgradeDowngradeBuilder(FileUtils.readFileToString(builderFile, "UTF-8"))
		DowngradeOptions upgradeOpts = ops.getDowngradeOptions()
		
		//override input/output
		upgradeOpts.setSourceSegment(sourceSegment.getID())
		upgradeOpts.setDestinationSegment(destinationSegment.getID())

		
		VitalStatus status = serviceAdmin.doOperations(app, ops)
		
		println "Downgrade status " + status.status + " - " + status.message
		
		
		//unload new 
		unloadDomainJar(serviceAdmin, app, newJarName)
		
		//load old jar in order to bulk export older segment
		loadDomainJar(serviceAdmin, app, resourcesDir, oldJarName)
		
		
		FileOutputStream fos = new FileOutputStream(outOldDataFile)
		serviceAdmin.bulkExport(app, destinationSegment, fos)
		fos.close()
		

		
		//cleanup
		try {
			serviceAdmin.removeSegment(app, sourceSegment, true)
		} catch(Exception e) {System.err.println(e.localizedMessage)}

		try {
			serviceAdmin.removeSegment(app, destinationSegment, true)
		} catch(Exception e) {System.err.println(e.localizedMessage)}
		
		//remove all current domains
		unloadDomainJar(serviceAdmin, app, oldJarName)
		unloadDomainJar(serviceAdmin, app, newJarName)
		
		
	}

	/**
	 * utility method that creats a segment object instance
	 * @param app
	 * @param s
	 * @return
	 */
	static VitalSegment segmentDef(App app, VitalSegment s) {
		
		PrimeVitalSegment lvs = new PrimeVitalSegment()
		lvs.setAppID(app.getID())
		lvs.setID(s.getID())
		
		return lvs
		
	}
	
	/**
	 * Unloads and undeploys the domain jar
	 * @param serviceAdmin
	 * @param app
	 * @param jarName
	 */
	static void unloadDomainJar(VitalServiceAdmin serviceAdmin, App app, String jarName) {
		
		ResultList rl = serviceAdmin.callFunction(app, "commons/scripts/DomainsManagerScript", [action: 'unloadDomainJar', jarName: jarName])
		println("unload status: " + rl.status.status + ' - ' + trim(rl.status.message))
		
		ResultList rl2 = serviceAdmin.callFunction(app, "commons/scripts/DomainsManagerScript", [action: 'deleteDomainJar', jarName: jarName])
		println("delete status: " + rl2.status.status + ' - ' + trim(rl2.status.message))
		
	}
	
	static String trim(String s) {
		if(s) return s.substring(0, Math.min(s.length(), 1000))
	}
	
	/**
	 * Deploys and loads domain jar
	 * @param serviceAdmin
	 * @param app
	 * @param jarName
	 */
	static void loadDomainJar(VitalServiceAdmin serviceAdmin, App app, File resourcesDir, String jarName) {
		
		byte[] contents = FileUtils.readFileToByteArray(new File(resourcesDir, jarName))
		
		ResultList rl2 = serviceAdmin.callFunction(app, "commons/scripts/DomainsManagerScript", [action: 'saveDomainJar', jarName: jarName, content: contents])
		println("deploy status: " + rl2.status.status + ' - ' + trim(rl2.status.message))
		
		ResultList rl = serviceAdmin.callFunction(app, "commons/scripts/DomainsManagerScript", [action: 'loadDomainJar', jarName: jarName])
				
		println("load status: " + rl.status.status + ' - ' + trim(rl.status.message))
				
	}
}
