/**
 * VitalService JSON submodule - validates the messages and transferred objects using json schema
 * TODO - all service objects validation
 */
VitalServiceJson = function() {
	
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
	
	var sFiles = [];
	
	
	for(var i = 0 ; i < VITAL_JSON_SCHEMAS.length; i++) {
		
		var schema = VITAL_JSON_SCHEMAS[i];
		
		var schemaURI = this.getSchemaURI(schema);
		
		var name = 'static-domain-' + sFiles.length;
		
		var wrapped = {name: name, URI: schemaURI, schema: schema};
		
		if(schemaURI == 'http://vital.ai/ontology/vital-core' ) {
			this.vitalCoreSchema = wrapped;
		} else if(schemaURI == 'http://vital.ai/ontology/vital') {
			this.vitalDomainSchema = wrapped;
		} else {
			this.dynamicDomains.push(wrapped);
		}
		
		sFiles.push(wrapped);
	}
	
	
	if(this.vitalCoreSchema == null) {
		alert("No vital core schema loaded");
	}
	
	if(this.vitalDomainSchema == null) {
		alert("No vital domain schema loaded");
	}
	
	
	for(var i = 0 ; i < VitalServiceJson.customOntologies.length; i++) {
		var schema = VitalServiceJson.customOntologies[i];
		
		var schemaURI = this.getSchemaURI(schema);
		
		var name = 'static-domain-' + sFiles.length;
		
		var wrapped = {name: name, URI: schemaURI, schema: schema};
		
		this.dynamicDomains.push(wrapped);
		
		sFiles.push(wrapped);
		
	}
	
	this._load(sFiles);
	
}

VitalServiceJson.prototype._load = function(sFiles) {
	

	console.log("schemas count: ", sFiles.length);
	
	var newLoaded = {};
	
	for(var i = 0 ; i < sFiles.length; i++) {
		
		var schemas = sFiles[i].schema;
		
		for(var j = 0 ; j < schemas.length; j++) {
			
			var schema = schemas[j];
			
			var extendsURI = schema['extends'];
			
			if(extendsURI != null) {
				
//				console.log("Extension to ", extendsURI);
				
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
				
//				console.log("Loading schema ", uri);
				
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
		var classHierarchy = this.listSubclasses(key, [])
		
		if(classHierarchy.indexOf('http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject') >= 0) {
			
			if(this.dynamicPropertiesClasses.indexOf(key) < 0) {
				this.dynamicPropertiesClasses.push(key);
			}
			
		}
		
	}
	
	console.log("dynamic properties classes: ", this.dynamicPropertiesClasses);
	console.log("loaded classes: ", this.loaded);
	
	
}

VitalServiceJson.prototype.listSubclasses = function(thisClass, results) {
	
	results.push(thisClass)
	
	var obj = this.loaded[thisClass]
	
	var parent = obj['parent'];
	
	if(parent != null) {
		
		results = this.listSubclasses(parent, results)
		
	} 
	return results
	
}

VitalServiceJson.customOntologies = [];

/**
 * Validates vitalservice json response object
 * returns errorMessage or null if ok
 */
VitalServiceJson.prototype.validateResponse = function(response) {

	if(response == null) return 'null response object - nothing to validate';
	
	//only result list
	if( response.type != 'ResultList' ) {
		return;
	} 
	
	if( response.results == null ) return null;
	
	for(var i = 0 ; i < response.results.length; i++) {
		
		var resultElement = response.results[i];
		
		var graphObject = resultElement.graphObject;

		if(graphObject.type == null) return "Graph object without type!";

		if(this.dynamicPropertiesClasses.indexOf(graphObject.type) >= 0) {
			//dynamic properties objects are allowed
			continue;
		}
		
		var schema = this.loaded[graphObject.type]
		
		if(schema == null) return "No schema found for graph object type: " + graphObject.type; 
		
		
		var valid = tv4.validate(graphObject, schema);
		//console.log("Object valid ? " + valid, obj);
		
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
	}
	
	console.log("Validation passed, checked " + response.results.length + " objects");
    
    return null;

	
}


VitalServiceJson.prototype.loadSchemas = function(schemasArray) {
	
	var filtered = [];
	
	for(var si = 0 ; si < schemasArray.length; si++) {
		
		var schemaObj = schemasArray[si];
		
		var loadedAlready = false;
		
		for( var i = 0 ; i < this.dynamicDomains.length; i ++ ) {
			if(this.dynamicDomains[i].URI == schemaObj.URI) {
				loadedAlready = true;
				break;
			}
		}
		
		if(loadedAlready) {
			console.warn("Schema already loaded: " + schemaObj.URI);
			continue;
		}
		
		filtered.push(schemaObj);
		
		this.dynamicDomains.push(schemaObj);
		
	}
	
	this._load(filtered);
	
}


VitalServiceJson.prototype.purgeSchemas = function(schemaArray) {
	
	this.dynamicDomains = [];
	this.loaded = {};
	this.dynamicPropertiesClasses = [];
	
	tv4.dropSchemas();

	
	this._load([this.vitalCoreSchema, this.vitalDomainSchema]);
	
	
}

VitalServiceJson.prototype.getLocalSchemaList = function() {
	return this.dynamicDomains;
}

VitalServiceJson.prototype.unloadSchema = function(schemaURI) {
	
	var d = null;
	var index = -1;
	//dependent
	var dependent = [];
	
	for(var i = 0 ; i < this.dynamicDomains.length; i++) {
		
		var _d = this.dynamicDomains[i];
		
		if(_d.URI == schemaURI) {
			d = _d;
			index = i;
		} else {

			for(var j = 0; j < _d.schema.length; j++) {
				
				var s = _d.schema[j];
				
				if(s.id == null) continue;
				
				var p = s.parent;
				
				//starts with
				if(p != null && p.indexOf(schemaURI + '#') == 0) {
					dependent.push(_d);
					break;
				}
				
				
			}
			
		}
		
	}
	
	if(d == null) throw "schema with URI not found: " + schemaURI;
	
	if(dependent.length > 0) {
		
		var m = "Cannot unload schema, " + dependent.length + " schema" + (dependent.length == 1 ? '' : 's' ) + " depend" + (dependent.length == 1 ? 's' : '' ) + " on it: ";
		
		for(var i = 0 ; i < dependent.length; i++) {
			var dep = dependent[i];
			if( i > 0) m += ", ";
			m += dep.URI;
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
	
	this.loaded = {};
	
	this.dynamicPropertiesClasses = [];
	
	
	this._load(newList);
	
}

/**
 * an utility method that determines the schema URI
 */
VitalServiceJson.prototype.getSchemaURI = function(schemaArray) {

	var uri = null;
	
	for( var i = 0; i < schemaArray.length; i++ ) {
		var s = schemaArray[i];
		if(s.id == null) continue;
		uri = s.id;
		break;
	}
	
	if(uri == null) {
		alert("Couldn't determine schema URI");
	} else {
		
		var i = uri.indexOf('#');
		if(i > 0) {
			uri = uri.substring(0, i);
		}
	}
	
	return uri;
	
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
		
		alert(domainGO.domainOWL );
		
		eval( domainGO.domainOWL );
		
		
	}
	
	console.log("new domains list: ", VITAL_JSON_SCHEMAS);

	this.reload();
	
}
*/
