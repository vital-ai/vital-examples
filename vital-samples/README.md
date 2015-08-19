## vital-samples

### Data migration examples

There are two types of data migration: block-to-block and segment-to-segment.  

#### block-to-block migration

block to block migration may be accomplished with ```vitaldatamigrate``` command available in [**Vital AI Utilities**](https://dashboard.vital.ai/detail.html?id=vital-utils-020)

The prerequisites for the operations are:  

* **movielens-groovy-1.0.1.jar** needs to be copied into ```$VITAL_HOME/domain-groovy-jar/``` directory
* the following vitalsigns config **$VITAL_HOME/vital-config/vitalsigns/vitalsigns.config** properties must be set

        domainsStrategy: dynamic
        autoLoad: true

* the older movielens domain ontology **./resources/movielens-migration/movielens-1.0.0.owl** must be copied into vitalsigns domain-ontology archive: ```$VITAL_HOME/domain-ontology/archive/```


To upgrade movielens data ( 1.0.0 -> 1.0.1 )

    vitaldatamigrate -b ./resources/movielens-migration/movielens-upgrade.groovy  \
      -i ./resources/movielens-migration/ml-10K_all_1_0_0.vital \
      -o ./resources/movielens-migration/ml-10K_all_1_0_1.upgraded.vital \
      --overwrite
         
To downgrade movielens data ( 1.0.1 -> 1.0.0 )


    vitaldatamigrate -b ./resources/movielens-migration/movielens-downgrade.groovy  \
      -i ./resources/movielens-migration/ml-10K_all_1_0_1.vital \
      -o ./resources/movielens-migration/ml-10K_all_1_0_0.downgraded.vital \
      --overwrite

#### segment-to-segment migration

Complete segment-to-segment migration samples are available in groovy source files:
  
* src/main/groovy/ai/vital/samples/SampleDowngradeOperation.groovy
* src/main/groovy/ai/vital/samples/SampleUpgradeOperation.groovy
 