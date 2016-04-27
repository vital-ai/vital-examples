package ai.vital.movielensexample.js.app.handlers

import org.movielens.domain.Edge_hasMovieRating

import ai.vital.query.querybuilder.VitalBuilder
import ai.vital.service.vertx3.VitalServiceVertx3;
import ai.vital.service.vertx3.handler.CallFunctionHandler
import ai.vital.vitalservice.VitalStatus
import ai.vital.vitalservice.exception.VitalServiceException
import ai.vital.vitalservice.exception.VitalServiceUnimplementedException
import ai.vital.vitalservice.query.ResultElement
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalSelectQuery
import ai.vital.vitalsigns.meta.GraphContext
import ai.vital.vitalsigns.model.VitalApp
import ai.vital.vitalsigns.model.VitalOrganization
import ai.vital.vitalsigns.model.property.URIProperty



class MovieLensGetRatedMoviesHandler implements CallFunctionHandler {

	static String movielens_get_rated_movies = 'movielens-get-rated-movies'

	static VitalBuilder vitalBuilder = new VitalBuilder()
		
	@Override
	public ResultList callFunction(VitalOrganization organization, VitalApp app,
			String function, Map<String, Object> params, Map<String, Object> sessionParams)
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
		
		VitalSelectQuery selectQuery = vitalBuilder.query {
					
			SELECT {
				
				value offset: 0
				value limit: 10000
				
				value segments: ['movielens']
				
				edge_constraint { Edge_hasMovieRating.class }
				edge_constraint { Edge_hasMovieRating.props().edgeSource.equalTo(URIProperty.withString(userURI)) }
				
				
			}
							
		}.toQuery()
				
		def service = VitalServiceVertx3.registeredServices.get(app.appID.toString())
			
		ResultList queryRL = service.query(selectQuery)
		
		if(queryRL.status.status != VitalStatus.Status.ok) {
			return queryRL;
		}
		
		
		List<Edge_hasMovieRating> edges = []
		for(Edge_hasMovieRating e : queryRL) {
			edges.add(e)
		}
		
		edges.sort { Edge_hasMovieRating e1, Edge_hasMovieRating e2 ->
			return new Double(e2.rating.doubleValue()).compareTo(e1.rating.doubleValue())
		}
		
		if(edges.size() > limit) edges = edges.subList(0, limit)
		

		List<URIProperty> moviesURIs = []
		Map<String, Double> movie2Rating = [:]
		for(Edge_hasMovieRating edge : edges) {
			moviesURIs.add(URIProperty.withString(edge.destinationURI))
			movie2Rating.put(edge.destinationURI, edge.rating?.doubleValue())
		}
		
		ResultList moviesRL = service.get(GraphContext.ServiceWide, moviesURIs)

		if(moviesRL.status.status != VitalStatus.Status.ok) {
			return moviesRL
		}
		
		for(ResultElement re : moviesRL.results) {
			Double rating = movie2Rating.get( re.graphObject.URI)
			if(rating == null) rating = 0d
			re.score = rating
		}
		
		//sort to be sure
		
		moviesRL.results.sort { ResultElement re1, ResultElement re2 ->
			return new Double(re2.score).compareTo(re1.score)
		}
				
		return moviesRL
		
	}

}
