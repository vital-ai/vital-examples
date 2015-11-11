var vitalservice = null;

var searchResults = null;

var allPanels = null;

var offset = 0;

var limit = 10;

var searchValue = null;

var inputEls = null;

var detailsURI = null;

var detailsName = null;

var messagesType = null;


var searchPanel = null;
var searchLink = null;

$(function(){
	
	
	console.log("instantiating service...");
	
	var EVENTBUS_URL = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/enron-js-app/eventbus';
	
	vitalservice = new VitalService('endpoint.enron', EVENTBUS_URL, function(){
		
		console.log('connected to endpoint');
		
	}, function(err){
		alert('couln\'t connect to endpoint -' + err);
	});
	
	allPanels = $('.view-panel');
	
	allPanels.hide();
	
	
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
		
		offset = 0;
		searchValue = val;
		detailsURI = null;
		messagesType = null;
		
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
	
	allPanels.hide();
	
	searchResults.empty();
	
	searchResults.show();
	
	if(searchValue.length == 0) {
		return;
	}

	searchResults.text("Searching ...");
	
	inputEls.prop('disabled', true);
	
	vitalservice.callFunction('enron-do-search', {query: searchValue, offset: offset, limit: limit}, function(results){
		
		inputEls.prop('disabled', false);
		
		handleSearchResults(results);
		
	}, function(errorResponse){
		
		inputEls.prop('disabled', false);
		
		searchResults.empty();
		
		//alert("error: " + errorResponse);
		searchResults.append('<h4 style="color:red;">' + "error: " + errorResponse + '</h4>');
		
	});
	
	
}

function doGetMessages() {
	
	hideSearchPanel();
	
	allPanels.hide();
	
	searchResults.empty();
	
	searchResults.show();
	
	searchResults.text("Getting messages ...");
	
	vitalservice.callFunction('enron-get-messages', {URI: detailsURI, mailbox: messagesType, offset: offset, limit: limit}, function(results){
		
		handleSearchResults(results);
		
	}, function(errorResponse){
		
		searchResults.empty();
		
		//alert("error: " + errorResponse);
		
		searchResults.append('<h4 style="color:red;">' + "error: " + errorResponse + '</h4>');
		
	});
}


function handleSearchResults(resultsList) {
	
	searchResults.empty();
	
	if(searchValue != null) {
		searchResults.append($('<h4>').text("Search results, query: '" + searchValue + "'"));
	} else {
		searchResults.append($('<h4>').text(
			"User " + detailsName + ", " +
				(messagesType == 'inbox' ? "Messages received" : "Messages sent")
	));
	}
	
	
	searchResults.append($('<p>').text('Displaying results ' + (offset + 1) + ' - ' + (offset + limit)));
	
	var table = $('<table>');
	
	table.append(
		$('<thead>')
			.append($('<tr>')
				.append($('<th>').html('&nbsp;'))
				.append($('<th>').html('Date'))
				.append($('<th>').text('Subject'))
				.append($('<th>').text('Body (first 200 chars)'))
				.append($('<th>').html('&nbsp;'))
		)
	);		
	
	var index = 0;
	
	var initialOffset = offset;
	
	for( var i = 0; i < resultsList.results.length; i++ ) {
		
		var res = resultsList.results[i].graphObject;
		
		var type = res.type;
		
		if(type == 'http://vital.ai/ontology/enron-dataset#EnronEmail') {
			
//		} else if(type == 'http://vital.ai/ontology/enron-dataset#EnronPerson') {
			
		} else {
//			alert("Unexpected type: " + type);
			continue;
		}
		
		var row = $('<tr>');
		
		row.append($('<td>').text((initialOffset + (index+1) ) + "."));
		
		index++;
		
		row.append($('<td>').text(format_date(new Date(res.publicationDate))));
		
		row.append($('<td>').text(res.emailSubject))
		
		var body = res.body
		if(body == null) body = '(no body)';
		if(body.length > 200) body = body.substring(0, 200) + '...';
		row.append($('<td>').text( body ));
//		row.append($('<td>').append( $('<pre>').text( body )) );
		
		
		var detailsLink = $('<a>', {href: '#', 'data-uri': res.URI}).text('details');
		
		detailsLink.click(function(){
			
			var link = $(this);
			
			detailsURI = link.attr('data-uri');
			
			doDetails();
			
			return false;
			
		});
		
		row.append($('<td>').append(detailsLink));
		
		table.append(row);
		
	}
	
	var hasMoreResults = index >= limit;
	
	searchResults.append(table);
	
	
	//prepare buttons
	
	var paginator = $('<p>', {style: 'text-align: center;'});
	
	
	var firstButton = null;
	
	if(offset > 0) {
		firstButton = $('<a>', {href: '#'}).text('First');
		firstButton.click(function(){
			offset = 0;
			refreshList();
			return false;
		});
	} else {
		firstButton = $('<spana>').text('First');
	}
	paginator.append(firstButton);
	
	
	
	var previousB = null;
	if(offset > 0) {
		previousB = $('<a>', {href: '#'}).text('Previous');
		previousB.click(function(){
			offset = offset - limit;
			refreshList();
			return false;
		});
	} else {
		previousB = $('<span>').text('Previous');
	}
	paginator.append($('<span>').html(' &nbsp; '));
	paginator.append(previousB);
	
	
	
	var nextB = null;
	if(hasMoreResults) {
		nextB = $('<a>', {href: '#'}).text('Next');
		nextB.click(function(){
			offset = offset + limit;
			refreshList();
			return false;
		});
	} else {
		nextB = $('<span>').text('Next');
	}
	paginator.append($('<span>').html(' &nbsp; '));
	paginator.append(nextB);
	
	searchResults.append(paginator);
	
}

function refreshList() {
	if(detailsURI != null) {
		doGetMessages();
	} else {
		doSearch();
	}
}

function doDetails() {

	hideSearchPanel();
	
	allPanels.hide();
	
	searchResults.empty();
	
	searchResults.text("Getting details of " + detailsURI);
	
	searchResults.show();

	vitalservice.callFunction('enron-get-details', {URI: detailsURI}, function(results){
		
		handleDetails(results);
		
	}, function(errorResponse){

		searchResults.empty();
		
		//alert("error: " + errorResponse);
		searchResults.append('<h4 style="color:red;">' + "error: " + errorResponse + '</h4>');
		
	});
	
}

function format_date(date) {
	
	var hs = date.getHours();
	
	var amNotPm = hs < 12;
	
	var m = '' + date.getMinutes();
	
	if(m.length < 2) m = '0' + m;
	
	var h = '' + ( hs == 0 ? 12 : ( hs > 12 ? hs -12 : hs) );
	
	return '' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + h +':' + m + (amNotPm ? 'am' : 'pm');
	
	
}

function handleDetails(detailsReponse) {
	
	searchResults.empty();
	
	//put objects into map
	var objectsMap = {};
	
	for(var i = 0 ; i < detailsReponse.results.length; i++) {
		
		var g = detailsReponse.results[i].graphObject
		objectsMap[g.URI] = g;
		
	}
	
	console.log('objects map: ', objectsMap);
	
	searchResults.append($('<h4>').text('Details of ' + detailsURI));
	
	var mainObject = objectsMap[detailsURI]
	
	if(mainObject == null) { alert("No object in results map: " + detailsURI); return; }
	
	if(mainObject.type == 'http://vital.ai/ontology/enron-dataset#EnronEmail') {
		
		searchResults.append($('<p>').text('Type: E-mail'));
		
		searchResults.append($('<p>').text('Message ID: ' + mainObject.name));
		
		var senders = [];
		
		var recipients = [];
		
		for (var uri in objectsMap) {
			
			var g = objectsMap[uri];
			
			if(g.type == 'http://vital.ai/ontology/enron-dataset#Edge_hasSender') {
				
				var senderURI = g.edgeDestination;
				
				var sender = objectsMap[senderURI];
				
				if(sender != null) senders.push(sender);
				
			} else if(g.type == 'http://vital.ai/ontology/enron-dataset#Edge_hasDirectRecipient') {
				
				var recipientURI = g.edgeDestination;
				
				var recipient = objectsMap[recipientURI];
				
				if(recipient !=null) recipients.push(recipient);
				
			}
			
		}
		
		
		if(senders.length > 0) {
			
			var senderP = $('<p>').text('Sender:');

			for(var j = 0 ; j < senders.length; j++) {
				
				var sender = senders[j];
				
				senderP.append($('<span>').text(' '));
				
				senderP.append($('<a>', {href: '#', 'class': 'details-link', 'data-uri': sender.URI}).text(sender.emailAddress));
				
			}
			
			searchResults.append(senderP);
		}
		
		if(recipients.length > 0) {
			
			var recipientP = $('<p>').text('Recipient:');
			
			for(var j = 0; j < recipients.length; j++) {
				
				var recipient = recipients[j];
				
				recipientP.append($('<span>').text(' '));
				
				recipientP.append($('<a>', {href: '#', 'class': 'details-link', 'data-uri': recipient.URI}).text(recipient.emailAddress));
				
			}
			
			searchResults.append(recipientP);
		
		}
		
		
		
		
		var dateString = format_date( new Date(mainObject.publicationDate) );
		
		searchResults.append($('<p>').text('Date: ' + dateString));
		
		searchResults.append($('<p>').text('Subject: ' + mainObject.emailSubject));
		
		searchResults.append($('<p>').text('Body:'));
		
//		searchResults.append($('<p>').text( mainObject.body ));
		
		searchResults.append($('<p>').append( $('<pre>').text( mainObject.body )) );
		
	} else if(mainObject.type == 'http://vital.ai/ontology/enron-dataset#EnronPerson') {
		
		searchResults.append($('<p>').text('Type: Person'));
		
		searchResults.append($('<p>').text('E-mail: ' + mainObject.emailAddress));
		
		
		var inboxLink = $('<a>', {href: '#', 'class': 'messages-link', 'data-uri': mainObject.URI, 'data-type': 'inbox'}).text('Inbox');
		
		var outboxLink = $('<a>', {href: '#', 'class': 'messages-link', 'data-uri': mainObject.URI, 'data-type': 'outbox'}).text('Outbox');
		
		searchResults.append($('<p>').append(inboxLink).append($('<span>').html(' &nbsp; &nbsp; &nbsp; ')).append(outboxLink));
		
		detailsName = mainObject.name;
		
		searchResults.find('.messages-link').click(function(){
			
			var link = $(this);
			
			detailsURI = link.attr('data-uri');

			messagesType = link.attr('data-type');
			
			offset = 0;

			searchValue = null;
			
			doGetMessages();
			
			return false;
			
		});
		
	} else {
		alert("unexpected object type: " + mainObject.type);
		return;
	}
	
	
	searchResults.find('.details-link').click(function(){
		
		var link = $(this);
		
		detailsURI = link.attr('data-uri');
		
		doDetails()
		
		return false;
		
	});
	
	
}

function formatText(input) {
	return input.replace("\n", "<br/>");
}