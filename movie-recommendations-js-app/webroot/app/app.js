var APP_ID = 'movie-recommendations-js-app';

var vitalservice = null;

var searchResults = null;

var inputEls = null;

var searchPanel = null;

var searchLink = null;

var userID = null;

var ratedPanel = null;

var recommendedPanel = null;

var EVENTBUS_URL = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/movie-recommendations-js-app/eventbus';

//default - non prefixed
//var EVENTBUS_URL = null;

$(function(){
	
	inputEls = $('.search-active');
	
	inputEls.prop('disabled', true);
	
	console.log("instantiating service...");
	
	vitalservice = new VitalService('endpoint.' + APP_ID, EVENTBUS_URL, function(){
		
		console.log('connected to endpoint');
		
		//in statically loaded domain mode the steps below are not needed
		onVitalServiceReady();
		return;
		
		/*
		//get json schemas list
		console.log('getting available domains list')
		vitalservice.getSchemaList(function(schemasList){
			
			console.log("schemas list obtained", schemasList);
			
			for(var i = 0 ; i < schemasList.length; i++) {
				
				var schema = schemasList[i];
				
				if(schema.name == 'movielens-1.0.0.js') {
					
					onSchemaObtained(schema);
					return;
					
				}
				
			}
			
			alert("Schema not found: " + 'movielens-1.0.0.js');
			
		}, function(err){
			alert("Error when getting domains list: " + err);
		});
		
		*/
		
	}, function(err){
		alert('couln\'t connect to endpoint -' + err);
	});
	
});

function onSchemaObtained(schema) {

	vitalservice.getDependenciesOfSchema(schema.name, true, function(dependenciesList){
		
		console.log("movielens dependencies", dependenciesList);
		
		var schemaNamesArray = [];
		
		//push schema and load it that order
		for(var i = 0 ; i < dependenciesList.length; i++) {
			schemaNamesArray.push(dependenciesList[i]);
		}
		
		schemaNamesArray.push(schema.name);
		
		vitalservice.getSchemas(schemaNamesArray, function(schemaObjectsArray){
			
			console.log("schema objects ready", schemaObjectsArray);
			
			vitalservice.loadSchemas(schemaObjectsArray, function(){
				console.log("schemas loaded");
				onVitalServiceReady();
			}, function(err){
				alert('error when loading json schemas - ' + err);
			});
			
		}, function(err){
			alert('error getting json objects - ' + err);
		});
		
	}, function(err){
		alert('error when checking domain dependencies -' + err);
	});
	
}

function onVitalServiceReady() {
	
	inputEls.prop('disabled', false);
	
	var searchB = $('#search-button');
	var inputEl = $('#search-input');
	
	inputEl.val('').keypress(function(e) {
	    if(e.which == 13) {
	    	searchB.click();
	    }
	});
	
	searchResults = $('#search-results');
	
	searchB.click(function(){
		
		var val = $.trim(inputEl.val());
		
		if(isNaN(val)) {
			alert("Not a number");
			return
		}
		
		userID = parseInt(val);
		
//		if(isNaN(us)s)
		
		doSearch();

	});
	
	
	searchPanel = $('#search-panel');
	
	searchLink = $('#search-link');
	
	searchLink.find('a').click(function(){
		showSearchPanel();
		searchResults.empty();
		return false;
	})

	
}

function showSearchPanel() {
	
	searchLink.hide();
	
	searchPanel.show();
	
}

function hideSearchPanel() {
	
	searchPanel.hide();
	
	searchLink.show();
	
}

function doSearch() {
	
	searchResults.empty();
	
	searchResults.show();
	
	searchResults.text("Searching ...");
	
	inputEls.prop('disabled', true);
	
	vitalservice.callFunction('movielens-get-user', {userID: userID}, function(results){
		
		inputEls.prop('disabled', false);
		
		handleSearchResults(results);
		
	}, function(errorResponse){
		
		inputEls.prop('disabled', false);
		
		searchResults.empty();
		
		searchResults.append($('<p>', {style: 'color:red;'}).text(errorResponse));
		
	});
	
	
}

function handleSearchResults(resultsList) {
	
	searchResults.empty();
	
	//just get the user
	var user = resultsList.results[0].graphObject;
	
	searchResults.append($('<h4>').text(user.get('name')));
	
	searchResults.append($('<p>').text('URI: ' + user.URI));
	
	ratedPanel = $('<div>', {style: 'float:left; width: 49%'})
	.append($('<h4>').text('Rated movies'));
	
	recommendedPanel = 	$('<div>', {style: 'float:right; width: 49%'})
	.append($('<h4>').text('Recommended movies'));
	
	var div = $('<div>');
	
	div.append(
		ratedPanel.append($('<p>', {'class': 'loading-msg'}).text('loading movies...'))
	).append(
		recommendedPanel.append($('<p>', {'class': 'loading-msg'}).text('loading movies...'))
	).append(
		$('<div>', {style: 'clear: both;'})
	);

	searchResults.append(div);
	
	
	vitalservice.callFunction('movielens-get-rated-movies', {userURI: user.URI, limit: 10}, function(results){
		
		var table = renderMoviesTable(results, true);
		
		ratedPanel.find('.loading-msg').remove();
		
		ratedPanel.append(table);
		
	}, function(errorResponse){
		
		inputEls.prop('disabled', false);

		ratedPanel.find('.loading-msg').remove();
		
		ratedPanel.append($('<p>', {style: 'color:red;'}).text(errorResponse));
		
	});
	
	
	vitalservice.callFunction('movielens-get-recommended-movies', {userURI: user.URI, limit: 10}, function(results){
		
		var table = renderMoviesTable(results, false);
		
		recommendedPanel.find('.loading-msg').remove();
		
		recommendedPanel.append(table);
		
	}, function(errorResponse){
		
		inputEls.prop('disabled', false);
		
		recommendedPanel.find('.loading-msg').remove();
		
		recommendedPanel.append($('<p>', {style: 'color:red;'}).text(errorResponse));
		
	});

	
}

function renderMoviesTable(resultsList, ratingNotScore) {
	
	var t = $('<table>').append(
		$('<tr>').append(
			$('<th>').html('&nbsp;')
		).append(
			$('<th>').text('Title')
		).append(
			$('<th>').text(ratingNotScore ? 'Rating' : 'Score')
		)
	);
	
	if(resultsList.results.length == 0) {
		t.append($('<tr>')
			.append($('<td>', {colspan: '3', style: 'text-align: center'}).text('( no movies )'))
		);
	}
	
	for(var i = 0 ; i < resultsList.results.length; i++) {
	
		var movie = resultsList.results[i].graphObject;
		var score = resultsList.results[i].score;
		
		var tr = $('<tr>', {'data-uri': movie.URI})
			.append($('<td>').text( '' + (i+1) + '.' ))
			.append($('<td>').text( movie.get('name') ))
			.append($('<td>').text( '' + score ));
		
		t.append(tr);
		
	}
	
	return t;
	
}

function format_date(date) {
	
	var hs = date.getHours();
	
	var amNotPm = hs < 12;
	
	var m = '' + date.getMinutes();
	
	if(m.length < 2) m = '0' + m;
	
	var h = '' + ( hs == 0 ? 12 : ( hs > 12 ? hs -12 : hs) );
	
	return '' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + h +':' + m + (amNotPm ? 'am' : 'pm');
	
	
}
