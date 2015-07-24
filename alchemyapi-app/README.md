alchemyapi-app
=====================


An example vertx app built with vitalservice-vertx-mod


### Creating model jar

The model is generated with a script in aspen project.

Edit the model builder file `resources/alchemy-api-[text|url]-categorization-model.dsl.builder.groovy` and set the following properties:

MODEL -> ALGORITHM -> `apiKey`  ( key received from AlchemyAPI )

MODEL -> TAXONOMY -> `taxonomyPath` (absolute path/URL to `resources/alchemyapi_taxonomy.txt` )

Make sure the aspen assembly job jar was built, either aspen-jobs-pom.xml or its variant with custom domains.

      mvn -f aspen-jobs-pom.xml clean package

Run

      bin/simple-model-training --model-builder <alchemy_model_builder_file_path> --model <output_model_jar_path>

