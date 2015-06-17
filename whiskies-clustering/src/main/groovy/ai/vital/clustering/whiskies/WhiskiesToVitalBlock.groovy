package ai.vital.clustering.whiskies

import ai.vital.vitalsigns.block.BlockCompactStringSerializer
import java.nio.charset.StandardCharsets;
import org.example.whiskies.domain.Whisky;


class WhiskiesToVitalBlock {

	def static String NS = "http://vital.ai/whiskies/"

	def static String HEADER = 'RowID,Distillery,Body,Sweetness,Smoky,Medicinal,Tobacco,Honey,Spicy,Winey,Nutty,Malty,Fruity,Floral,Postcode, Latitude, Longitude'

	def static main(args) {

		def cli = new CliBuilder(usage: "convert_whiskies_to_vitalblock [options]")
		cli.with {
			i longOpt: 'input-file', 'input whiskies data file (whiskies.txt)', args:1, required: true
			o longOpt: 'output-block', 'output vital block file .vital[.gz]', args: 1, required:true
			ow longOpt: 'overwrite', 'overwrite output file if exists', args: 0, required: false
		}

		def options = cli.parse(args)
		if(!options) {
			//			cli.usage()
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

			if(l == 1) {

				if(line != HEADER) {
					error("First line expected to be a header: $HEADER")
				}
				continue;
			}

			if(line.isEmpty()) continue



				//data is a very simnple csv format - no external library necessary, no escaping nor encoding issues

				//RowID,Distillery,Body,Sweetness,Smoky,Medicinal,Tobacco,Honey,Spicy,Winey,Nutty,Malty,Fruity,Floral,Postcode, Latitude, Longitude
				def columns = line.split(",")

			if( columns.length != 17 ) {
				error("Line " + l + ": expected 17 columns (csv), got: ${columns.length} - ${line}")
			}

			String rowID = columns[0]

			def whisky = new Whisky()

			//distillery
			whisky.name = columns[1].trim()
			whisky.body =  toInt(columns[2])
			whisky.sweetness = toInt(columns[3])
			whisky.smoky = toInt(columns[4])
			whisky.medicinal = toInt(columns[5])
			whisky.tobacco = toInt(columns[6])
			whisky.honey = toInt(columns[7])
			whisky.spicy = toInt(columns[8])
			whisky.winey = toInt(columns[9])
			whisky.nutty = toInt(columns[10])
			whisky.malty = toInt(columns[11])
			whisky.fruity = toInt(columns[12])
			whisky.floral = toInt(columns[13])
			whisky.postcode = columns[14].trim()
			whisky.latitude = toInt(columns[15])
			whisky.longitude = toInt(columns[16])

			whisky.setURI(NS + rowID)

			writer.startBlock()

			writer.writeGraphObject(whisky)

			writer.endBlock()
			
			c++

		}


		reader.close()

		writer.close()

		println("records count: " + c)

	}

	def static error(msg) {
		System.err.println(msg)
		System.exit(1)

	}

	def static Integer toInt(String input) {
		return Integer.parseInt(input.trim())
	}

}