/**
 * VitalService JSON submodule - validates the messages and transferred objects using json schema
 * TODO - all service objects validation
 */
VitalServiceJson = function() {

	if(VitalServiceJson.SINGLETON != null) {
		throw ("VitalServiceJson SINGLETON already initialized");
	}
	
	if(typeof(tv4) == 'undefined') {
		throw ("missing tv4 library");
	}
	
	if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
		throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable")
	}
	
	/*
	if(typeof(vital_core_0_2_252_schema) == 'undefined') {
		throw ("No vital_core_0_2_252_schema - core json schema not loaded");
	}
	
	if(typeof(vital_0_2_252_schema) == 'undefined') {
		throw ("No vital_0_2_252_schema - domain json schema not loaded");
	}
	*/
	
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	
	
	this.vitalCoreSchema = null;
	this.vitalDomainSchema = null;
	
	this.dynamicDomains = [];
	
	this.domainsMap = {};
	
	this.propertiesMap = {};
	
	var sFiles = [];
	
	for(var i = 0 ; i < VITAL_JSON_SCHEMAS.length; i++) {
		
		var schema = VITAL_JSON_SCHEMAS[i];
		
		if(schema.domainURI == VitalServiceJson.VITAL_CORE_URI ) {
			this.vitalCoreSchema = schema;
		} else if(schema.domainURI == VitalServiceJson.VITAL_DOMAIN_URI ) {
			this.vitalDomainSchema = schema;
		} else {
			this.dynamicDomains.push(schema);
		}
		
		sFiles.push(schema);
		
		this.domainsMap[schema.domainURI] = schema;
		
		for(var j = 0 ; j < schema.properties.length; j++) {
			var p = schema.properties[j];
			this.propertiesMap[p.URI] = p;
		}
		
	}
	
	
	if(this.vitalCoreSchema == null) {
		console.error("No vital core schema loaded");
		return;
	}
	
	if(this.vitalDomainSchema == null) {
		console.error("No vital domain schema loaded");
		return;
	}
	
	
	for(var i = 0 ; i < VitalServiceJson.customOntologies.length; i++) {
		
		var schema = VitalServiceJson.customOntologies[i];
		
		var schemaURI = schema.domainURI;
		
		this.domainsMap[schema.domainURI] = schema;
		
		for(var i = 0 ; i < schema.properties.length; i++) {
			var p = schema.properties[i];
			this.propertiesMap[p.URI] = p;
		}
		
		sFiles.push(schema);
		
	}
	
	this._load(sFiles);
	
}

/**
 * @type VitalServiceJson
 */
VitalServiceJson.SINGLETON = null;

VitalServiceJson.VITAL_CORE_URI = 'http://vital.ai/ontology/vital-core';

VitalServiceJson.VITAL_DOMAIN_URI = 'http://vital.ai/ontology/vital';



VitalServiceJson.prototype._load = function(sFiles) {
	

	if(VITAL_LOGGING) { console.log("schemas count: ", sFiles.length); }
	
	var newLoaded = {};
	
	for(var i = 0 ; i < sFiles.length; i++) {
		
		var schemas = sFiles[i].schemas;
		
		for(var j = 0 ; j < schemas.length; j++) {
			
			var schema = schemas[j];
			
			var extendsURI = schema['extends'];
			
			if(extendsURI != null) {
				
				var l = this.loaded[extendsURI];
				
				if(l == null) {
					console.warn("Base schema not found: " + extendsURI);
					continue;
				}
			
				var currentProps = l['properties'];
				
				var newProps = schema['properties'];
				
				$.extend(currentProps, newProps);
				
				tv4.addSchema(extendsURI, l);
				
				this.loaded[extendsURI] = l;
				
			} else {
				
				var uri = schema.id;
				
				if(VITAL_LOGGING) { console.log("Loading schema ", uri); }
				
				tv4.addSchema(uri, schema);
				
				this.loaded[uri] = schema;
				
				newLoaded[uri] = schema;
				
			}
			
		}
		
	}
	
	
	//collect all  VITAL_GraphContainerObject subclasses
	for (var key in newLoaded) {
		if ( ! newLoaded.hasOwnProperty(key)) continue;
		
		//collect parent classes
		var classHierarchy = this.listSuperclasses(key, [], false);
		
		if(classHierarchy.indexOf(VitalServiceJson.VITAL_CORE_URI + '#VITAL_GraphContainerObject') >= 0) {
			
			if(this.dynamicPropertiesClasses.indexOf(key) < 0) {
				this.dynamicPropertiesClasses.push(key);
			}
			
		}
		
	}
	
}

VitalServiceJson.prototype.listSuperclasses = function(thisClass, results, direct) {
	return this._listSuperclasses(thisClass, results, direct, true);
}

VitalServiceJson.prototype._listSuperclasses = function(thisClass, results, direct, topLevel) {
	
	var obj = this.loaded[thisClass];
	
	if(obj == null) throw "class not found in registry: " + thisClass;
	
	results.push(thisClass);
	
	if(direct == true && topLevel == false) {
		return results;
	}
	
	var parent = obj['parent'];
	
	if(parent != null) {
		
		results = this._listSuperclasses(parent, results, direct, false);
		
	} 
	return results;
	
}

VitalServiceJson.prototype.listSubclasses = function(thisClass, results, direct) {
	
	var obj = this.loaded[thisClass];
	
	if(obj == null) throw "class not found in registry: " + thisClass;

	results.push(thisClass);
	
	var pool = [thisClass];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for(var key in this.loaded) {
				
				if ( ! this.loaded.hasOwnProperty(key) )  continue;
				
				var cls = this.loaded[key];
				
				if( cls.parent == parentURI ) {
					
					if(results.indexOf(key) < 0) {
						
						results.push(key);
						
						newPool.push(key);
						
					}
					
				}
				
			}
			
			
		}
		
		if(direct) {
			pool = [];
		} else {
			pool = newPool;
		}
		
	}
	
	return results;
	
}

VitalServiceJson.prototype.listSuperproperties = function(thisProperty, results, direct) {
	return this._listSuperproperties(thisProperty, results, direct, true);
}

VitalServiceJson.prototype._listSuperproperties = function(thisProperty, results, direct, topLevel) {
	
	var obj = this.propertiesMap[thisProperty];
	
	if(obj == null) throw "property not found in registry: " + thisProperty;
	
	results.push(thisProperty);
	
	if(direct == true && topLevel == false) {
		return results;
	}
	
	var parent = obj['parent'];
	
	if(parent != null) {
		
		results = this._listSuperproperties(parent.URI, diresults, direct, false);
		
	}
	
	return results;
	
}

VitalServiceJson.prototype.listSubproperties = function(thisProperty, results, direct) {
	
	var obj = this.propertiesMap[thisProperty];
	
	if(obj == null) throw "property not found in registry: " + thisProperty;

	var topLevel = true;
	
	results.push(thisProperty);
	
	var pool = [thisProperty];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for(var key in this.propertiesMap) {
				
				if ( ! this.propertiesMap.hasOwnProperty(key) )  continue;
				
				var cls = this.propertiesMap[key];
				
				if( cls.parent == parentURI ) {
					
					if(results.indexOf(key) < 0) {
						
						results.push(key);
						
						newPool.push(key);
						
					}
					
				}
				
			}
			
			
		}
		
		if(direct) {
			pool = [];
		} else {
			pool = newPool;
		}
		
	}
	
	return results;
	
}


VitalServiceJson.customOntologies = [];

/**
 * Validates vitalservice json response object
 * returns errorMessage or null if ok
 */
VitalServiceJson.prototype.validateResponse = function(response) {

	if(response == null) return 'null response object - nothing to validate';
	
	if(response.type != null) {
		var status = this.validateGraphObject(response);
		return status; 
	}
	
	if(vitaljs.isArray(response)) {
		
		for(var i = 0 ; i < response.length; i++) {
			
			var o = response[i];
			
			if(o.type != null) {
				
				var status = this.validateGraphObject(o);
				if(status != null) return status;
				
			} else {
				
				return "expected list of graph objects";
				
			}
			
		}
		
		if(VITAL_LOGGING) { console.log("Validation passed, checked " + response.length + " objects in array"); }
		
		return null;
		
		
	}
	
	//only result list
	if( response._type == 'ai.vital.vitalservice.query.ResultList' ) {
	
		if( response.results == null ) return null;
		
		for(var i = 0 ; i < response.results.length; i++) {
			
			
			var resultElement = response.results[i];
			
			var graphObject = resultElement.graphObject;
	
			var status = this.validateGraphObject(graphObject);
			if(status != null) return status;
			
		}
		
		if(VITAL_LOGGING) { console.log("Validation passed, checked " + response.results.length + " objects in ResultList"); }
	    
	    return null;

	} else {
		
		if(VITAL_LOGGING) { console.log("response validation skipped: " + response._type); }
		return null;
	}
	
}


VitalServiceJson.prototype.validateGraphObject = function(graphObject) {
	
	if(graphObject.type == null) return "Graph object without type!";

	if(this.dynamicPropertiesClasses.indexOf(graphObject.type) >= 0) {
		//dynamic properties objects are allowed
		return null;
	}
	
	var schema = this.loaded[graphObject.type]
	
	if(schema == null) return "No schema found for graph object type: " + graphObject.type; 
	
	
	var valid = tv4.validate(graphObject, schema);
	
	if(!valid) {
		console.error("Object invalid", tv4.error);
		console.error("Object invalid code ", tv4.error.code);
		console.error("Object invalid message ", tv4.error.message);
		console.error("Object invalid dataPath ", tv4.error.dataPath);
		console.error("Object invalid schemaKey ", tv4.error.schemaKey);
		console.error("Object invalid obj Key ", graphObject);
		return "Code: " + tv4.error.code + 
		" Message: " + tv4.error.message +
		" DataPath: " + tv4.error.dataPath + 
		" SchemaKey: " + tv4.error.schemaKey;
	}

	vitaljs.graphObject(graphObject);
	
	return null;
	
}


VitalServiceJson.prototype.loadSchemas = function(schemasArray) {
	
	var filtered = [];
	
	for(var si = 0 ; si < schemasArray.length; si++) {
		
		var schemaObj = schemasArray[si];
		
		var loadedAlready = false;
		
		for( var i = 0 ; i < this.dynamicDomains.length; i ++ ) {
			if(this.dynamicDomains[i].domainURI == schemaObj.domainURI) {
				loadedAlready = true;
				break;
			}
		}
		
		if(loadedAlready) {
			console.warn("Schema already loaded: " + schemaObj.domainURI);
			continue;
		}
		
		filtered.push(schemaObj);
		
		this.dynamicDomains.push(schemaObj);
		
		this.domainsMap[schemaObj.domainURI] = schemaObj;
		
		for(var i = 0 ; i < schemaObj.properties.length; i++) {
			var p = schemaObj.properties[i];
			this.propertiesMap[p.URI] = p;
		}
		
	}
	
	this._load(filtered);
	
}


VitalServiceJson.prototype.purgeSchemas = function(schemaArray) {
	
	this.dynamicDomains = [];
	this.domainsMap = {};
	this.propertiesMap = {};
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	
	tv4.dropSchemas();

	
	this._load([this.vitalCoreSchema, this.vitalDomainSchema]);
	
	
}

VitalServiceJson.prototype.getLocalSchemaList = function() {
	var list = [this.vitalCoreSchema, this.vitalDomainSchema];
	for(var i = 0; i < this.dynamicDomains; i++) {
		list.push(this.dynamicDomains[i]);
	}
	return list;
}

VitalServiceJson.prototype.unloadSchema = function(schemaURI) {
	
	var d = null;
	var index = -1;
	//dependent
	var dependent = [];
	
	if(this.vitalCoreSchema.domainURI == schemaURI) throw ("Cannot unload vital-core schema: " + schemaURI);
	
	if(this.vitalDomainSchema.domainURI == schemaURI) throw ("Cannot unload vital schema: " + schemaURI);
	
	var dependentSchemas = [];
	
	for(var i = 0 ; i < this.dynamicDomains.length; i++) {
		
		var _d = this.dynamicDomains[i];
		
		if(_d.domainURI == schemaURI) {
			d = _d;
			index = i;
		} else {

			var parents = _d.parents;
			
			if(parents.indexOf(schemaURI) >= 0) {
				dependent.push(_d);
			}
			
		}
		
	}
	
	if(d == null) throw "schema with URI not found: " + schemaURI;
	
	if(dependent.length > 0) {
		
		var m = "Cannot unload schema, " + dependent.length + " schema" + (dependent.length == 1 ? '' : 's' ) + " depend" + (dependent.length == 1 ? 's' : '' ) + " on it: ";
		
		for(var i = 0 ; i < dependent.length; i++) {
			var dep = dependent[i];
			if( i > 0) m += ", ";
			m += dep.domainURI;
		}
		
		throw m;
		
	}
	
	
	this.dynamicDomains.splice(index, 1);
	
	
	//refresh
	var newList = [this.vitalCoreSchema, this.vitalDomainSchema];
	
	
	for(var i = 0 ; i < this.dynamicDomains.length; i++) {
		newList.push(this.dynamicDomains[i]);
	}
	
	
	
	tv4.dropSchemas();
	
	delete this.domainsMap[schemaURI];
	for( var i = 0 ; i < d.properties.length; i++) {
		var pURI = d.properties[i].URI;
		delete this.propertiesMap[pURI];
	}
	
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	
	this._load(newList);
	
}

/**
 * Reloads domain ontologies (schemas), drops all currently loaded
 */
/*
VitalServiceJson.prototype.reloadOntologies = function(domainsRL, successCB, errorCB) {

	var sList = [];
	
	for( var i = 0; i < VITAL_JSON_SCHEMAS.length; i++ ) {
		
		var schema = VITAL_JSON_SCHEMAS[i];
		
		//check if vital or vital-core
		for(var j = 0 ; j < schema.length; j++) {
			var s = schema[j];
			if(s.id == null) continue;
			
			if(s.id.indexOf('http://vital.ai/ontology/vital-core#') == 0 ||
					s.id.indexOf('http://vital.ai/ontology/vital#') == 0) {
				sList.push(schema);
				break;
			}
		}
		
	}
	
	VITAL_JSON_SCHEMAS.splice(0,VITAL_JSON_SCHEMAS.length);
	
	for( var i = 0; i < sList.length; i++ ) {
		VITAL_JSON_SCHEMAS.push(sList[i]);
	} 
	

	for(var i = 0 ; i < domainsRL.results.length; i ++) {
	
		var domainGO = domainsRL.results[i].graphObject;
		
		eval( domainGO.domainOWL );
		
		
	}
	
	console.log("new domains list: ", VITAL_JSON_SCHEMAS);

	this.reload();
	
}
*/


//vitaljs namespace
vitaljs = {};

/**
 * @type VitalService
 */
vitaljs.vitalservice = null;

vitaljs.getPropertyShortName = function(propertyURI) {
	
	var pName = null;
	
	var i = propertyURI.indexOf('#');
	if(i < 0) {
//		throw new RuntimeException("Not a property URI: ${propertyURI} - missing #");
		pName = propertyURI;
	} else {
		pName = propertyURI.substring(i+1);
	}
	
	
	if(pName.indexOf("has") == 0) {
		
		pName = pName.substring(3, 4).toLowerCase() + pName.substring(4);
		
	} else if(pName.indexOf("is") == 0) {
	
		pName = pName.substring(2, 3).toLowerCase() + pName.substring(3);
	
	} else {

		//don't trim
		
	}
	
	return pName;
	
}

vitaljs.graphObject = function(rawObject) {
	
	vitaljs._getImpl(rawObject);
	
	vitaljs._setImpl(rawObject);
	
	return rawObject;
	
}

vitaljs._getImpl = function(rawObject) {
	
	var t = typeof(rawObject.get);
	
	if(t == 'undefined') {
		
		rawObject.get = function(shortName) {

			if(shortName == null) throw ("shortName must not be null");
			
			if(typeof(shortName) != 'string') throw ("shortName must be a string");
			
			if(shortName.length == 0) throw ("shortName must not be empty");
			
			var type = this.type;
			
			if(type == null) throw ( "no type property in this graphobject" );
			
			if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
			
			var schema = VitalServiceJson.SINGLETON.loaded[type];
			
			if(schema == null) throw ( "schema not found for type: " + type );
			
			var props = schema.properties;
			
			var lastKey = null
			
			for (var key in props) {
				
				if (props.hasOwnProperty(key)) {
					
					if( shortName == vitaljs.getPropertyShortName(key)) {
						
						if(lastKey == null) {
							
							lastKey = key;
							
						} else {
							
							throw "property short name ambiguous: " + shortName + ", matching properties: " + lastKey + ", " + key;
							
						}
						
					}
					
				}
				
			}
			
			if(lastKey == null) throw ("no matching property for short name found: " + shortName + " type: " + type);
			
			return rawObject[lastKey];
			
		}
		
	} else {
		
		if( t != 'function' ) {
			throw "object.get already defined as " + t;
		}
	}
	
}

vitaljs._setImpl = function(rawObject) {
	
	var t = typeof(rawObject.set);
	
	if(t == 'undefined') {
		
		rawObject.set = function(shortName, value) {
			
			if(shortName == null) throw ("shortName must not be null");
			
			if(typeof(shortName) != 'string') throw ("shortName must be a string");
			
			if(shortName.length == 0) throw ("shortName must not be empty");
			
			var type = this.type;
			
			if(type == null) throw ( "no type property in this graphobject" );
			
			if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
			
			var schema = VitalServiceJson.SINGLETON.loaded[type];
			
			if(schema == null) throw ( "schema not found for type: " + type );
			
			var props = schema.properties;
			
			var lastKey = null
			
			for (var key in props) {
				
				if (props.hasOwnProperty(key)) {
					
					if( shortName == vitaljs.getPropertyShortName(key)) {
						
						if(lastKey == null) {
							
							lastKey = key;
							
						} else {
							
							throw "property short name ambiguous: " + shortName + ", matching properties: " + lastKey + ", " + key;
							
						}
						
					}
					
				}
				
			}
			
			if(lastKey == null) throw ("no matching property for short name found: " + shortName + " type: " + type);
			
			if(value != null) {
				this[lastKey] = value; 
			} else {
				delete this[lastKey];
			}
			
			
		}
		
	} else {
		
		if( t != 'function' ) {
			throw "object.set already defined as " + t;
		}
	}
	
}

vitaljs.isArray = function(someVar) {
	
	if( Object.prototype.toString.call( someVar ) === '[object Array]' ) {
	    return true;
	}
	
	return false;
	
}

vitaljs.getLoadedDomains = function() {

	if( VitalServiceJson.SINGLETON == null ) throw ( "vitaljs singleton not available" );
	
	return VitalServiceJson.SINGLETON.getLocalSchemaList();
	
}


vitaljs._toDomainGraphObject = function(schemaObj) {

	var d = {
		URI: schemaObj.domainURI
	};
	
	d[VitalServiceJson.VITAL_CORE_URI + "#hasName"] = schemaObj.name;
	
	return d;
	
}


/**
 * Lists parent domains of this domain object
 * @param domainObj
 * @returns list of parent domains for this domain
 */
vitaljs.getImportedDomains = function(domainObj) {

	if(domainObj == null) throw "null domainObj";
	if(domainObj.domainURI == null) throw "no domainURI property";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisDomain = s.domainsMap[domainObj.domainURI];
	if(thisDomain == null) throw ("domain not loaded, URI: " + domainObj.domainURI);
	
	var r = [];
	
	var parents = thisDomain.parents;
	for(var i = 0; i < parents.length; i++) {
		var parentURI = parents[i];
		var parentDomain = s.domainsMap[parentURI];
		if(parentDomain == null) throw("parent domain " + parentURI + " of " + domainObj.domainURI + " not found");
		
		r.push(parentDomain);
//		r.push(vitaljs._toDomainGraphObject(parentDomain));
		
	}
	
	return r;
	
}


/**
 * Lists all domains that depend on this one
 * @param domainObj
 * @returns list of all dependent domains
 */
vitaljs.getDependentDomains = function(domainObj) {
	

	if(domainObj == null) throw "null domainObj";
	if(domainObj.domainURI == null) throw "no domainURI property";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisDomain = s.domainsMap[domainObj.domainURI];
	if(thisDomain == null) throw ("domain not loaded, URI: " + domainObj.domainURI);

	var pool = [domainObj.domainURI];
	
	var processedURIs = [];
	var r = [];
	
	while(pool.length > 0) {
		
		var newPool = [];
		
		for(var i = 0 ; i < pool.length; i++) {
			
			var parentURI = pool[i];
			
			for( var j = 0 ; j < s.loaded.parents.length; j++) {
				
				var p = s.loaded.parents[j];
				
				if(p == parentURI && processedURIs.indexOf(p) < 0) {
					
					var d = s.domainsMap[p];
					
					if(d == null) throw ("runtime error: domain not found: " + p);
					
					processedURIs.push(p);
//					r.push(vitaljs._toDomainGraphObject(d));
					r.push(d);
					
					newPool.push(p);
					
				}
				
			}
			
		}
		
		pool = newPool;
		
	}
	
	return r;
	
}

/**
 * Returns the result list of all schemas available remotely
 * @returns array of DomainModel objects
 */
vitaljs.getSchemaList = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getSchemaList(successCB, errorCB);
}

/**
 * Returns dependencies of a schema, parents or all ancestors based on recursive flag
 * @returns array of DomainModel objects
 */
vitaljs.getDependenciesOfSchema = function(schemaName, recursive, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getDependenciesOfSchema(schemaName, recursive, successCB, errorCB);
}

/**
 * Returns an array of json schema objects, the original array is wrapped with {name:, URI:, schema: [] }, the order is preserved
 */
vitaljs.getSchemas = function(schemaNamesArray, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getSchemas(schemaNamesArray, successCB, errorCB);
}

/**
 * Loads given schema objects ( {name:, URI:, schema: [] } in the given order
 */
vitaljs.loadSchemas = function(jsonSchemasArray, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.loadSchemas(jsonSchemasArray, successCB, errorCB);
}

/**
 * Purges currently loaded domain schemas
 */
vitaljs.purgeSchemas = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.purgeSchemas(successCB, errorCB);
}

/**
 * Returns locally loaded domains
 */
vitaljs.getLocalSchemaList = function(successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.getLocalSchemaList(successCB, errorCB);
}

/**
 * Unloads schema
 */
vitaljs.unloadSchema = function(schemaURI, successCB, errorCB) {
	if(vitaljs.vitalservice == null) throw "active vitalservice instance not set"; 
	vitaljs.vitalservice.unloadSchema(schemaURI, successCB, errorCB);
}

/**
 * determines if thisClass is a subclass of thatClass
 * @param thisClass either class URI string or class object with URI property
 * @param thatClass either class URI string or class object with URI property 
 */
vitaljs.isSubclassOf = function(thisClass, thatClass) {
	
	if(thisClass == null) throw ("thisClass cannot be null");
	if(thatClass == null) throw ("thatClass cannot be null");
	
	var thisURI = null;
	var thatURI = null;
	
	if(typeof(thisClass) == 'string') {
		thisURI = thisClass;
	} else if(typeof(thisClass) == 'object') {
		thisURI = thisClass.URI;
		if(thisURI == null) throw "null thisClass.URI"; 
	}
	
	if(typeof(thatClass) == 'string') {
		thatURI = thatClass;
	} else if(typeof(thatClass) == 'object') {
		thatURI = thatClass.URI;
		if(thatURI == null) throw "null thatClass.URU";
	}
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisSchema = s.loaded[thisURI];
	if(thisSchema == null) throw "class not found: " + thisURI;
	
	var thatSchema = s.loaded[thatURI]
	if(thatSchema == null) throw "class not found: " + thatURI;
	
	var allSuperclasses = s.listSuperclasses(thisURI, [], false);

	if(allSuperclasses.indexOf(thatURI) >= 0) {
		return true;
	}
	
	return false;
	
}

/**
 * determines if thisClass is a superclass of thatClass
 * @param thisClass either class URI string or class object with URI property
 * @param thatClass either class URI string or class object with URI property
 * @returns true if this class is a superclass of that class
 */
vitaljs.isSuperclassOf = function(thisClass, thatClass) {
	//reverse it
	return vitaljs.isSubclassOf(thatClass, thisClass);
}

/**
 * determines if thisProperty is a subproperty of thatProperty
 * @param thisClass either property URI string or property object with URI property
 * @param thatClass either Property URI string or property object with URI property
 * @returns true if this property is a subproperty of that property
 */
vitaljs.isSubpropertyOf = function(thisProperty, thatProperty) {
	
	if(thisProperty == null) throw ("thisProperty cannot be null");
	if(thatProperty == null) throw ("thatProperty cannot be null");
	
	var thisURI = null;
	var thatURI = null;
	
	if(typeof(thisProperty) == 'string') {
		thisURI = thisProperty;
	} else if(typeof(thisProperty) == 'object') {
		thisURI = thisProperty.URI;
		if(thisURI == null) throw "null thisProperty.URI"; 
	}
	
	if(typeof(thatProperty) == 'string') {
		thatURI = thatProperty;
	} else if(typeof(thatProperty) == 'object') {
		thatURI = thatProperty.URI;
		if(thatURI == null) throw "null thatProperty.URU";
	}
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var thisSchema = s.propertiesMap[thisURI];
	if(thisSchema == null) throw "property not found: " + thisURI;
	
	var thatSchema = s.propertiesMap[thatURI]
	if(thatSchema == null) throw "property not found: " + thatURI;
	
	var allSubproperties = s.listSuperproperties(thisURI, [], false);

	if(allSubproperties.indexOf(thatURI) >= 0) {
		return true;
	}
	
	return false;
	
}

/**
 * determines if thisProperty is a superproperty of thatProperty
 * @param thisClass either property URI string or property object with URI property
 * @param thatClass either Property URI string or property object with URI property
 * @returns true is this property is a superproperty of that property 
 */
vitaljs.isSuperpropertyOf = function(thisProperty, thatProperty) {
	//reverse it
	return vitaljs.isSubpropertyOf(thatProperty, thisProperty);
}

/**
 * returns list of subclasses for given classObj
 * @param classObj object with class URI property
 * @param direct if true direct subclasses only
 * @returns list of subclasses
 */
vitaljs.getSubclasses = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );

	var allSubclasses = s.listSubclasses(classObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSubclasses.length; i++) {
		
		var u = allSubclasses[i];
		
		if(u == classObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * List super classes of given class
 * @param classObj with class URI property
 * @param direct if true only parent class will be returned
 */
vitaljs.getSuperclasses = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSuperclasses = s.listSuperclasses(classObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSuperclasses.length; i++) {
		
		var u = allSuperclasses[i];
		
		if(u == classObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * Returns list of subproperties for giver property
 * @param propertyObj object with property URI
 * @param direct if true returns only direct children
 * @returns list of subproperties
 */
vitaljs.getSubproperties = function(propertyObj, direct) {
	
	if(propertyObj == null) throw "propertyObj cannot be null";
	if(propertyObj.URI == null) throw "propertyObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSubproperties = s.listSubproperties(propertyObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSubproperties.length; i++) {
		
		var u = allSubproperties[i];
		
		if(u == propertyObj.URI) continue;
		
		r.push({URI: allSubproperties[i]});
		
	}
	
	return r;
	
}

/**
 * Returns list of superproperties for given property
 * @param propertyObj object with property URI
 * @param direct if true returns only parent property
 * @returns list of superproperties
 */
vitaljs.getSuperproperties = function(propertyObj, direct) {
	
	if(propertyObj == null) throw "propertyObj cannot be null";
	if(propertyObj.URI == null) throw "propertyObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var allSuperproperties = s.listSuperproperties(propertyObj.URI, [], direct);
	
	var r = [];
	
	for(var i = 0 ; i < allSuperproperties.length; i++) {
		
		var u = allSuperproperties[i];
		
		if(u == propertyObj.URI) continue;
		
		r.push({URI: u});
		
	}
	
	return r;
	
}

/**
 * Returns loaded classes optionally limited to a particular domain 
 * @param optionalDomainURIFilter
 * @returns list of class objects
 */
vitaljs.getLoadedClasses = function(optionalDomainURIFilter) {
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );
	
	var r = [];
	
	for(var key in s.domainsMap) {

		if ( ! s.domainsMap.hasOwnProperty(key) ) continue;
		
		var domain = s.domainsMap[key];
		
		if(optionalDomainURIFilter != null && optionalDomainURIFilter != domain.domainURI) {
			continue;
		}
		
		for(var i = 0 ; i < domain.schemas.length; i++) {
			
			r.push({URI: domain.schemas[i].id});
			
		}
		
		
	}
	
	return r;
	
}

/**
 * Returns properties associated with a class
 * @param classObj object with class URI
 * @param direct if true ignores properties defined in superclasses
 * @returns list of property objects
 */
vitaljs.getClassProperties = function(classObj, direct) {
	
	if(classObj == null) throw "classObj cannot be null";
	if(classObj.URI == null) throw "classObj.URI cannot be null";
	
	var s = VitalServiceJson.SINGLETON; 
	if( s == null ) throw ( "vitaljs singleton not available" );

	var domainURIs = null;
	
	if(direct) {
		domainURIs = [classObj.URI];
	} else { 
		domainURIs = s.listSuperclasses(classObj.URI, [], false);
	}
	
	var r = [];
	var alreadySet = {URI: true, type: true, types: true};
	
	
	for(var key in s.propertiesMap) {
		
		if ( ! s.propertiesMap.hasOwnProperty(key) )  continue;
		
		var propertyObj = s.propertiesMap[key];
		
		var domains = propertyObj.domainClassesURIs;
		
		for(var i = 0; i < domains.length; i++) {
			
			var domain = domains[i];

			if( domainURIs.indexOf(domain) >= 0 ) {
			
				r.push({URI: key});
				alreadySet[key] = true;
				
			}
			
		}
		
	}
	
	//cover the case with extended properties
	var schema = s.loaded[classObj.URI];
	if(schema != null) {
		var ps = schema.properties;
		for(var k in ps) {
			
			if ( ! ps.hasOwnProperty(k) )  continue;
			
			if(alreadySet[k] == true) continue;
			
			r.push({URI: k});
			
		}
		
	}
	
	return r;
	
}  

/**
 * Returns property metadata {"URI": ..., "domainClassesURIs": [ ... ], "shortName": ..., "multipleValues": boolean, "type" : "StringProperty"}
 * @param propertyURI 
 * @returns metadata or null
 */
vitaljs.getPropetyMetadata = function(propertyURI) {
	var s = VitalServiceJson.SINGLETON;
	return s.propertiesMap[propertyURI];
}