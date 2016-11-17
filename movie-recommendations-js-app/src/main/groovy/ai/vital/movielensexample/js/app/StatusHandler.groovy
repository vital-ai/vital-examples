package ai.vital.movielensexample.js.app

import org.movielens.domain.Movie;

import ai.vital.movielensexample.js.app.handlers.MovieLensGetRatedMoviesHandler
import ai.vital.movielensexample.js.app.handlers.MovieLensGetRecommendedMoviesHandler
import ai.vital.movielensexample.js.app.handlers.MovieLensGetUserHandler;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.model.GraphObject;
import groovy.json.JsonOutput
import io.vertx.core.Handler
import io.vertx.groovy.core.http.HttpServerRequest
import io.vertx.groovy.ext.web.RoutingContext

class StatusHandler implements Handler<RoutingContext> {

	@Override
	public void handle(RoutingContext rc) {

		HttpServerRequest req = rc.request()
		
		def res = req.response()
		
		Map r = [:]
		
		//test the movie recommendations model!
		
		try {
			ResultList rl = new MovieLensGetRecommendedMoviesHandler().callFunction(null, null, MovieLensGetRecommendedMoviesHandler.movielens_get_recommended_movies, 
				[userURI: MovieLensGetUserHandler.USER_NS + '1', limit: 10], [:])
			if(rl.status.status != VitalStatus.Status.ok) {
				throw new Exception("Recommendations Datascript error: " + rl.status.message)
			}

			if( rl.results.size() != 10 ) throw new Exception("Expected 10 results")
			
			GraphObject g = rl.first();
			
			if(!(g instanceof Movie)) throw new Exception("Expected a movie result, got: " + g.getClass().getCanonicalName())
			
			r.ok = true
			r.message = "recommendation model ok"
			
		} catch(Exception e) {	
			r.ok = false
			r.message = e.localizedMessage
		}
		
				
		res.end(JsonOutput.toJson(r), 'UTF-8')
			
	}

}
