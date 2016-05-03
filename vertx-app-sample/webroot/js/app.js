//global variable

var APP_ID = 'vertx-app-sample';
	
if(window.location.hostname.indexOf('dev.') == 0) {
	APP_ID = 'app';
	console.warn("DEV endpoint");
}

var ENDPOINT = 'endpoint.' + APP_ID;


var vitalservice = null;

var evenbusPrefix = '';

//default <currentdomain>:<currentport>/eventbus URL assumed
//var EVENTBUS_URL = null;


var EVENTBUS_URL = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/vertx-app-sample/eventbus';

var LOGGED_IN = false;

var URL_PREFIX = '/vertx-app-sample';

/*** ROUTER ***/
var router = null;

var historyStack = [];

//lru cache of recently rendered results?
//{pathname: window.location.pathname, html: html}
var resultsCache = [];

var maxCacheLength = 10;

function getCachedResults(key) {
	
	//console.log('resultsCache: ', resultsCache);
	
	var resIndex = -1;
	for(var i = 0; i < resultsCache.length; i++) {
		if(resultsCache[i].key == key) {
			resIndex = i;
			break;
		}
	}
	
	if(resIndex < 0) {
		return null;
	}
	
//	var record = resultsCache.splice(resIndex, 1);
//	//move it to front
//	resultsCache.splice(0, 0, record);

	var record = resultsCache[resIndex];
	
	return record.results;
	
}

function putCachedResults(key, results) {
	
	var resIndex = -1;
	for(var i = 0; i < resultsCache.length; i++) {
		if(resultsCache[i].key == key) {
			resIndex = i;
			break;
		}
	}
	
	//remove current record
	if(resIndex >= 0) {
		resultsCache.splice(resIndex, 1);
	}
	
	
	resultsCache.splice(0, 0, {key: key, results: results});
	
	//delete oldest
	if(resultsCache.length > maxCacheLength) {
		resultsCache.splice(maxCacheLength, resultsCache.length - maxCacheLength);
	}
	
	//console.log('resultsCache: ', resultsCache);
	
	//check if already cached
	
}

function newHistoryEvent() {
	
	var path = window.location.pathname;

	var inpath = path;
	
	if(path.indexOf(URL_PREFIX) == 0) {
		
		path = path.substring(URL_PREFIX.length);
		
	}
	
	if(path == '') path = '/';
	
	//console.log("path: " + inpath + ' ( ' + path + ' ) ');
	
	
	//only push if previous state was different
	if( historyStack.length == 0 || historyStack[ historyStack.length - 1] != path ) {
		historyStack.push(path);
	}
	
	//console.log('history stack: ', historyStack);
	
}

var initRouter = function(){

	if(router != null) {
		return;
	}
	
	var port = '' + window.location.port;
	
	if(port.length > 0) port = ':' + port;
	
	var rootURL = window.location.protocol + '//' + window.location.hostname + port + URL_PREFIX;
	//console.log('root URL: ', rootURL);
	router = new Navigo(rootURL, false);
	
	var mainPanel = $('#main-panel');
	
	router.on({
	  
	  '/details/:uri': function(params) {

		  newHistoryEvent();
		  
		  mainPanel.empty();
		  
	    	//bounce off
	    	if(!LOGGED_IN) {
	    		router.navigate('');
	    		return
	    	}
		  
		  handleDetails(mainPanel, params);
		  
	  },
	  '/logout': function (params) {

		  //do not record this state 
		  //newHistoryEvent();
		  doLogout();
		
	  },
	  '/relatedwords/:uri/:offset': function(params) {
		  
		  newHistoryEvent();
		  
		  handleSearch(mainPanel, params, 'relatedwords');
		  
	  },
	  '/relatedwords/:uri': function(params) {
		  
		  newHistoryEvent();
		  
		  handleSearch(mainPanel, params, 'relatedwords');
		  
	  },
      '/searchresults/:q/:offset': function(params) {
    	  
    	  newHistoryEvent();
    	  
    	  handleSearch(mainPanel, params, 'search');
	    	
	  },
      '/searchresults/:q': function(params) {
    	
    	  newHistoryEvent();
	      handleSearch(mainPanel, params, 'search');
	    	
	  },
	  '*': function (params) {

		  newHistoryEvent();
		
		  var ctx = {
			  lastHistoryURL: (historyStack.length > 1 ? historyStack[historyStack.length - 2] : null)
		  };
		  
		  if(LOGGED_IN) {

			  ctx.username = vitalservice.getCurrentLogin() ? vitalservice.getCurrentLogin().get('username') : '';
			  
			  mainPanel.empty().html( JST['templates/home-logged-in.hbs'](ctx) );

		  } else {
			  
			  mainPanel.empty().html( JST['templates/homecontent.hbs'](ctx) );
		  }
		  
	  }
	});
}

$(function(){
	
	VITAL_LOGGING = false;
	
	console.log("instantiating service...");
	
	//this overrides the session expiration call w
	VITAL_SESSION_EXPIRED_CALLBACK = function(errorMsg) {
		//console.error(errorMsg);
		LOGGED_IN = false;
		historyStack = [];
		refreshLoginState();
		if(router != null) {
			router.navigate('');
		}
		return false;
		
	}
	
	VITAL_AUTHENTICATION_REQUIRED_CALLBACK = function(errorMsg) {
		LOGGED_IN = false;
		historyStack = [];
		refreshLoginState();
		router.navigate('');
		return false;		
	};
	
	vitalservice = new VitalService(ENDPOINT, EVENTBUS_URL, function(){
		
		console.log('connected to endpoint');
	
		refreshLoginState();
		
		initRouter();
		
	}, function(err){
		console.error('couldn\'t connect to endpoint -' + err);
	});
	
	
});

var doLogout = function() {
	
	vitalservice.callFunction(VitalServiceWebsocketImpl.vitalauth_logout, {}, function(logoutSuccess){
		
//		console.info("Logout response: ", logoutSuccess);

		historyStack = [];
		
		refreshLoginState();
		
		//go to home
		router.navigate('');
		
	}, function(logoutError) {
		
		console.error("Logout error: ", logoutError);

		historyStack = [];
		
		//refresh the state despite of error
		refreshLoginState();

		//go to home
		router.navigate('');
		
	});

}


	
var doLogin = function() {	
	var username = $('#email').val();
	var password = $('#pwd').val();
	
	var loginErrorPanel = $('#login-error');
	
	loginErrorPanel.text('');
	
	vitalservice.callFunction(VitalServiceWebsocketImpl.vitalauth_login, {loginType: 'Login', username: username, password: password}, function(loginSuccess){
		
		console.info("Login response: ", loginSuccess);

		$('#login-modal').modal('hide');
		
		refreshLoginState();
		
		router.navigate('');
		
	}, function(loginError) {
		
		loginErrorPanel.text(loginError);
		
		console.error("Login error: ", loginError);

	});
	
}

$('#login-modal input').keyup(function(e) {
    if(e.which == 13) {
    	doLogin();
    }
});


	
$('#login-button').click(function(event){
	doLogin();
	return false;
});


var doSearch = function() {
	
	var q = $.trim( $('#query').val() );
	if(q.length == 0) return false;
  
	router.navigate('/searchresults/' + encodeURIComponent(q));
}

$('#query').keyup(function(e){
    if(e.which == 13) {
    	doSearch();
    }
});

//init form controls
$('#search-button').click(function(){

	doSearch();
	  
});


$('#logo-link').click(function(){
	$('#query').val('');
	router.navigate('');
});

$(document).on('click', '.history-back-button', function(){
	
//	var lastURL = $(this).attr('href');
	//should be the same as history stack
	var url = historyStack[historyStack.length - 2];
	historyStack.splice(historyStack.length - 2, 2);

	if(url == '/') url = '';
	
	router.navigate(url);
	
//	window.history.back();
	
	return false;
});


var refreshLoginState = function() {
	
	//ping server to check if authenticated

	var currentLogin = vitalservice.getCurrentLogin();
	
	
	var loggedInVisbile = $('.logged-in-visbile');
	
	var loggedOutVisbile = $('.logged-out-visbile');

	if(currentLogin != null) {
		
		LOGGED_IN = true;
		
		$('.current-username').text(currentLogin.get('username'));
		
		loggedOutVisbile.hide();
		loggedInVisbile.show();
		
	} else {
		
		LOGGED_IN = false;
		
		$('.current-username').text('');
		loggedInVisbile.hide();
		loggedOutVisbile.show();
		
		
	}
	
};

function handleSearch(mainPanel, params, searchType) {
	
	mainPanel.empty();
	
	//bounce off
	if(!LOGGED_IN) {
		router.navigate('');
		return
	}
	
	var query = params.q ? decodeURIComponent(params.q) : null;
	
	var encodedURI = params.uri;
	var uri = params.uri ? decodeURIComponent(params.uri) : null;
	
	
	var limit = 10;
	
	var offset = 0;
	
	if(params.offset) {

		offset = parseInt(params.offset, 10);
		
	}
	
	mainPanel.empty();
	
	var escapedQuery = query ? query.replace(/\'/g, "\\'") : null;
	
	var queryBuilder = null;
	
	var resultsKey = searchType + '_';
	
	if(searchType == 'search') {
		
		//make sure the input field contains the input value
		$('#query').val(query);
		
		queryBuilder = JST['templates/search_query.hbs']({
			offset: offset,
			limit: limit,
			escapedQuery: escapedQuery
		}); 
		
		resultsKey += (escapedQuery + '_' + offset + '_' + limit);

	} else if(searchType == 'relatedwords') {
		
		queryBuilder = JST['templates/relatedwords_query.hbs']({
			offset: offset,
			limit: limit,
			URI: uri  
		});
		
		resultsKey += (uri + '_' + offset + '_' + limit);
			
	}
	
	
	var successHandler = function(resultsObj){
	
		putCachedResults(resultsKey, resultsObj);
		
		var mainObject = resultsObj.mainObject;
		var results = resultsObj.results;
		
		//console.log('query results', results);
	
		//render results now
		
		var res = [];
		
		for(var i = 0 ; i < results.results.length; i++) {
			
			var r = results.results[i].graphObject;
			
			res.push({index: (offset + i + 1),URI: r.URI, encodedURI: encodeURIComponent(r.URI), name: r.get('name'), score: results.results[i].score});
			
		}
		
		var total = results.totalResults;
		
		
		var firstIndex = offset + 1;
		
		var lastIndex = total != null ? Math.min(total, offset + limit) : Math.min(offset + results.results.length, offset+limit);
		
		if(lastIndex < firstIndex) lastIndex = offset + limit;
		
		var firstLink = null;
		
		var prevLink = null;
		
		var nextLink = null;
		
		var lastLink = null;
		
		var objectDetails = null;
		
		if(searchType == 'search') {
			
			if(offset > 0) {
				
				firstLink = $('<a>', {href: '/searchresults/' + query + '/' + 0, 'data-navigo': 'data-navigo'}).text('first');
				
				prevLink = $('<a>', {href: '/searchresults/' + query + '/' + (offset - limit), 'data-navigo': 'data-navigo'}).text('prev');
				
				
			} else {
			
				firstLink = $('<span>').text('first');
				
				prevLink = $('<span>').text('prev');
				
			}
			
			if(offset + limit < total) {
				
				nextLink = $('<a>', {href: '/searchresults/' + query + '/' + (offset + limit), 'data-navigo': 'data-navigo'}).text('next');
				
				
				//last offset
				var fullPages = Math.floor( total / limit );
				var mod = total % limit;
				if(mod > 0) fullPages ++;
				
				var lastOffset = ( fullPages -1 ) * limit;
				
				lastLink = $('<a>', {href: '/searchresults/' + query + '/' + lastOffset, 'data-navigo': 'data-navigo'}).text('last');
				
			} else {
				
				nextLink = $('<span>').text('next');
				
				lastLink = $('<span>').text('last');
			}
		} else {
			
			objectDetails = '<div><strong>' + mainObject.get('name') + '</strong> (<a href="/details/' + encodedURI + '" data-navigo>' + uri + '</a></div>';
			
			if(offset > 0) {
				
				firstLink = $('<a>', {href: '/relatedwords/' + encodedURI + '/' + 0, 'data-navigo': 'data-navigo'}).text('first');
				
				prevLink = $('<a>', {href: '/relatedwords/' + encodedURI + '/' + (offset - limit), 'data-navigo': 'data-navigo'}).text('prev');
				
				
			} else {
			
				firstLink = $('<span>').text('first');
				
				prevLink = $('<span>').text('prev');
				
			}
			
			if(results.results.length == limit) {
				
				nextLink = $('<a>', {href: '/relatedwords/' + encodedURI+ '/' + (offset + limit), 'data-navigo': 'data-navigo'}).text('next');
				
			} else {
				
				nextLink = $('<span>').text('next');
				
			}
			
			lastLink = $('<span>');
			
		}
		
		
		
		var ctx = {
				label: searchType == 'search' ? 'Search Results' : 'Related Words',
				objectDetails: objectDetails, 
				q: query, 
				total: total, 
				results: res, 
				firstLink: firstLink[0].outerHTML, 
				prevLink: prevLink[0].outerHTML, 
				nextLink: nextLink[0].outerHTML, 
				lastLink: lastLink[0].outerHTML,
				firstIndex: firstIndex,
				lastIndex: lastIndex,
				lastHistoryURL: ( historyStack.length > 1 ? historyStack[historyStack.length - 2] : null )
		};

		//console.log('ctx', ctx);
		
		var html = JST['templates/searchresultscontent.hbs'](ctx);
		
		//putCachedHtml(html);
		
		mainPanel.html( html );
		router.updatePageLinks();
		
	};
	
	var cachedResults = getCachedResults(resultsKey);
	
	if(cachedResults != null) {
		console.log("cached results found, key: " + resultsKey);
		successHandler(cachedResults);
		return;
	} else {
		console.log("no cached results, key: " + resultsKey);
	}

	
	var mainObject = null;
	
	var errorHandler = function(errorMsg){
		
		console.error(errorMsg);
		
		mainPanel.append($('<span>', {'class': 'text-danger'}).text(errorMsg));
		
	};
	
	
	if(searchType == 'search') {
		
		vitalservice.query(queryBuilder, function(seachResults){
			successHandler({mainObject: null, results: seachResults});
		}, errorHandler);
		
	} else {
		
		var uri = decodeURIComponent(params.uri);  
		
		//get object
		vitalservice.get({_type: 'ai.vital.vitalsigns.model.property.URIProperty', value: uri}, false, function(getResults){
			
			if(getResults.results.length == 0) {
				errorHandler("Graph object not found: " + uri);
				return;
			}
			
			var rootObj = getResults.results[0].graphObject;
			
			mainObject = rootObj;
			
			//graph query with results resolving
			vitalservice.graphQuery(queryBuilder, function(graphResults){
				
				var relatedResults = vitaljs.resultList();
				
				var urisSet = [];
				
				for(var i = 0 ; i < graphResults.results.length; i++) {
					
					//graph match
					var gm = graphResults.results[i].graphObject;
					
					if( gm.related1 != null ) {
						var uri = gm.related1.value;
						if(urisSet.indexOf(uri) < 0) {
							urisSet.push(uri);
							var n = gm[uri];
							if(n != null) {
								relatedResults.addResult(n);
							}
						}
					}
					
					if(gm.related2 != null) {
						var uri = gm.related2.value;
						if(urisSet.indexOf(uri) < 0) {
							urisSet.push(uri);
							var n = gm[uri];
							if(n != null) {
								relatedResults.addResult(n);
							}
						}
					}
					
				}
				
				successHandler({mainObject: mainObject, results: relatedResults});
				
			}, errorHandler);
			
			
		}, errorHandler);
		
		
	}
	
	
}

function handleDetails(mainPanel, params) {
	
	var encodedURI = params.uri;
	
	var uri = decodeURIComponent(encodedURI);
	
	var resultsKey = 'details_' + uri;
	
	var successHandler = function(results) {
		
		putCachedResults(resultsKey, results);
		
		var graphObject = null;
		
		if( results.results.length > 0 ) graphObject = results.results[0].graphObject;
		
		if(graphObject == null) {
			mainPanel.append($('<span>', {'class': 'text-danger'}).text('Object not found: ' + uri));
			return
		}
		
		var props = [
		   { label: 'URI', value: graphObject.URI},
		   { label: 'type', value: graphObject.type}
        ];
		
		var ctx = {};
		ctx.name = graphObject.get('name');
		ctx.URI = graphObject.URI;
		ctx.props = props;
		ctx.encodedURI = encodedURI;
		ctx.lastHistoryURL = historyStack.length > 1 ? historyStack[historyStack.length - 2] : null;
		
		var skip = ['get', 'set', 'types', 'type', 'URI'];
		
		for(var k in graphObject) {

			if(skip.indexOf(k) >= 0) continue;
			
			if(graphObject.hasOwnProperty(k)) {
				
				var val = graphObject[k];
				
				var l = vitaljs.getPropertyShortName(k);
				
				props.push({URI: k, label: l, value: '' +val});
				
			}
			
		}
//		<h3>Details of {{URI}}</h3>
//
//		<table>
//		{{#each props}}
//			<tbody>
//			<tr>
//			<td>{{label}} <span title="{{URI}}">[?]</span></td>
//			<td>{{value}}</td>
//		 	</tr>
//			</tbody>
//		{{/each}}}
//		</table>
		
		mainPanel.html( JST['templates/detailscontent.hbs'](ctx) );
		
		router.updatePageLinks();
		
	};
	

	var cachedResults = getCachedResults(resultsKey);
	
	if(cachedResults != null) {
		console.log("cached results found, key: " + resultsKey);
		successHandler(cachedResults);
		return;
	} else {
		console.log("no cached results, key: " + resultsKey);
	}

	vitalservice.get({_type: 'ai.vital.vitalsigns.model.property.URIProperty', value: uri}, false, successHandler, function(errorMsg){
		
		mainPanel.append($('<span>', {'class': 'text-danger'}).text(errorMsg));		
	});
	
	
}

