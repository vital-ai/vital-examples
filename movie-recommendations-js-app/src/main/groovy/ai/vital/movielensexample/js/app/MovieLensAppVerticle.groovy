package ai.vital.movielensexample.js.app

import org.vertx.groovy.platform.Verticle;
import org.vertx.java.core.Future;



import ai.vital.movielensexample.js.app.handlers.MovieLensGetRatedMoviesHandler;
import ai.vital.movielensexample.js.app.handlers.MovieLensGetRecommendedMoviesHandler;
import ai.vital.movielensexample.js.app.handlers.MovieLensGetUserHandler;
import ai.vital.service.vertx.async.VitalServiceAsyncClient;
import ai.vital.service.vertx.binary.ResponseMessage;
import ai.vital.service.vertx.handler.CallFunctionHandler;
import ai.vital.vitalservice.VitalStatus;
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalsigns.model.VitalApp;

import org.vertx.java.core.Future

class MovieLensAppVerticle extends Verticle {
	
	public static boolean initialized = false
	
	//async start with notification
	@Override
	public Object start(Future<Void> startedResult) {
	
		if(initialized) {
			startedResult.setResult(true)
			return
		}
		
		synchronized (MovieLensAppVerticle.class) {
			
			if(initialized) return
			
			String app = container.config.get('app')
			
			if(!app) throw new RuntimeException("No app config param")
			
			VitalServiceAsyncClient client = new VitalServiceAsyncClient(vertx, VitalApp.withId(app))
			
			client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: MovieLensGetUserHandler.movielens_get_user, handlerClass: MovieLensGetUserHandler.class.canonicalName]) { ResponseMessage m1 ->

				if(m1.exceptionMessage) {
					startedResult.setFailure(new RuntimeException(m1.exceptionMessage))
					return
				}
				
				ResultList rl1 = m1.response
				
				if(rl1.status.status != VitalStatus.Status.ok) {
					startedResult.setFailure(new RuntimeException(rl1.status.message))
					return
				}
				
				client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: MovieLensGetRatedMoviesHandler.movielens_get_rated_movies, handlerClass: MovieLensGetRatedMoviesHandler.class.canonicalName]) { ResponseMessage m2 ->

					if(m2.exceptionMessage) {
						startedResult.setFailure(new RuntimeException(m2.exceptionMessage))
						return
					}
					
					ResultList rl2 = m2.response
					
					if(rl2.status.status != VitalStatus.Status.ok) {
						startedResult.setFailure(new RuntimeException(rl2.status.message))
						return
					}
	
										
					client.callFunction(CallFunctionHandler.VERTX_REGISTER_HANDLER, [functionName: MovieLensGetRecommendedMoviesHandler.movielens_get_recommended_movies, handlerClass: MovieLensGetRecommendedMoviesHandler.class.canonicalName]) { ResponseMessage m3 ->
						
						if(m3.exceptionMessage) {
							startedResult.setFailure(new RuntimeException(m3.exceptionMessage))
							return
						}
						
						ResultList rl3 = m3.response
						
						if(rl3.status.status != VitalStatus.Status.ok) {
							startedResult.setFailure(new RuntimeException(rl3.status.message))
							return
						}
						
						startedResult.setResult(true)
						
					}
					
				}
								
			}
			
			
			//register handlers
			
			initialized = true
		}
		
	}

}
