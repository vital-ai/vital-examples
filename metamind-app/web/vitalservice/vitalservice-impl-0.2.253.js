/**
 * Websocket based implementation
 * @param address - vitalservice eventbus address, 'vitalservice' in most cases
 * @param eventBusURL - if null then current window url protocol://host:port/eventbus will be used 
 * @param successCB
 * @param errorCB
 * @returns
 */
VitalServiceWebsocketImpl = function(address, eventBusURL, successCB, errorCB) {
	
	//there's always a new session generated, it could be cached in localstorage/cookie etc
	this.sessionID = UUIDGenerator.generate();
	
	console.log('sessionID: ' + this.sessionID);

	this.address = address;
	
	this.vsJson = null;
	
	
	//single use callbacks
	this.sH = successCB;
	this.eH = errorCB;
	
	if(eventBusURL != null) {
		this.url = eventBusURL
	} else {
		this.url = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus';
	}
	
	console.log("eventbus url", this.url);
	
	this.windowKilled = false;
	
	this.recTimeout = null;
	
	
	this.eb = null;
	
	if(typeof( VitalServiceJson ) != 'undefined') {
		console.log("loading optional json validation module...");
		
		this.vsJson = new VitalServiceJson();
		
	} else {
		
		alert("VitalServiceJson module not available, it's mandatory.");
//		console.warn("VitalServiceJson module not available, validation disabled.");
	}
	

	this.registeredHandlers = {};

	this.currentHandlers = {};
	
	this.eventbusListenerActive = false;
	this.eventbusHandler = null;
	
	var _this = this;
	if(vertx == null || vertx.EventBus == null) {
		throw 'vertx.EventBus module not loaded!' 
	}
	
    $(window).bind('beforeunload', function(){
    	_this.windowKilled = true;
    });

    this.newConn()
    
}

VitalServiceWebsocketImpl.prototype.newConn = function() {
    	
	var _this = this;
    var options = {};
    
    /*
    if(configService.protocols_whitelist != null && configService.protocols_whitelist.length > 0 ) {
    		
    		var s = ''
    			
    		configService.protocols_whitelist.splice(0, 2);
    			
    		for(var v = 0; v < configService.protocols_whitelist.length; v++) {
    			if(s.length > 0) s+= ', ';
    			s += configService.protocols_whitelist[v];
    		}
    		
    		
    		
    		alert("Protocols: wl: " + s);
    		
    	options.protocols_whitelist = configService.protocols_whitelist;
    }
    */

    if(this.eb != null) {
    	console.log("closing existing evenbus connection")
    	try {
    		this.eb.close();
    	} catch(e) {
    		console.error('error when closing existing websocket', e);
    	}
    }
    
    this.eb = new vertx.EventBus(this.url, options);
    this.eb.onopen = function() {

    	if(_this.recTimeout != null) {
    			
   			clearTimeout(_this.recTimeout);
   			_this.recTimeout = null;
    			
   		}
    		
    	
    	var currentKeys = [];
    	
    	for ( var key in _this.currentHandlers ) {
    		currentKeys.push(key);
    	}
    	
    	if(currentKeys.length > 0) {
    		
    		console.log('refreshing session handlers: ', currentKeys);
    		
    		//re-register it ?
    		_this.callMethod('callFunction', [VitalService.VERTX_STREAM_SUBSCRIBE, {streamNames: currentKeys, sessionID: _this.sessionID}], function(successRL){
    			
    			if(!_this.eventbusListenerActive) {
    				
    				_this.eventbusHandler = _this.createNewHandler();
    				_this.eb.registerHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
    				_this.eventbusListenerActive = true;
    				
    			}
    			
    			
    		}, function(errorResponse){
    			console.error(errorResponse);
    		});
    			
    	}
    		
    		
    	if(_this.windowKilled) {
    		console.error("sockjstransport, opened - but window killed!");
    		return;
    	}
    		
    	console.log('sockjstransport, transport ready');
    		
    	if(_this.sH != null) {
    		_this.sH();
    		_this.sH = null;
    	}
    	
    	_this.eH = null;
    		
    		
    };
    	
    this.eb.onclose = function() {

    	console.warn('sockjstransport, transport closed, ');

    	if(_this.recTimeout != null) {
    		clearTimeout(_this.recTimeout);
    		_this.recTimeout = null;
    	}
    		
    	if(_this.eH != null) {
    		_this.eH('e');
    	}
    	_this.eH = null;
    		
    	if(_this.windowKilled) {
    		console.warn("window killed, don't show popup, or try to reconnect");
    		return
    	}
    	
    	_this.eventbusListenerActive = false;
    		
   		_this.recTimeout = setTimeout(function () {
   			_this.newConn();
   		}, 3000);
   		
    };
    	
}
	
	
/**
 * Calls the service method, all input parameters are validated against json schema - same 
 */
VitalServiceWebsocketImpl.prototype.callMethod = function(method, args, successCB, errorCB) {
	
	console.log("service call " + method + " args:", args)
	
	if(typeof(successCB) != "function") {
		alert("method: " + method + " - Success callback not a function, arguments list invalid");
		return
	}
	
	if(typeof(errorCB) != "function") {
		alert("method: " + method + " - Error callback not a function, arguments list invalid");
		return
	}
	
	var data = {
		method: method,
		args: args
	};
	
	var _this = this;
	
	this.eb.send(this.address, data, function(result) {
		
		console.log(method + ' result: ', result);
		
		//check the status, then object
		
		if(result.status == 'ok') {
			
			//validate response
			
			var response = result.response;
			
			if(response != null) {
				
				//check response type
				if(_this.vsJson != null) {
					var validationError = _this.vsJson.validateResponse(response);
					
					if(validationError != null) {
						errorCB(validationError);
						return;
						
					}
					
				} else {
					
					errorCB("No VitalServiceJson module loaded - it's mandatory.");
					return;
					
				}
				
			}
			
			successCB(result.response);
			
		} else {
			
			errorCB(result.message)
			
		}
		
	});
	
}

VitalServiceWebsocketImpl.prototype.listStreamHandlers = function(paramsMap, successCB, errorCB) {
	
	var results = [];
	
	for(var key in this.registeredHandlers) {
		
		results.push({
			type: 'ResultElement',
			score: 1.0,
			graphObject: {
				URI: 'handler:' + key,
				active: this.currentHandlers[key] != null,
				type: 'http://vital.ai/ontology/vital-core#VITAL_Node',
				name: key
			}
		});
		
	}
	
	
	var res = {
		type: 'ResultList',
		results: results
	};
	
	var errorMsg = this.vsJson.validateResponse(res);
	
	if(errorMsg != null) {
		errorCB(errorMsg);
		return;
	}
	
	successCB(res);
	
	
}

VitalServiceWebsocketImpl.prototype.registerStreamHandler = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	
	var handlerFunction = paramsMap.handlerFunction;
	
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	if(handlerFunction == null) {
		errorCB("No 'handlerFunction' param");
		return;
	}
	
	if( typeof(handlerFunction) != 'function') {
		errorCB("handlerFunction must be a function");
		return;
	}
	
	
	if( this.registeredHandlers[streamName] != null ) {
		errorCB("Handler for stream " + streamName + " already registered.");
		return;
	}
	
	this.registeredHandlers[streamName] = handlerFunction;
	
	successCB({
		type: 'ResultList',
		status: {
			type: 'VitalStatus',
			status: 'ok',
			message: 'Handler for stream ' + streamName + ' registered successfully'
		}
	});
	
}



VitalServiceWebsocketImpl.prototype.unregisterStreamHandler = function(paramsMap, successCB, errorCB) {
	
	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var currentHandler = this.registeredHandlers[streamName];
	
	if(currentHandler == null) {
		errorCB("No handler for stream " + streamName + " registered");
		return;
	}
	
	if(this.currentHandlers[streamName] != null) {
		errorCB("Handler in use " + streamName);
		return;
	}
	
	
	delete this.registeredHandlers[streamName];
	
	successCB({
		type: 'ResultList',
		status: {
			type: 'VitalStatus',
			status: 'ok',
			message: 'Handler for stream ' + streamName + ' unregistered successfully'
		}
	});
	
}

VitalServiceWebsocketImpl.prototype.streamSubscribe = function(paramsMap, successCB, errorCB) {
	
	//first check if we are able to
	
	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var currentHandler = this.registeredHandlers[streamName];
	
	if(currentHandler == null) {
		errorCB("No handler for stream " + streamName + " registered");
		return;
	}
	
	var activeHandler = this.currentHandlers[streamName]
	
	if(activeHandler != null) {
		errorCB("Handler for stream " + streamName + " already subscribed");
		return;
	}
	
	
	//first call the server side, on success register
	
	var _this = this;
	
	this.callMethod('callFunction', [VitalService.VERTX_STREAM_SUBSCRIBE, {streamNames: [streamName], sessionID: _this.sessionID}], function(successRL){
		
		if(!_this.eventbusListenerActive) {
			
			_this.eventbusHandler = _this.createNewHandler();
			_this.eb.registerHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
			_this.eventbusListenerActive = true;
		}
		
		
		_this.currentHandlers[streamName] = currentHandler;
		
		successCB({
			type: 'ResultList',
			status: {
				type: 'VitalStatus',
				status: 'ok',
				message: 'Successfully Subscribe to stream ' + streamName
			}
		});
		
	}, function(errorResponse){
		errorCB(errorResponse);
	});
	
	
}


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

VitalServiceWebsocketImpl.prototype.streamUnsubscribe = function(paramsMap, successCB, errorCB) {

	var streamName = paramsMap.streamName;
	if(streamName == null) {
		errorCB("No 'streamName' param");
		return;
	}
	
	var activeHandler = this.currentHandlers[streamName]
	
	if( activeHandler == null ) {
		errorCB("No handler subscribed to stream " + streamName);
		return;
	}
	
	var _this = this;
	
	this.callMethod('callFunction', [VitalService.VERTX_STREAM_UNSUBSCRIBE, {streamNames: [streamName], sessionID: _this.sessionID}], function(successRL){
		
		delete _this.currentHandlers[streamName];

		if(Object.size( _this.currentHandlers) < 1) {
			_this.eb.unregisterHandler('stream.'+ _this.sessionID, _this.eventbusHandler);
			_this.eventbusListenerActive = false;
		}
		
		successCB({
			type: 'ResultList',
			status: {
				type: 'VitalStatus',
				status: 'ok',
				message: 'Successfully unsubscribe from stream ' + streamName
			}
		});
		
	}, function(errorResponse){
		errorCB(errorResponse);
	});
	
}


VitalServiceWebsocketImpl.prototype.createNewHandler = function() {
	
	var _this = this;
	
	var wrapperHandler = function(json) {
		
		if(json.type != 'ResultList' ) {
			alert("only ResultList messages accepted");
			return
		}
		
		var stream = json.streamName;
		
		if(stream == null) {
			alert('No streamName property in json message');
			return;
		}
		
		
		var handlerFunction = _this.currentHandlers[stream];
		
		if(handlerFunction == null) {
			console.warn("Received a message for nonexisting stream handler: " + stream)
			return;
		}
		
		//check response type
		if(_this.vsJson != null) {
			var validationError = _this.vsJson.validateResponse(json);
				
			if(validationError != null) {
				console.error("Async message json validation failed: ", validationError);
				return;
			}
			
			handlerFunction(json);
				
		} else {
				
			alert("No VitalServiceJson module loaded - cannot parse async message.");
			return;
				
		}
			
	};
	
	return wrapperHandler;
	
}

UUIDGenerator = {};

UUIDGenerator.generate = function() {
	
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
	
}