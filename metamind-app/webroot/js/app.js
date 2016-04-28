
var APP_ID = 'metamind-app';

var localPreview = null;

var noLocalPreview = null;

var inputEl = null;

var processButton = null;

var imageDetails = null;
var fileInfo = null;
var sizeInfo = null;

var vitalservice = null;

var SIZE_LIMIT_MB = 2;

var SIZE_LIMIT = SIZE_LIMIT_MB * 1024 * 1024;

var statusEl = null;

var selectedFile = null;

var quota = null;

var results = null;

var EVENTBUS_URL = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/metamind-app/eventbus';

//default - non prefixed
//var EVENTBUS_URL = null;

$(function(){
	
	if ( ! window.FileReader ) {
		alert("HTML5 FileReader API unavailable - app non-functional");
		return;
	}
	
	inputEl = $('#input-file');
	resetFormElement(inputEl);
	
	inputEl.attr('disabled', 'disabled');
	
	vitalservice = new VitalService('endpoint.' + APP_ID, EVENTBUS_URL, function(){
		
		console.log('connected to endpoint');
		
		onServiceReady();
		
	}, function(err){
		alert('couln\'t connect to endpoint -' + err);
	});
	
});

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
	
	localPreview = $('#local-preview');
	 
	noLocalPreview = $('#no-local-preview');

	imageDetails = $('#image-details');
	fileInfo = $('#file-info');
	sizeInfo = $('#size-info');
	
	quota = $('#quota');	
	 
	document.getElementById('input-file').addEventListener("change", function (evt) {
		 
		 console.log("files: ", this.files);
		 
		 var i = 0, len = this.files.length, img, reader, file;
		    
//		 document.getElementById("response").innerHTML = "Uploading . . ."
		    
		 for ( ; i < len; i++ ) {
			 file = this.files[i];
			  
			 if (!file.type.match(/image.*/)) {
				 resetFormElement(inputEl);
				 hidePreview();
				 alert('not an image - name: ' + file.name + " type: " + file.type);
				 return false;
			 }
			 
			 if(file.size > SIZE_LIMIT) {
				 resetFormElement(inputEl);
				 hidePreview();
				 alert("image file length exceeds the " + SIZE_LIMIT_MB + "MiB limit: " + file.size);
				 return false;
			 }
			 
			 var reader = new FileReader();
			 reader.onloadend = function (e) { 
				 showPreview(file, e.target.result);
			 };
			 reader.readAsDataURL(file);
			 
		 }
		 
		 return true;
		      
	 }, false);
	
}

function resetFormElement(e) {
	  e.wrap('<form>').closest('form').get(0).reset();
	  e.unwrap();
}


function showPreview(file, url) {
	selectedFile = file;
	noLocalPreview.hide();
	localPreview.attr('src', url);
	localPreview.show();
	sizeInfo.text('');
	fileInfo.text('file name: ' + file.name + "   type: " + file.type + "   length: " + file.size + " bytes")
	imageDetails.show();
	processButton.removeAttr('disabled');
	
	
	var newImg = new Image();
	
	newImg.onload = function() {
		
		var height = newImg.height;
		var width = newImg.width;
		
		sizeInfo.text("size: " + width + " x " + height);
		
	};
	
	newImg.src = url; // this must be done AFTER setting onload
	statusEl.text('');
	
}

function hidePreview() {
	selectedFile = null;
	localPreview.hide();
	fileInfo.text('');
	sizeInfo.text('');
	imageDetails.hide();
	localPreview.removeAttr('src');
	processButton.attr('disabled', 'disabled');
	noLocalPreview.show();
	statusEl.text('');
}


var part = 0
var partSize = 60000;
var totalParts = 0;
var content = null;
var id = null;

function doProcess() {

	processButton.attr('disabled', 'disabled');
	inputEl.attr('disabled', 'disabled');
	
	statusEl.text('processing image ...');
	
	content = localPreview.attr('src');
	
	part = 0

	id = VitalUtils.makeUUID();
	
	
	totalParts = Math.floor( content.length / partSize );
	
	if(content.length % partSize > 0) totalParts++;
	
	uploadNextPart(null);
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
		} catch(e) {}
		
		if(catURI == null) continue;
		
		var score = cat.get('targetScore');
		
		var li = $('<li>');
		
		li.text(catURI + ' ' + cat.get('name') + ' ' + score);
		
		ul.append(li);
		
	}
	
	results.append(ul);
	
}

function uploadNextPart(res) {
	
	if(part == totalParts) {
	
		handleResults(res);
		
		return;
		
	}
	
	part++;
	
	
	var start = ( part - 1 ) * partSize;
	var end = start + partSize;
	
	if(end > content.length) end = content.length;
	
	var c = content.substring(start, end);
	
	
	var params = {
		filename: selectedFile.name, 
		filetype: selectedFile.type, 
		id: id,
		part: part, 
		total: totalParts,
		content: c
	};
	
	console.log("uploading part " + part + ' of ' + totalParts + ', length: ' + c.length);
	console.log("params ", params);
	
	
	vitalservice.callFunction('MetaMind_ProcessImage', params, function(res){
		
		uploadNextPart(res);
		
	}, function(error){
		
		processButton.removeAttr('disabled');
		inputEl.removeAttr('disabled');
		
		alert("Processing error: " + error);
		
		statusEl.text('');
		
	});
	
	
	
}


function refreshQuota() {
	
	vitalservice.callFunction('commons/scripts/Aspen_Usage', {action: 'getUsage',  key: 'metamind'}, function(res){
		
		var v = 1000 - res.limit;
		if(v < 0) v = 0;
		quota.text(v);
		
	}, function(error){
		
		alert("Error when getting quota: " + error);
		
	});
	
//	<div>Quota: <span id="quota">-</span> requests left</div>
	
}

VitalUtils = {};

VitalUtils.makeUUID = function(){
	return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    	.replace(/[xy]/g,function(a,b){return b=Math.random()*16,(a=="y"?b&3|8:b|0).toString(16)})
}
