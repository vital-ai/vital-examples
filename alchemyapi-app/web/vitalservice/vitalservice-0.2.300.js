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
 * Deletes a single URIProperty or List of URIProperty objects
 * returns VitalStatus
 * 
 */
VitalService.prototype.delete_ = function(URIPropertyOrList, successCB, errorCB) {
	this.impl.callMethod('delete', [this.NO_TRANSACTION, URIPropertyOrList], successCB, errorCB);
}

/**
 * Deletes a single URIProperty or List of URIProperty objects
 * returns VitalStatus
 * 
 */
VitalService.prototype.delete_ = function(VitalTransaction, URIPropertyOrList, successCB, errorCB) {
	this.impl.callMethod('delete', [VitalTransaction, URIPropertyOrList], successCB, errorCB);
}


/**
 * Deletes expanded single URIProperty or List of URIProperty objects
 */
VitalService.prototype.deleteExpanded = function(URIPropertyorList, successCB, errorCB) {
	this.impl.callMethod('deleteExpanded', [this.NO_TRANSACTION, URIPropertyorList], successCB, errorCB);

}

/**
 * Deletes expanded single URIProperty or List of URIProperty objects
 */
VitalService.prototype.deleteExpanded = function(VitalTransaction, URIPropertyorList, successCB, errorCB) {
	this.impl.callMethod('deleteExpanded', [VitalTransaction, URIPropertyorList], successCB, errorCB);
	
}

/**
 * Deletes expanded single URIProperty or List of URIProperty objects with VitalPathQuery
 */
VitalService.prototype.deleteExpanded = function(URIPropertyorList, vitalPathQueryString, successCB, errorCB) {
	this.impl.callMethod('deleteExpanded', [this.NO_TRANSACTION, URIPropertyorList, vitalPathQueryString], successCB, errorCB);
}

/**
 * Deletes expanded single URIProperty or List of URIProperty objects with VitalPathQuery
 */
VitalService.prototype.deleteExpanded = function(VitalTransaction, URIPropertyorList, vitalPathQueryString, successCB, errorCB) {
	this.impl.callMethod('deleteExpanded', [VitalTransaction, URIPropertyorList, vitalPathQueryString], successCB, errorCB);
}


/**
 * Deletes expanded a single graph object
 */
VitalService.prototype.deleteExpandedObject = function(graphObject, successCB, errorCB) {
	this.impl.callMethod('deleteExpandedObject', [this.NO_TRANSACTION, graphObject], successCB, errorCB);
}

/**
 * Deletes expanded a single graph object
 */
VitalService.prototype.deleteExpandedObject = function(VitalTransaction, graphObject, successCB, errorCB) {
	this.impl.callMethod('deleteExpandedObject', [VitalTransaction, graphObject], successCB, errorCB);
}

/**
 * Deletes expanded a list of graph object with vital path query string
 */
VitalService.prototype.deleteExpandedObject = function(graphObject, vitalPathQueryString, successCB, errorCB) {
	this.impl.callMethod('deleteExpandedObjects', [this.NO_TRANSACTION, graphObject, vitalPathQueryString], successCB, errorCB);
}

/**
 * Deletes expanded a list of graph object with vital path query string
 */
VitalService.prototype.deleteExpandedObject = function(VitalTransaction, graphObject, vitalPathQueryString, successCB, errorCB) {
	this.impl.callMethod('deleteExpandedObjects', [VitalTransaction, graphObject, vitalPathQueryString], successCB, errorCB);
}


//deleteFile(URIProperty, String)

/**
 * Deletes a single graph object
 */
VitalService.prototype.deleteObject = function(graphObject, successCB, errorCB) {
	this.impl.callMethod('deleteObject', [this.NO_TRANSACTION, graphObject], successCB, errorCB);
}

/**
 * Deletes a single graph object
 */
VitalService.prototype.deleteObject = function(VitalTransaction, graphObject, successCB, errorCB) {
	this.impl.callMethod('deleteObject', [VitalTransaction, graphObject], successCB, errorCB);
}

/**
 * Deletes a list of graph objects
 */
VitalService.prototype.deleteObjects = function(graphObjectsList, successCB, errorCB) {
	this.impl.callMethod('deleteObjects', [this.NO_TRANSACTION, graphObjectsList], successCB, errorCB);
}

/**
 * Deletes a list of graph objects
 */
VitalService.prototype.deleteObjects = function(VitalTransactiongraphObjectsList, successCB, errorCB) {
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
 */
VitalService.prototype.get = function(URIPropertyOrList, successCB, errorCB) {
	//always service wide context!
	this.impl.callMethod('get', [{type: 'GraphContext', value: 'ServiceWide'}, URIPropertyOrList], successCB, errorCB);
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

VitalService.prototype.insert = function(vitalSegment, graphObjectOrList, successCB, errorCB) {
	this.impl.callMethod('insert', [this.NO_TRANSACTION, vitalSegment, graphObject], successCB, errorCB);
}

VitalService.prototype.insert = function(VitalTransaction, vitalSegment, graphObjectOrList, successCB, errorCB) {
	this.impl.callMethod('insert', [VitalTransaction, vitalSegment, graphObject], successCB, errorCB);
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
 * Saves a graph object or objects list in default segment 
 */
VitalService.prototype.save = function(graphObjectOrList, createFlag, successCB, errorCB) {
	this.impl.callMethod('save', [this.NO_TRANSACTION, graphObjectOrList, createFlag], successCB, errorCB);
}

/**
 * Saves a graph object or objects list in default segment 
 */
VitalService.prototype.save = function(VitalTransaction, graphObjectOrList, createFlag, successCB, errorCB) {
	this.impl.callMethod('save', [VitalTransaction, graphObjectOrList, createFlag], successCB, errorCB);
}

/**
 * Saves a graph object or objects list 
 */
VitalService.prototype.save = function(segment, graphObjectOrList, createFlag, successCB, errorCB) {
	this.impl.callMethod('save', [this.NO_TRANSACTION, segment, graphObjectOrList, createFlag], successCB, errorCB);
}

/**
 * Saves a graph object or objects list 
 */
VitalService.prototype.save = function(VitalTransaction, segment, graphObjectOrList, createFlag, successCB, errorCB) {
	this.impl.callMethod('save', [VitalTransaction, segment, graphObjectOrList, createFlag], successCB, errorCB);
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

