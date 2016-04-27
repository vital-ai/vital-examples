package ai.vital.movielensexample.js.app


import ai.vital.movielensexample.js.app.handlers.MovieLensGetRatedMoviesHandler;
import ai.vital.movielensexample.js.app.handlers.MovieLensGetRecommendedMoviesHandler;
import ai.vital.movielensexample.js.app.handlers.MovieLensGetUserHandler;
import ai.vital.service.vertx3.async.VitalServiceAsyncClient
import ai.vital.service.vertx3.binary.ResponseMessage
import ai.vital.service.vertx3.handler.CallFunctionHandler;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.model.VitalApp;
import io.vertx.core.Future
import io.vertx.lang.groovy.GroovyVerticle

class MovieLensAppVerticle extends GroovyVerticle {
	
	public static boolean initialized = false
	
	public static String appID
	
	//async start with notification
	@Override
	public void start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.complete(true)
			return
		}
		
		synchronized (MovieLensAppVerticle.class) {
			
			if(initialized) {
				startedResult.complete(true)
				return
			}
			
			if(context == null) context = vertx.getOrCreateContext()
			
			String app = context.config().get('app')
			
			if(!app) {
				startedResult.fail("No app config param")
				return
			}
			
			appID = app
			
			VitalServiceAsyncClient client = new VitalServiceAsyncClient(vertx, VitalApp.withId(app))
			
			client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: MovieLensGetUserHandler.movielens_get_user, handlerClass: MovieLensGetUserHandler.class.canonicalName]) { ResponseMessage m1 ->

				if(m1.exceptionType) {
					startedResult.fail(m1.exceptionType + ' - ' + m1.exceptionMessage)
					return
				}
				
				ResultList rl1 = m1.response
				
				if(rl1.status.status != VitalStatus.Status.ok) {
					startedResult.fail(rl1.status.message)
					return
				}
				
				client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: MovieLensGetRatedMoviesHandler.movielens_get_rated_movies, handlerClass: MovieLensGetRatedMoviesHandler.class.canonicalName]) { ResponseMessage m2 ->

					if(m2.exceptionType) {
						startedResult.fail(m2.exceptionType + ' - ' + m2.exceptionMessage)
						return
					}
					
					ResultList rl2 = m2.response
					
					if(rl2.status.status != VitalStatus.Status.ok) {
						startedResult.fail(rl2.status.message)
						return
					}
	
										
					client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: MovieLensGetRecommendedMoviesHandler.movielens_get_recommended_movies, handlerClass: MovieLensGetRecommendedMoviesHandler.class.canonicalName]) { ResponseMessage m3 ->
						
						if(m3.exceptionType) {
							startedResult.fail(m3.exceptionType + ' - ' + m3.exceptionMessage)
							return
						}
						
						ResultList rl3 = m3.response
						
						if(rl3.status.status != VitalStatus.Status.ok) {
							startedResult.fail(rl3.status.message)
							return
						}
						
						startedResult.complete(true)
						
					}
					
				}
								
			}
			
			
			//register handlers
			
			initialized = true
		}
		
	}
	
	public void stop() throws Exception {
	
		initialized = false
		appID = null
			
	}

}
