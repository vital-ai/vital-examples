package ai.vital.regression.autompg

import ai.vital.vitalsigns.block.BlockCompactStringSerializer
import java.nio.charset.StandardCharsets;
import org.example.autompg.domain.AutoMpg

class AutoMpgToVitalBlock {

	def static NS = "http://vital.ai/autompg/"
  
	def static main(args) {
  
		def cli = new CliBuilder(usage: "convert_autompg_to_vitalblock [options]")
		cli.with {
			i longOpt: 'input-file', 'input autompg data file (auto-mpg.data)', args:1, required: true
			o longOpt: 'output-block', 'output vital block file .vital[.gz]', args: 1, required:true
			ow longOpt: 'overwrite', 'overwrite output file if exists', args: 0, required: false
		}
		
		def options = cli.parse(args)
		if(!options) {
			cli.usage()
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
      
        
        def dataNameCols = line.split("\t")
        if(dataNameCols.length != 2) error("Line " + l + ": expected two tsv columns")
        
        def data = dataNameCols[0]
        def name = dataNameCols[1].substring(1, dataNameCols[1].length() - 1)
        
        def dataCols = data.split("\\s+");
        
        if(dataCols.length != 8) error("Line " + l + ": expected 8 data columns") 
        
        
        if("?".equals( dataCols[3] ) ) {

          println("skipping missing horsepower line " + l + ": " + line)
        
		  continue
		    
        }
        
		def auto = new AutoMpg()
          
		auto.mpg = Double.parseDouble(dataCols[0])
		auto.cylinders = Integer.parseInt(dataCols[1])
		auto.displacement = Double.parseDouble(dataCols[2])
		auto.horsepower = Double.parseDouble(dataCols[3])
		auto.weight = Double.parseDouble(dataCols[4])
		auto.acceleration = Double.parseDouble(dataCols[5])
		auto.modelYear = Integer.parseInt(dataCols[6])
        auto.origin = Integer.parseInt(dataCols[7])
		auto.name = name
          
		c++
		
		auto.setURI(NS + c)
          
        writer.startBlock()
          
        writer.writeGraphObject(auto)
          
        writer.endBlock()
        
    }
    
    
    reader.close()
    
    writer.close()
    
    println("records count: " + c)
    
  }
  
  def static error(msg) {
    System.err.println(msg)
    System.exit(1)
    
  }
  
}