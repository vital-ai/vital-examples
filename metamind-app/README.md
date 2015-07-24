metamind-app
=====================


An example vertx app built with vitalservice-vertx-mod


### Creating model jar

The model is generated with a script in aspen project.

Edit the model builder file `resources/metamind-image-categorization-model.dsl.builder.groovy` and set the following properties:

MODEL -> ALGORITHM -> `apiKey`  ( key received from MetaMind )

MODEL -> TAXONOMY -> `taxonomyPath` (absolute path/URL to `resources/imagenet-1k-net_taxonomy.txt` )

Make sure the aspen assembly job jar was built, either aspen-jobs-pom.xml or its variant with custom domains.

      mvn -f aspen-jobs-pom.xml clean package

Run

      bin/simple-model-training --model-builder <metamind_model_builder_file_path> --model <output_model_jar_path>

