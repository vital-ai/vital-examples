package ai.vital.movielensexample

import org.movielens.domain.Edge_hasMovieRating;
import org.movielens.domain.Edge_hasMovieRating_PropertiesHelper;
import org.movielens.domain.Movie;
import org.movielens.domain.User;

import ai.vital.domain.Annotation;
import ai.vital.domain.Document
import ai.vital.domain.FlowPredictModel;
import ai.vital.domain.TargetNode;
import ai.vital.query.Utils;
import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalGraphQuery;
import ai.vital.vitalservice.query.VitalSelectQuery;
import ai.vital.vitalsigns.meta.GraphContext;
import ai.vital.vitalsigns.model.GraphObject;
import ai.vital.vitalsigns.model.property.IProperty;
import ai.vital.vitalsigns.model.property.URIProperty;

class MovieLensRecommendationsScript {

	def static main(args) {
	
		def cli = new CliBuilder(usage: "movielens-recommendations [options]")
		cli.with {
			n longOpt: 'model-name', 'prediction model name, mutually exclusive with model-uri', args:1, required:false
			u longOpt: 'model-uri', 'prediction model URI, mutually exclusive with model-name', args:1, required:false
			prof longOpt: 'profile', 'vitalservice profile, default: default', args: 1, required: false
			uri longOpt: 'user-uri', 'user uri', args: 1, required: true
			max  longOpt: 'max-results', 'max results count, default 10', args: 1, required: false
		}
		
		
		def options = cli.parse(args)
		if(!options) {
			return
		}
		
		
		String modelName = options.n ? options.n : null
		String modelURI = options.u ? options.u : null
		
		if((modelName && modelURI) || (!modelName && !modelURI)) {
			System.err.println "--model-name and --model-uri parameters are mutually exclusive, exactly 1 required"
			return
		}
			
		String userURI = options.uri
			
		Integer max = 10
			
		if( options.max ) max = Integer.parseInt( options.max )
		if(max < 1) {
			System.err.println "-max must not be < 1"
			return
		}

		
		String profile = options.prof ? options.prof : null
		if(profile != null) {
			println "Setting vitalservice profile to: ${profile}"
			VitalServiceFactory.setServiceProfile(profile)
		} else {
			println "using default vitalservice profile: ${VitalServiceFactory.getServiceProfile()}"
		}
		
		def service = VitalServiceFactory.getVitalService();			
	
		GraphObject x = service.get(GraphContext.ServiceWide, URIProperty.withString(userURI)).first()
		if(x == null) {
			System.err.println("Object with URI: " + userURI + " not found")
			return
		}
		if(!(x instanceof User) ) {
			System.err.println("Object with URI " + userURI + " is not a user")
			return
		}
		
		
		VitalSelectQuery selectQuery = new VitalBuilder().query {
		
			SELECT {
				
				value segments: ['movielens']
				
				edge_constraint { Edge_hasMovieRating.class }
				edge_constraint { new Edge_hasMovieRating_PropertiesHelper().edgeSource.equalTo(URIProperty.withString(userURI)) }
				
			}
				
		}.toQuery()
		
		ResultList queryRL = service.query(selectQuery)
		if(queryRL.getStatus().getStatus() != VitalStatus.Status.ok) {
			System.err.println "Error when querying for self-rated movies: ${queryRL.getStatus().getMessage()}"
			return
		}
		
		List selfRatedMovies = []
		for(GraphObject g : queryRL) {
			if(g instanceof Edge_hasMovieRating) {
				Edge_hasMovieRating edge = g
				selfRatedMovies.add(edge.destinationURI)
			}
		}
		
		User u = x
		
		println "self-rated movies list size: ${selfRatedMovies.size()}"
		
		double resultsValueCount = max.doubleValue() + selfRatedMovies.size().doubleValue() 
		
		TargetNode resultsCount = new TargetNode()
		resultsCount.URI = "urn:resultsCount"
		resultsCount.targetScore = resultsValueCount
		List inputBlock = [x, resultsCount]
		
		ResultList predictRL = service.callFunction("commons/scripts/Aspen_Predict", ['modelName': modelName, 'modelURI': modelURI, 'inputBlock': inputBlock] )
		
		if(predictRL.status.status != VitalStatus.Status.ok) {
			System.err.println "Error when calling predict datascript: ${predictRL.status.message}"
			return
		}
		
		List<URIProperty> movies = []
		Map<String, Double> scores = [:] 
		
		for(GraphObject g : predictRL) {
			
			if(g instanceof TargetNode) {
				
				TargetNode t = g
				movies.add(URIProperty.withString( t.targetStringValue.toString()) )
				scores.put(t.targetStringValue.toString(), t.targetScore.doubleValue())
				
			}
			
		}
		
		if(movies.size() > 0) {
			
			ResultList rl = service.get(GraphContext.ServiceWide, movies)
			
			if(rl.status.status != VitalStatus.Status.ok) {
				System.err.println "Error when getting movies list: ${rl.status.message}"
				return
			}
			
			int c = 0
			
			println "Recommendations:"
			
			for(URIProperty m : movies) {
				
				if( selfRatedMovies.contains(m.get()) ) continue
				
				c++
				
				Movie movie = rl.get(m.get())
				
				String title = movie != null ? movie.name : "-- movie not found --"
				
				double score = scores.get(m.get())
				
				println "$c: ${m.get()} $title $score ${selfRatedMovies.contains(m.get()) ? ('[self-rated]') : ('')}"
				
				if(c >= max.intValue()) break
				
			}
			
		} else {
		
			println "(no recommendations found)"
		
		}
		
		
		
		
		
				
			
	}
	
	
	static def predict(VitalService service, String modelName, String modelURI, String title, String body) {
		
		Document doc = new Document()
		doc.URI = "urn:doc1"
		doc.title = title
		doc.body = body
		List inputBlock = [doc]
		
		ResultList predictRL = service.callFunction("commons/scripts/Aspen_Predict", ['modelName': modelName, 'modelURI': modelURI, 'inputBlock': inputBlock] )

		if(predictRL.status.status != VitalStatus.Status.ok) {
			System.err.println "Error when calling predict datascript: ${predictRL.status.message}"
			return
		}
		
		
		println "predictions:"
		
		int c = 0
		
		for(GraphObject g : predictRL) {
			
			if(g instanceof TargetNode) {
				
				println "${++c}:  ${g.targetStringValue} , score: ${g.targetScore}"
				
			}
			
		}
		
		if(c == 0) println "(none)"

		
	}
	
	static def listModels(VitalService service) {
		
		ResultList modelsRL = service.callFunction('commons/scripts/Aspen_ModelManager', ['action': 'listModels']);
		
		if(modelsRL.status.status != VitalStatus.Status.ok) {
			System.err.println "Error when listing models: ${modelsRL.status.message}"
			return
		}
		
		println "Models count: ${modelsRL.results.size()}"
		
		int c = 1
		for(FlowPredictModel model : modelsRL) {
			
			println ""
			
			println "Model #${c}"
			println "URI: ${model.URI}"
			println "name: ${model.name}"
			println "type: ${model.modelType}"
			println "path: ${model.modelPath}"
			
			c++
			
		}
		
	}

}
