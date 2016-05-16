/**
 * VitalService javascript interface
 * @param address - vitalservice eventbus address, 'vitalserviceadmin' in most cases
 * @param eventBusURL - if null then current window url protocol://host:port/eventbus will be used 
 * @param successCB
 * @param errorCB
 */
VitalServiceAdmin = function(address, eventbusURL, successCB, errorCB) {
	
	//the vitalservice is initialized asynchronously
	this.impl = new VitalServiceWebsocketImpl(address, 'admin', eventbusURL, successCB, errorCB);
	
	this.NO_TRANSACTION = null;
	
}


VitalServiceAdmin.JS_REGISTER_STREAM_HANDLER = 'js-register-stream-handler';

VitalServiceAdmin.JS_UNREGISTER_STREAM_HANDLER = 'js-unregister-stream-handler';

VitalServiceAdmin.JS_LIST_STREAM_HANDLERS = 'js-list-stream-handlers';


VitalServiceAdmin.VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe';

VitalServiceAdmin.VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe';


//non - api

/**
 * returns currently logged in user or null
 */
VitalServiceAdmin.prototype.getCurrentLogin = function() {
	return this.impl.login;
}

/**
 * returns current session ID or null if not authenticated 
 */
VitalServiceAdmin.prototype.getSessionID = function() {
	return this.impl.appSessionID;
}


/**
 * Adds app
 * returns VitalStatus
 */
VitalServiceAdmin.prototype.addApp = function(app, successCB, errorCB) {
	this.impl.callMethod('addApp', [app], successCB, errorCB);
}


VitalServiceAdmin.prototype.addDatabaseConnection = function(app, databaseConnection, successCB, errorCB) {
	this.impl.callMethod('addDatabaseConnection', [app, databaseConnection], successCB, errorCB);
}

/**
 * Adds segment
 * returns segment
 */
VitalServiceAdmin.prototype.addSegment = function(app, segment, provisioning, createIfNotExists, successCB, errorCB) {
	this.impl.callMethod('addSegment', [app, segment, provisioning, createIfNotExists], successCB, errorCB);
}

/**
 * Adds segment
 * returns segment
 */
VitalServiceAdmin.prototype.addSegment = function(app, segment, createIfNotExists, successCB, errorCB) {
	this.impl.callMethod('addSegment', [app, segment, null, createIfNotExists], successCB, errorCB);
}


VitalServiceAdmin.prototype.addVitalServiceKey = function(app, vitalServiceKey, successCB, errorCB) {
	this.impl.callMethod('addVitalServiceKey', [app, vitalServiceKey], successCB, errorCB);
}

//bulkExport(VitalSegment, OutputStream)
//bulkImport(VitalSegment, InputStream)

/**
* Calls datascript with name and params
* returns ResultList
*/
VitalServiceAdmin.prototype.callFunction = function(app,functionName, paramsMap, successCB, errorCB) {
	
	if(functionName == VitalServiceAdmin.JS_LIST_STREAM_HANDLERS) {
		
		//list handlers
		this.impl.listStreamHandlers(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalServiceAdmin.JS_REGISTER_STREAM_HANDLER) {
		
		this.impl.registerStreamHandler(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalServiceAdmin.JS_UNREGISTER_STREAM_HANDLER) {
		
		this.impl.unregisterStreamHandler(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalServiceAdmin.VERTX_STREAM_SUBSCRIBE) {
		
		this.impl.streamSubscribe(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalServiceAdmin.VERTX_STREAM_UNSUBSCRIBE) {
		
		this.impl.streamUnsubscribe(paramsMap, successCB, errorCB);
		return;
		
	}
	
	this.impl.callMethod('callFunction', [app, functionName, paramsMap], successCB, errorCB);
}

//close()


VitalServiceAdmin.prototype.commitTransaction = function(transaction, successCB, errorCB) {
	this.impl.callMethod('commitTransaction', [transaction], successCB, errorCB);
}

VitalServiceAdmin.prototype.createTransaction = function(successCB, errorCB) {
	this.impl.callMethod('createTransaction', [], successCB, errorCB);
}


/**
* Deletes a single URIProperty or List of URIProperty objects, arguments:
* app, URIPropertyOrList, successCB, errorCB
* VitalTransaction, app, URIPropertyOrList, successCB, errorCB
* 
*/
VitalServiceAdmin.prototype.delete_ = function() {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		console.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var app = arguments[l - 4];
	var URIPropertyOrList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	this.impl.callMethod('delete', [VitalTransaction, app, URIPropertyOrList], successCB, errorCB);
}

/**
* Deletes expanded single URIProperty or List of URIProperty objects, arguments:
* app, URIPropertyorList, successCB, errorCB (4 args)
* VitalTransaction, app, URIPropertyorList, successCB, errorCB (5 args)
* app, URIPropertyorList, vitalPathQueryString, successCB, errorCB (5 args)
* VitalTransaction, app, URIPropertyorList, vitalPathQueryString, successCB, errorCB (6 args)
*/
VitalServiceAdmin.prototype.deleteExpanded = function() {
	
	var l = arguments.length;
	if(l < 4 || l > 6) {
		console.error("Expected 4 to 6 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var app = null;
	var vitalPathQueryString = null;
	var URIPropertyorList = null;
	if(l == 6) {
		VitalTransaction = arguments[0];
		app = arguments[1];
		URIPropertyorList = arguments[2];
		vitalPathQueryString = arguments[3];
	} else if(l == 5) {
		//check type of a[2]
		if(typeof(arguments[2]) == 'string') {
			app = arguments[0];
			URIPropertyorList = arguments[1];
			vitalPathQueryString = arguments[2];
		} else {
			VitalTransaction = arguments[0];
			app = arguments[1];
			URIPropertyorList = arguments[2];
		}
	} else {
		app = arguments[0];
		URIPropertyorList = arguments[1];
	}
	
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];

	var params = [VitalTransaction, app, URIPropertyorList];
	if(vitalPathQueryString != null) {
		params.push(vitalPathQueryString);
	}

	this.impl.callMethod('deleteExpanded', params, successCB, errorCB);

}

/**
 * Deletes expanded a single graph object, arguments:
 * app, graphObject, successCB, errorCB
 * VitalTransaction, app, graphObject, successCB, errorCB
 */
VitalServiceAdmin.prototype.deleteExpandedObject = function() {
	var l = arguments.length;
	if(l < 4 || l > 5) {
		console.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var app = arguments[l - 4];
	var graphObject = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteExpandedObject', [VitalTransaction, app, graphObject], successCB, errorCB);
}

/**
 * Deletes expanded a list of graph objects with vital path query string, arguments:
 * app, graphObject, vitalPathQueryString, successCB, errorCB
 * VitalTransaction, app, graphObject, vitalPathQueryString, successCB, errorCB
 * 
 */
VitalServiceAdmin.prototype.deleteExpandedObjects = function() {
	
	var l = arguments.length;
	if(l < 5 || l > 6) {
		console.error("Expected 5 or 6 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var app = arguments[l - 5];
	var graphObject = arguments[l - 4];
	var vitalPathQueryString = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 6) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteExpandedObjects', [VitalTransaction, app, graphObject, vitalPathQueryString], successCB, errorCB);
}


//deleteFile(App, URIProperty, String)

/**
* Deletes a single graph object, arguments:
* app, graphObject, successCB, errorCB
* VitalTransaction, app, graphObject, successCB, errorCB
*/
VitalServiceAdmin.prototype.deleteObject = function() {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		console.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var app = arguments[l - 4];
	var graphObject = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteObject', [VitalTransaction, app, graphObject], successCB, errorCB);
}


/**
 * Deletes a list of graph objects, arguments:
 * app, graphObjectsList, successCB, errorCB
 * VitalTransaction, app, graphObjectsList, successCB, errorCB
 */
VitalServiceAdmin.prototype.deleteObjects = function() {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		console.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var app = arguments[l - 4];
	var graphObjectsList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteObjects', [VitalTransaction, app, graphObjectsList], successCB, errorCB);
}


//doOperations(App ServiceOperations)

//downloadFile(App URIProperty, String, OutputStream, boolean)

//fileExists(App, URIProperty, String)



/**
* Generates a new URI for given class (class object)
* returns URIProperty
*/
VitalServiceAdmin.prototype.generateURI = function(app, classObject, successCB, errorCB) {
	this.impl.callMethod('generateURI', [app, classObject], successCB, errorCB);
}

/**
* Gets a GraphObject or list, input is either URIProperty or list of URIProperty objects accordingly
* Flag controls whether to cache object on the server side
*/
VitalServiceAdmin.prototype.get = function(app, URIPropertyOrList, doCache, successCB, errorCB) {
	//always service wide context!
	this.impl.callMethod('get', [app, 'ServiceWide', URIPropertyOrList, doCache], successCB, errorCB);
}

VitalServiceAdmin.prototype.getApp = function(appID, successCB, errorCB) {
	this.impl.callMethod('getApp', [appID], successCB, errorCB);
}

/**
* returns EndpointType
*/
VitalServiceAdmin.prototype.getEndpointType = function(successCB, errorCB) {
	this.impl.callMethod('getEndpointType', [], successCB, errorCB);
}

VitalServiceAdmin.prototype.getExpanded = function(app, URIProperty, VitalPathQueryString, doCache, successCB, errorCB) {
	this.impl.callMethod('getExpanded', [app, URIProperty, VitalPathQueryString, doCache], successCB, errorCB);
}

VitalServiceAdmin.prototype.getName = function(successCB, errorCB) {
	this.impl.callMethod('getName', [], successCB, errorCB);
}

VitalServiceAdmin.prototype.getOrganization = function(successCB, errorCB) {
	this.impl.callMethod('getOrganization', [], successCB, errorCB);
}

VitalServiceAdmin.prototype.getSegment = function(app, segmentID, successCB, errorCB) {
	this.impl.callMethod('getSegment', [app, segmentID], successCB, errorCB);
}

VitalServiceAdmin.prototype.getTransactions = function(successCB, errorCB) {
	this.impl.callMethod('getTransactions', [], successCB, errorCB);
}

/**
 * Inserts a new object (or objects list) into a segment, arguments:
 * app, vitalSegment, graphObjectOrList, successCB, error
 * VitalTransaction, app, vitalSegment, graphObjectOrList, successCB, errorCB
 */
VitalServiceAdmin.prototype.insert = function() {
	
	var l = arguments.length;
	if(l < 5 || l > 6) {
		console.error("Expected 5 or 6 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var app = arguments[l - 5];
	var vitalSegment = arguments[l - 4];
	var graphObjectOrList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 6) {
		VitalTransaction = arguments[0];	
	}
	
//	this.impl.callMethod('deleteObjects', [VitalTransaction, app, graphObjectsList], successCB, errorCB);
	
	this.impl.callMethod('insert', [VitalTransaction, app, vitalSegment, graphObjectOrList], successCB, errorCB);
}

VitalServiceAdmin.prototype.listApps = function(successCB, errorCB) {
	this.impl.callMethod('listApps', [], successCB, errorCB);
}

VitalServiceAdmin.prototype.listDatabaseConnections = function(app, successCB, errorCB) {
	this.impl.callMethod('listDatabaseConnections', [app], successCB, errorCB);
}

//listFiles(String)

VitalServiceAdmin.prototype.listSegments = function(app, successCB, errorCB) {
	this.impl.callMethod('listSegments', [app], successCB, errorCB);
}

VitalServiceAdmin.prototype.listSegmentsWithConfig = function(app, successCB, errorCB) {
	this.impl.callMethod('listSegmentsWithConfig', [app], successCB, errorCB);
}

VitalServiceAdmin.prototype.listVitalServiceKeys = function(app, successCB, errorCB) {
	this.impl.callMethod('listVitalServiceKeys', [app], successCB, errorCB);
}

/**
* Pings the service 
* returns VitalStatus
*/
VitalServiceAdmin.prototype.ping = function(successCB, errorCB) {
	this.impl.callMethod('ping', [], successCB, errorCB);
}

//pipeline(VitalApp, Closure<?>)

/**
* Queries the vitalservice
*/
VitalServiceAdmin.prototype.query = function(app, vitalQueryString, successCB, errorCB) {
	this.impl.callMethod('query', [app, vitalQueryString], successCB, errorCB);
}

/**
 * Special method for handling graph queries that embeds objects in GraphMatch results.
 * GRAPH { inlineObjects } value should be set to false to save resources
 */
VitalServiceAdmin.prototype.graphQuery = function(app, vitalGraphQueryString, successCB, errorCB) {
	
	var _this = this;
	
	this.impl.callMethod('query', [app, vitalGraphQueryString], function(results){
		
		var _resultsGetter = function(urisList, getSuccessCB, getErrorCB) {
			_this.get(app, urisList, false, getSuccessCB, getErrorCB);
		};
	
		_this.impl.processGraphQueryResults(results, _resultsGetter, successCB, errorCB);
		
	}, errorCB);
	
}

/**
* Queries the vitalservice
*/
VitalServiceAdmin.prototype.queryLocal = function(app, vitalQueryString, successCB, errorCB) {
	this.impl.callMethod('queryLocal', [app, vitalQueryString], successCB, errorCB);
}


VitalServiceAdmin.prototype.removeApp = function(app, successCB, errorCB) {
	this.impl.callMethod('removeApp', [app], successCB, errorCB);
}

VitalServiceAdmin.prototype.removeDatabaseConnection = function(app, connectionName, successCB, errorCB) {
	this.impl.callMethod('removeDatabaseConnection', [app, connectionName], successCB, errorCB);
}

VitalServiceAdmin.prototype.removeSegment = function(app, segment, deleteData, successCB, errorCB) {
	this.impl.callMethod('removeSegment', [app, segment, deleteData], successCB, errorCB);
}

VitalServiceAdmin.prototype.removeVitalServiceKey = function(app, vitalServiceKey, successCB, errorCB) {
	this.impl.callMethod('removeVitalServiceKey', [app, vitalServiceKey], successCB, errorCB);
}

VitalServiceAdmin.prototype.rollbackTransaction = function(transaction, successCB, errorCB) {
	this.impl.callMethod('rollbackTransaction', [transaction], successCB, errorCB);
}


/**
 * Saves a graph object or objects list in default segment or specified segment, the params combinations are:
 * app, graphObjectOrList, successCB, errorCB (4 args)
 * transaction, app, graphObjectOrList, successCB, errorCB (5 args)
 * app, segment, graphObjectOrList, createIfNotExistsFlag, successCB, errorCB (6 args)
 * transaction, app, segment, graphObjectOrList, createIfNotExistsFlag, successCB, errorCB  (7 args) 
 * 
 */
VitalServiceAdmin.prototype.save = function() {
	
	var l = arguments.length; 
	
	if( l < 4 || l > 7) {
		console.error("save method error, expected 4 - 7 arguments - see documentation");
		return;
	}
	
	var successCB = arguments[arguments.length - 2];
	var errorCB = arguments[arguments.length -1 ];
	
	if(l == 4 || l == 5) {
		
		var VitalTransaction  = l == 5 ? arguments[0] : null;
		var app               = l == 5 ? arguments[1] : arguments[0];
		var graphObjectOrList = l == 5 ? arguments[2] : arguments[1];
		
		this.impl.callMethod('save', [VitalTransaction, app, graphObjectOrList], successCB, errorCB);
		
	} else {
		
//		response = service.save(transaction(a[0]), a[1], a[2], a[3], a[4])
		var VitalTransaction  = l == 7 ? arguments[0] : null;
		var app               = l == 7 ? arguments[1] : arguments[0];
		var segment           = l == 7 ? arguments[2] : arguments[1];
		var graphObjectOrList = l == 7 ? arguments[3] : arguments[2];
		var createIfNotExists = l == 7 ? arguments[4] : arguments[3];
		
		this.impl.callMethod('save', [VitalTransaction, app, segment, graphObjectOrList, createIfNotExists], successCB, errorCB);
		
	}
	
}


VitalServiceAdmin.prototype.sendEvent = function(app, VITAL_Event, waitForDelivery, successCB, errorCB) {
	this.impl.callMethod('sendEvent', [app, VITAL_Event, waitForDelivery], successCB, errorCB);
}

VitalServiceAdmin.prototype.sendEvents = function(app, ListOfVITAL_Events, waitForDelivery, successCB, errorCB) {
	this.impl.callMethod('sendEvents', [app, ListOfVITAL_Events, waitForDelivery], successCB, errorCB);
}

VitalServiceAdmin.prototype.setDefaultSegmentName = function(defaultsegment, successCB, errorCB) {
	this.impl.callMethod('setDefaultSegmentName', [defaultsegment], successCB, errorCB);
}

//uploadFile(URIProperty, String, InputStream, boolean)

VitalServiceAdmin.prototype.validate = function(successCB, errorCB) {
	this.impl.callMethod('validate', [], successCB, errorCB);
}
