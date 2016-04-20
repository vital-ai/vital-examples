/**
 * VitalService javascript interface
 * @param address - vitalservice eventbus address, 'vitalservice' in most cases
 * @param eventBusURL - if null then current window url protocol://host:port/eventbus will be used 
 * @param successCB
 * @param errorCB
 * @returns
 */
VitalService = function(address, eventbusURL, successCB, errorCB) {
	
	//the vitalservice is initialized asynchronously
	this.impl = new VitalServiceWebsocketImpl(address, 'service', eventbusURL, successCB, errorCB);
	
	this.NO_TRANSACTION = null;
	
}

VitalService.JS_REGISTER_STREAM_HANDLER = 'js-register-stream-handler';

VitalService.JS_UNREGISTER_STREAM_HANDLER = 'js-unregister-stream-handler';

VitalService.JS_LIST_STREAM_HANDLERS = 'js-list-stream-handlers';


VitalService.VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe';

VitalService.VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe';



//non - api

/**
 * returns currently logged in user or null
 */
VitalService.prototype.getCurrentLogin = function() {
	return this.impl.login;
}

/**
 * returns current session ID or null if not authenticated
 */
VitalService.prototype.getSessionID = function() {
	return this.impl.appSessionID;
}



//bulkExport(VitalSegment, OutputStream)
//bulkImport(VitalSegment, InputStream)

/**
 * Calls datascript with name and params
 * returns ResultList
 */
VitalService.prototype.callFunction = function(functionName, paramsMap, successCB, errorCB) {
	
	if(functionName == VitalService.JS_LIST_STREAM_HANDLERS) {
		
		//list handlers
		this.impl.listStreamHandlers(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.JS_REGISTER_STREAM_HANDLER) {
		
		this.impl.registerStreamHandler(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.JS_UNREGISTER_STREAM_HANDLER) {
		
		this.impl.unregisterStreamHandler(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.VERTX_STREAM_SUBSCRIBE) {
		
		this.impl.streamSubscribe(paramsMap, successCB, errorCB);
		return;
		
	} else if(functionName == VitalService.VERTX_STREAM_UNSUBSCRIBE) {
		
		this.impl.streamUnsubscribe(paramsMap, successCB, errorCB);
		return;
		
	}
	
//	public final static String VERTX_STREAM_SUBSCRIBE = 'vertx-stream-subscribe'
//		
//		public final static String VERTX_STREAM_UNSUBSCRIBE = 'vertx-stream-unsubscribe'
//		
//		public final static String VERTX_STREAM_LIST_SUBSCRIPTIONS = 'vertx-stream-list-subscriptions'
	
	
	this.impl.callMethod('callFunction', [functionName, paramsMap], successCB, errorCB);
}

//close()

VitalService.prototype.commitTransaction = function(transaction, successCB, errorCB) {
	this.impl.callMethod('commitTransaction', [transaction], successCB, errorCB);
}

VitalService.prototype.createTransaction = function(successCB, errorCB) {
	this.impl.callMethod('createTransaction', [], successCB, errorCB);
}


/**
* Deletes a single URIProperty or List of URIProperty objects, arguments:
* URIPropertyOrList, successCB, errorCB
* VitalTransaction, URIPropertyOrList, successCB, errorCB
* 
*/
VitalService.prototype.delete_ = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		console.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var URIPropertyOrList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	this.impl.callMethod('delete', [VitalTransaction, URIPropertyOrList], successCB, errorCB);
}


/**
* Deletes expanded single URIProperty or List of URIProperty objects, arguments:
* URIPropertyorList, successCB, errorCB (3 args)
* VitalTransaction, URIPropertyorList, successCB, errorCB (4 args)
* URIPropertyorList, vitalPathQueryString, successCB, errorCB (4 args)
* VitalTransaction, URIPropertyorList, vitalPathQueryString, successCB, errorCB (5 args)
*/
VitalService.prototype.deleteExpanded = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 5) {
		console.error("Expected 3 to 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var vitalPathQueryString = null;
	var URIPropertyorList = null;
	if(l == 5) {
		VitalTransaction = arguments[0];
		URIPropertyorList = arguments[1];
		vitalPathQueryString = arguments[2];
	} else if(l == 4) {
		//check type of a[1]
		if(typeof(arguments[1]) == 'string') {
			URIPropertyorList = arguments[0];
			vitalPathQueryString = arguments[1];
		} else {
			VitalTransaction = arguments[0];
			URIPropertyorList = arguments[1];
		}
	} else {
		URIPropertyorList = arguments[0];
	}
	
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];

	var params = [VitalTransaction, URIPropertyorList];
	if(vitalPathQueryString != null) {
		params.push(vitalPathQueryString);
	}

	this.impl.callMethod('deleteExpanded', params, successCB, errorCB);

}


/**
 * Deletes expanded a single graph object, arguments:
 * graphObject, successCB, errorCB
 * VitalTransaction, graphObject, successCB, errorCB
 */
VitalService.prototype.deleteExpandedObject = function() {
	var l = arguments.length;
	if(l < 3 || l > 4) {
		console.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteExpandedObject', [VitalTransaction, graphObject], successCB, errorCB);
}

/**
 * Deletes expanded a list of graph objects with vital path query string, arguments:
 * graphObject, vitalPathQueryString, successCB, errorCB
 * VitalTransaction, graphObject, vitalPathQueryString, successCB, errorCB
 * 
 */
VitalService.prototype.deleteExpandedObjects = function() {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		console.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 4];
	var vitalPathQueryString = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteExpandedObjects', [VitalTransaction, graphObject, vitalPathQueryString], successCB, errorCB);
}



//deleteFile(URIProperty, String)

/**
* Deletes a single graph object, arguments:
* graphObject, successCB, errorCB
* VitalTransaction, graphObject, successCB, errorCB
*/
VitalService.prototype.deleteObject = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		console.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObject = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteObject', [VitalTransaction, graphObject], successCB, errorCB);
}

/**
 * Deletes a list of graph objects, arguments:
 * graphObjectsList, successCB, errorCB
 * VitalTransaction, graphObjectsList, successCB, errorCB
 */
VitalService.prototype.deleteObjects = function() {
	
	var l = arguments.length;
	if(l < 3 || l > 4) {
		console.error("Expected 3 or 4 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var graphObjectsList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 4) {
		VitalTransaction = arguments[0];	
	}
	
	this.impl.callMethod('deleteObjects', [VitalTransaction, graphObjectsList], successCB, errorCB);
}


//doOperations(ServiceOperations)

//downloadFile(URIProperty, String, OutputStream, boolean)

//fileExists(URIProperty, String)



/**
 * Generates a new URI for given class (class object)
 * returns URIProperty
 */
VitalService.prototype.generateURI = function(classObject, successCB, errorCB) {
	this.impl.callMethod('generateURI', [classObject], successCB, errorCB);
}

/**
 * Gets a GraphObject or list, input is either URIProperty or list of URIProperty objects accordingly
 * Flag controls whether to cache object on the server side
 */
VitalService.prototype.get = function(URIPropertyOrList, doCache, successCB, errorCB) {
	//always service wide context!
	this.impl.callMethod('get', [{type: 'GraphContext', value: 'ServiceWide'}, URIPropertyOrList, doCache], successCB, errorCB);
}


/**
 * Gets current app
 * returns App
 */
VitalService.prototype.getApp = function(successCB, errorCB) {
	this.impl.callMethod('getApp', [], successCB, errorCB);
}

/**
 * returns string
 */
VitalService.prototype.getDefaultSegmentName = function(successCB, errorCB) {
	this.impl.callMethod('getDefaultSegmentName', [], successCB, errorCB);
}


/**
 * returns EndpointType
 */
VitalService.prototype.getEndpointType = function(successCB, errorCB) {
	this.impl.callMethod('getEndpointType', [], successCB, errorCB);
}

VitalService.prototype.getExpanded = function(URIProperty, doCache, successCB, errorCB) {
	this.impl.callMethod('getExpanded', [URIProperty, doCache], successCB, errorCB);
}

VitalService.prototype.getExpanded = function(URIProperty, VitalPathQueryString, doCache, successCB, errorCB) {
	this.impl.callMethod('getExpanded', [URIProperty, VitalPathQueryString, doCache], successCB, errorCB);
}

VitalService.prototype.getName = function(successCB, errorCB) {
	this.impl.callMethod('getName', [], successCB, errorCB);
}

VitalService.prototype.getOrganization = function(successCB, errorCB) {
	this.impl.callMethod('getOrganization', [], successCB, errorCB);
}

VitalService.prototype.getSegment = function(segmentID, successCB, errorCB) {
	this.impl.callMethid('getSegment', [segmentID], successCB, errorCB);
}

VitalService.prototype.getTransactions = function(successCB, errorCB) {
	this.impl.callMethod('getTransactions', [], successCB, errorCB);
}

/**
 * Inserts a new object (or objects list) into a segment, arguments:
 * vitalSegment, graphObjectOrList, successCB, error
 * VitalTransaction, vitalSegment, graphObjectOrList, successCB, errorCB
 */
VitalService.prototype.insert = function(VitalTransaction, vitalSegment, graphObjectOrList, successCB, errorCB) {
	
	var l = arguments.length;
	if(l < 4 || l > 5) {
		console.error("Expected 4 or 5 arguments - see documentation");
		return;
	}
	
	var VitalTransaction = null;
	var vitalSegment = arguments[l - 4];
	var graphObjectOrList = arguments[l - 3];
	var successCB = arguments[l - 2];
	var errorCB = arguments[l - 1];
	if(l == 5) {
		VitalTransaction = arguments[0];	
	}
	
//	this.impl.callMethod('deleteObjects', [VitalTransaction, app, graphObjectsList], successCB, errorCB);
	
	this.impl.callMethod('insert', [VitalTransaction, vitalSegment, graphObjectOrList], successCB, errorCB);
}


VitalService.prototype.listDatabaseConnections = function(successCB, errorCB) {
	this.impl.callMethod('listDatabaseConnections', [], successCB, errorCB);
}

//listFiles(String)

VitalService.prototype.listSegments = function(successCB, errorCB) {
	this.impl.callMethod('listSegments', [], successCB, errorCB);
}

VitalService.prototype.listSegmentsWithConfig = function(successCB, errorCB) {
	this.impl.callMethod('listSegmentsWithConfig', [], successCB, errorCB);
}

/**
 * Pings the service 
 * returns VitalStatus
 */
VitalService.prototype.ping = function(successCB, errorCB) {
	this.impl.callMethod('ping', [], successCB, errorCB);
}

//pipeline(Closure<?>)

/**
 * Queries the vitalservice
 */
VitalService.prototype.query = function(vitalQueryString, successCB, errorCB) {
	this.impl.callMethod('query', [vitalQueryString], successCB, errorCB);
}

/**
 * Queries the vitalservice
 */
VitalService.prototype.queryLocal = function(vitalQueryString, successCB, errorCB) {
	this.impl.callMethod('queryLocal', [vitalQueryString], successCB, errorCB);
}

VitalService.prototype.rollbackTransaction = function(transaction, successCB, errorCB) {
	this.impl.callMethod('rollbackTransaction', [transaction], successCB, errorCB);
}


/**
 * Saves a graph object or objects list in default segment or specified segment, the params combinations are:
 * graphObjectOrList, successCB, errorCB (3 args)
 * transaction, graphObjectOrList, successCB, errorCB (4 args)
 * segment, graphObjectOrList, createIfNotExistsFlag, successCB, errorCB (5 args)
 * transaction, segment, graphObjectOrList, createIfNotExistsFlag, successCB, errorCB  (6 args) 
 * 
 */
VitalService.prototype.save = function() {
	
	var l = arguments.length; 
	
	if( l < 3 || l > 6) {
		console.error("save method error, expected 3 to 6 arguments - see documentation");
		return;
	}
	
	var successCB = arguments[arguments.length - 2];
	var errorCB = arguments[arguments.length -1 ];
	
	if(l == 3 || l == 4) {
		
		var VitalTransaction  = l == 4 ? arguments[0] : null;
		var graphObjectOrList = l == 4 ? arguments[1] : arguments[0];
		
		this.impl.callMethod('save', [VitalTransaction, graphObjectOrList], successCB, errorCB);
		
	} else {
		
		var VitalTransaction  = l == 6 ? arguments[0] : null;
		var segment           = l == 6 ? arguments[1] : arguments[0];
		var graphObjectOrList = l == 6 ? arguments[2] : arguments[1];
		var createIfNotExists = l == 6 ? arguments[3] : arguments[2];
		
		this.impl.callMethod('save', [VitalTransaction, segment, graphObjectOrList, createIfNotExists], successCB, errorCB);
		
	}
	
}

VitalService.prototype.sendEvent = function(VITAL_Event, waitForDelivery, successCB, errorCB) {
	this.impl.callMethod('sendEvent', [VITAL_Event, waitForDelivery], successCB, errorCB);
}

VitalService.prototype.sendEvents = function(ListOfVITAL_Events, waitForDelivery, successCB, errorCB) {
	this.impl.callMethod('sendEvents', [ListOfVITAL_Events, waitForDelivery], successCB, errorCB);
}

VitalService.prototype.setDefaultSegmentName = function(defaultsegment, successCB, errorCB) {
	this.impl.callMethod('setDefaultSegmentName', [defaultsegment], successCB, errorCB);
}

//uploadFile(URIProperty, String, InputStream, boolean)

VitalService.prototype.validate = function(successCB, errorCB) {
	this.impl.callMethod('validate', [], successCB, errorCB);
}


/**
 * Returns the result list of all schemas available remotely
 * @returns array of DomainModel objects
 */
VitalService.prototype.getSchemaList = function(successCB, errorCB) {
	this.impl.getSchemaList(successCB, errorCB);
}

/**
 * Returns dependencies of a schema, parents or all ancestors based on recursive flag
 * @returns array of DomainModel objects
 */
VitalService.prototype.getDependenciesOfSchema = function(schemaName, recursive, successCB, errorCB) {
	this.impl.getDependenciesOfSchema(schemaName, recursive, successCB, errorCB);
}

/**
 * Returns an array of json schema objects, the original array is wrapped with {name:, URI:, schema: [] }, the order is preserved
 */
VitalService.prototype.getSchemas = function(schemaNamesArray, successCB, errorCB) {
	this.impl.getSchemas(schemaNamesArray, successCB, errorCB);
}

/**
 * Loads given schema objects ( {name:, URI:, schema: [] } in the given order
 */
VitalService.prototype.loadSchemas = function(jsonSchemasArray, successCB, errorCB) {
	this.impl.loadSchemas(jsonSchemasArray, successCB, errorCB);
}

/**
 * Purges currently loaded domain schemas
 */
VitalService.prototype.purgeSchemas = function(successCB, errorCB) {
	this.impl.purgeSchemas(successCB, errorCB);
}

/**
 * Returns locally loaded domains
 */
VitalService.prototype.getLocalSchemaList = function(successCB, errorCB) {
	this.impl.getLocalSchemaList(successCB, errorCB);
}

/**
 * Unloads schema
 */
VitalService.prototype.unloadSchema = function(schemaURI, successCB, errorCB) {
	this.impl.unloadSchema(schemaURI, successCB, errorCB);
}

