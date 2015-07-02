package ai.vital.amazon.echo.humor.app.scripts

import ai.vital.vitalservice.model.App
import ai.vital.vitalsigns.block.BlockCompactStringSerializer
import ai.vital.vitalsigns.uri.URIGenerator;

import java.nio.charset.StandardCharsets;

import org.example.humor.app.domain.Joke;

class ConvertJokesToVitalBlockScript {

	def static main(args) {

		def cli = new CliBuilder(usage: "convert_jokes_to_vitalblock [options]")
		cli.with {
			i longOpt: 'input-file', 'input jokes txt, one joke per line', args:1, required: true
			o longOpt: 'output-block', 'output vital block file .vital[.gz]', args: 1, required:true
			ow longOpt: 'overwrite', 'overwrite output file if exists', args: 0, required: false
		}

		if(args.length == 0) {
			cli.usage()
			return
		}
		
		def options = cli.parse(args)
		if(!options) {
			return
		}


		def inputFile = new File(options.i)
		def outputFile = new File(options.o)
		boolean overwrite = options.ow ? true : false

		println("Input: " + inputFile.getAbsolutePath())
		println("Output: " + outputFile.getAbsolutePath())
		println("overwrite ? " + overwrite)

		if(outputFile.exists()) {

			if(!overwrite) {
				error("Output file already exists: " + outputFile.getAbsolutePath())
			}

			println("Overwriting existing file " + outputFile.getAbsolutePath())
		}

		def reader = new BufferedReader(new InputStreamReader(new FileInputStream(inputFile), StandardCharsets.UTF_8.name()))

		def writer = new BlockCompactStringSerializer(outputFile)

		int l = 0
		int c = 0

		for(String line = reader.readLine(); line != null ; line = reader.readLine()) {

			line = line.trim()

			l++

			if(line.isEmpty()) continue

			Joke joke = new Joke()
			joke.URI = URIGenerator.generateURI((App) null, Joke.class)
			joke.body = line 
			
			writer.startBlock()
			writer.writeGraphObject(joke)
			writer.endBlock()
			
			c++

		}

		reader.close()

		writer.close()

		println("jokes count: " + c)

	}

	def static error(msg) {
		System.err.println(msg)
		System.exit(1)

	}

	def static Integer toInt(String input) {
		return Integer.parseInt(input.trim())
	}
	
}
