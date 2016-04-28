var APP_ID = 'alchemyapi-app';

var inputEl = null;

var processButton = null;

var clearButton = null;

var vitalservice = null;

var statusEl = null;

var quota = null;

var results = null;

$(function(){
	
	inputEl = $('#input-text');
	
	resetFormElement(inputEl);
	
	inputEl.attr('disabled', 'disabled');
	
	vitalservice = new VitalService('endpoint.' + APP_ID, null, function(){
		
		console.log('connected to endpoint');
		
		onServiceReady();
		
	}, function(err){
		alert('couln\'t connect to endpoint -' + err);
	});
	
});

function checkInput() {
	var text = inputEl.val();
	
	if(text == null || $.trim(text).length == 0) {
		processButton.attr('disabled', 'disabled');
		return;
	}
	
	processButton.removeAttr('disabled');
}

function onServiceReady() {
	
	inputEl.removeAttr('disabled');
	 
	refreshQuota();
	
	statusEl = $('#status');
	
	results = $('#results');
	 
	processButton = $('#process-button');
	processButton.attr('disabled', 'disabled');
	processButton.click(function(event){
		doProcess();
	});
	
	
	clearButton = new $('#clear-button');
	clearButton.click(function(event){
		inputEl.val('');
		checkInput();
	});
	
	quota = $('#quota');	

	inputEl.on('input propertychange', function(event){
		checkInput();
	});
	
}

function resetFormElement(e) {
	  e.wrap('<form>').closest('form').get(0).reset();
	  e.unwrap();
}


function doProcess() {

	processButton.attr('disabled', 'disabled');
	
	var text = inputEl.val();
	
	if(text == null || $.trim(text).length == 0) {
		alert("No text.");
		return;
	}
	
	inputEl.attr('disabled', 'disabled');
	
	statusEl.text('processing text ...');

	var params = {
		text: text
	};

	console.log("params ", params);

	vitalservice.callFunction('AlchemyAPI_ProcessText', params, function(res) {

		handleResults(res);
				
	}, function(error) {

		processButton.removeAttr('disabled');
		inputEl.removeAttr('disabled');

		alert("Processing error: " + error);

		statusEl.text('');

	});

}

function handleResults(res) {
	
	processButton.removeAttr('disabled');
	inputEl.removeAttr('disabled');
	
	console.log('last res', res);
	
	refreshQuota();
	
	statusEl.text('');
	
	results.empty();
	
	
	results.append($("<p>", {style: 'font-weight: bold;'}).text("Results"));
	
	var ul = $('<ol>');
	
	for( var i = 0 ; i < res.results.length; i++ ) {

		var catRE = res.results[i];
		var cat = catRE.graphObject;
		
		var catURI = null;
		
		try {
			catURI = cat.get('targetStringValue');
		} catch(e) {
		}
		
		if(catURI == null) continue;
		
		var score = cat.get('targetScore');
		
		var li = $('<li>');
		
		li.text(catURI + ' ' + cat.get('name') + ' ' + score);
		
		ul.append(li);
		
	}
	
	results.append(ul);
	
}


function refreshQuota() {
	
	vitalservice.callFunction('commons/scripts/Aspen_Usage', {action: 'getUsage',  key: 'alchemyapi'}, function(res){
		
		var v = 1000 - res.limit;
		if(v < 0) v = 0;
		quota.text(v);
		
	}, function(error){
		
		alert("Error when getting quota: " + error);
		
	});
	
}
