var vitalservice = null;

var searchResults = null;

var inputEls = null;

var searchPanel = null;

var searchLink = null;

var userID = null;

var ratedPanel = null;

var recommendedPanel = null;

$(function(){
	
	
	console.log("instantiating service...");
	
	vitalservice = new VitalService(function(){
		
		console.log('connected to endpoint');
		
	}, function(err){
		alert('couln\'t connect to endpoint -' + err);
	});
	
	
	inputEls = $('.search-active');
	
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

	
});

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
	
	searchResults.append($('<h4>').text(user.name));
	
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
			.append($('<td>').text( movie.name ))
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
