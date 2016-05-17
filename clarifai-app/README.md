clarifai-app
=====================


An example vertx app built with vitalservice-vertx3


### Creating model jar

The model is generated with a script in aspen project.

Edit the model builder file `resources/clarifai-image-categorization-model.dsl.builder.groovy` and set the following properties:

MODEL -> ALGORITHM -> `clientID`  ( clientID received from clarifai )

MODEL -> ALGORITHM -> `clientSecret` ( clientSecret received from clarifai )

//taxonomy disabled
//MODEL -> TAXONOMY -> `taxonomyPath` (absolute path/URL to `resources/clarifai_taxonomy.txt` )

Make sure the aspen assembly job jar was built, either aspen-jobs-pom.xml or its variant with custom domains.

      mvn -f aspen-jobs-pom.xml clean package

Run

      bin/simple-model-training --model-builder <clarifai_model_builder_file_path> --model <output_model_jar_path>

