package ai.vital.movielensexample.js.app.handlers

import java.util.Map;

import org.movielens.domain.Edge_hasMovieRating
import org.movielens.domain.User

import ai.vital.domain.TargetNode
import ai.vital.query.querybuilder.VitalBuilder;
import ai.vital.service.vertx.handler.CallFunctionHandler;
import ai.vital.vitalservice.VitalService
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.exception.VitalServiceException;
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.model.App;
import ai.vital.vitalservice.model.Organization;
import ai.vital.vitalservice.query.ResultElement;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalservice.query.VitalSelectQuery
import ai.vital.vitalsigns.meta.GraphContext;
import ai.vital.vitalsigns.model.GraphObject
import ai.vital.vitalsigns.model.property.URIProperty;


class MovieLensGetRecommendedMoviesHandler implements CallFunctionHandler {

	static String movielens_get_recommended_movies = 'movielens-get-recommended-movies'
	
	static String modelName = 'spark-collaborative-filtering-prediction-movielens'
	
	static String modelURI = null
	
	static VitalBuilder vitalBuilder = new VitalBuilder()
	
	@Override
	public ResultList callFunction(Organization organization, App app,
			String function, Map<String, Object> params)
			throws VitalServiceUnimplementedException, VitalServiceException {
				
		def userURI = params.get('userURI')
		if(userURI == null) throw new RuntimeException("No 'userURI' param")
		if(!(userURI instanceof String)) throw new RuntimeException("'userURI' param must be a string")
		
		def limit = params.get('limit')
		if(limit == null) throw new RuntimeException("No 'limit' param")
		if(limit instanceof Integer) {
		} else if(limit instanceof Long) {
			limit = limit.intValue()
		} else throw new RuntimeException("'limit' param must be an integer/long")
		
		
		VitalService service = VitalServiceFactory.getVitalService()
		
		ResultList getRL = service.get(GraphContext.ServiceWide, URIProperty.withString(userURI))
		if(getRL.status.status != VitalStatus.Status.ok) {
			return getRL
		}
		
		User user = getRL.first()
		
		if(user == null) throw new RuntimeException("User with URI: $userURI not found")
		
		//select all
		VitalSelectQuery selectQuery = vitalBuilder.query {
					
			SELECT {
				
				value offset: 0
				value limit: 10000
				
				value segments: ['movielens']
				
//				value sortProperties: [new VitalSortProperty( VitalSigns.get().getPropertyByTrait(Property_hasRating.class), null, true)]
					
				edge_constraint { Edge_hasMovieRating.class }
				edge_constraint { Edge_hasMovieRating.props().edgeSource.equalTo(URIProperty.withString(userURI)) }
				
				
			}
							
		}.toQuery()
				
			
		ResultList queryRL = service.query(selectQuery)
		
		if(queryRL.status.status != VitalStatus.Status.ok) {
			return queryRL;
		}

		List<String> selfRatedMovies = []		
				
		List<Edge_hasMovieRating> edges = []
		for(Edge_hasMovieRating e : queryRL) {
			selfRatedMovies.add(e.destinationURI)
		}
		
		double resultsValueCount = limit.doubleValue() + selfRatedMovies.size().doubleValue()
		
		TargetNode resultsCount = new TargetNode()
		resultsCount.URI = "urn:resultsCount"
		resultsCount.targetScore = resultsValueCount
		List inputBlock = [user, resultsCount]
		
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
				String movieURI = t.targetStringValue.toString()
				
				if(selfRatedMovies.contains(movieURI)) continue
				
				movies.add(URIProperty.withString( movieURI ) )
				scores.put(movieURI, t.targetScore.doubleValue())
				
			}
			
		}
		
		//sort URIs by score descending order, then trim
		movies.sort { URIProperty u1, URIProperty u2 ->
			Double s1 = scores.get(u1.get())
			if(s1 == null) s1 = 0d
			Double s2 = scores.get(u2.get())
			if(s2 == null) s2 = 0d
			return s2.compareTo(s1)
		}
		
		if(movies.size() > limit) {
			movies = new ArrayList<URIProperty>(movies.subList(0, limit))
		}
		
		ResultList rl = null;
		
		if(movies.size() > 0) {
			
			rl = service.get(GraphContext.ServiceWide, movies)
			
			if(rl.status.status != VitalStatus.Status.ok) {
				return rl
			}
			
			for(ResultElement re : rl.results) {
				
				Double score= scores.get(re.graphObject.URI)
				if(score == null) score = 0
				re.score = score
				
			}
			
			rl.results.sort { ResultElement re1, ResultElement re2 ->
				return new Double(re2.score).compareTo(re1.score)
			}
			
		} else {
			rl = new ResultList()
		}
		
		return rl
			
	}

}
