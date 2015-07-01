package ai.vital.movielensexample.js.app

import ai.vital.movielensexample.js.app.handlers.MovieLensGetRatedMoviesHandler;
import ai.vital.movielensexample.js.app.handlers.MovieLensGetRecommendedMoviesHandler;
import ai.vital.movielensexample.js.app.handlers.MovieLensGetUserHandler;
import ai.vital.vitalservice.VitalService;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.factory.VitalServiceFactory;
import ai.vital.vitalservice.query.ResultElement;
import ai.vital.vitalservice.query.ResultList;
import ai.vital.vitalsigns.model.GraphObject;
import junit.framework.TestCase

class MovieLensCallFunctionHandlerTest extends TestCase {

	static VitalService service = null
	
	@Override
	protected void setUp() throws Exception {

		super.setUp();
		
		if(service == null) {
			
			VitalServiceFactory.setServiceProfile('vitaldevelopmentprime')
			
			service = VitalServiceFactory.getVitalService()
			
		}
		
		
		
		
				
	}
	
	public void testGetUser() {
		
		MovieLensGetUserHandler handler = new MovieLensGetUserHandler()
		
		ResultList rl = handler.callFunction(service.getOrganization(), service.getApp(), MovieLensGetUserHandler.getMovielens_get_user(), ['userID' : 1] )
		
		assertEquals(rl.status.message, VitalStatus.Status.ok, rl.status.status)
		
		println "GET USER " + rl.totalResults
		
		for(GraphObject g : rl) {
			println g.URI
		}
		
	}
	
	public void testGetRatedMovies() {
		
		MovieLensGetRatedMoviesHandler handler = new MovieLensGetRatedMoviesHandler()
		
		ResultList rl = handler.callFunction(service.getOrganization(), service.getApp(), MovieLensGetRatedMoviesHandler.movielens_get_rated_movies, [userURI: MovieLensGetUserHandler.USER_NS + 1, limit: 100])
		
		assertEquals(rl.status.message, VitalStatus.Status.ok, rl.status.status)
		
		println "GET RATED MOVIES"
		
		for(ResultElement g : rl.results) {
			println g.graphObject.name + ' ' + g.score
		}
		
	}
	
	public void testGetRecommendedMovies() {
		
		MovieLensGetRecommendedMoviesHandler handler = new MovieLensGetRecommendedMoviesHandler()
		
		ResultList rl = handler.callFunction(service.getOrganization(), service.getApp(), MovieLensGetRecommendedMoviesHandler.movielens_get_recommended_movies, [userURI: MovieLensGetUserHandler.USER_NS + 1, limit: 100])
		
		assertEquals(rl.status.message, VitalStatus.Status.ok, rl.status.status)
		
		println "GET RECOMMENDED MOVIES"
		
		for(ResultElement g : rl.results) {
			println g.graphObject.name + ' ' + g.score
		}
		
	}
	
}
