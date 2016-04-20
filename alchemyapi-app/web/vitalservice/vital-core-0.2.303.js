var VITAL_JSON_SCHEMAS = [];

var vital_core_0_2_303_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-core",
  "name" : "vital-core-0.2.303",
  "vitalsignsVersion" : "0.2.303",
  "parents" : [ ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-core#AggregationResult",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#AggregationResult",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#AggregationResult",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#AggregationResult" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAggregationType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#DatabaseConnection",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#DatabaseConnection",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#DatabaseConnection",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isReadOnly" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Dataset",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Dataset",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Dataset",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Dataset" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasDateRetrieved" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSourceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSourceUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#DomainModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#DomainModel",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#DomainModel",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#DomainModel" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasBackwardCompVersion" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultPackageValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDomainOWL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDomainOWLHash" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPreferredImportVersions" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionInfo" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPreferred" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning",
    "parent" : "http://vital.ai/ontology/vital-core#VitalProvisioning",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdge_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasEdge_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasHyperEdge_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasHyperEdge_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasHyperNode_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasHyperNode_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasNode_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasNode_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_number_index_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_number_index_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_string_index_read" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_string_index_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProperties_write" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isEdge_indexed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isEdge_stored" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isHyperEdge_indexed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isHyperEdge_stored" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isHyperNode_indexed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isHyperNode_stored" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isNode_indexed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isNode_stored" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasApp",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasApp",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasApp",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalOrganization" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalApp" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasApp" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasAuthKey",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasAuthKey",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasAuthKey",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalApp", "http://vital.ai/ontology/vital-core#VitalOrganization", "http://vital.ai/ontology/vital-core#VitalServiceRootKey" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalAuthKey" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasAuthKey" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasChildCategory",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasChildCategory",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasChildCategory",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Category" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Category" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasChildCategory" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasDbConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasDbConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasDbConfig",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasDbConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasIndexConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasIndexConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasIndexConfig",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasIndexConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasOrganization",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasOrganization",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasOrganization",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalServiceRootKey" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalOrganization" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasOrganization" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasParentDomainModel",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasParentDomainModel",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasParentDomainModel",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasParentDomainModel" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasProvisioning",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasProvisioning",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasProvisioning",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalSegment" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalProvisioning" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasProvisioning" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasSegment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasSegment",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasSegment",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalApp" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalSegment" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasSegment" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasSession",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasSession",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalAuthKey" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalSession" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasSession" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#Edge_hasTransaction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#Edge_hasTransaction",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#Edge_hasTransaction",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VitalSession" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VitalTransaction" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#Edge_hasTransaction" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#GraphMatch",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#GraphMatch",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#GraphMatch",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#GraphMatch" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#RDFStatement",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#RDFStatement",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#RDFStatement",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRdfContext" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRdfObject" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRdfPredicate" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRdfSubject" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SparqlAskResponse",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#SparqlAskResponse",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#SparqlAskResponse",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#SparqlAskResponse" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPositiveResponse" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SparqlBinding",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#SparqlBinding",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#SparqlBinding",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#SparqlBinding" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SparqlDatabaseConnection",
    "parent" : "http://vital.ai/ontology/vital-core#DatabaseConnection",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#SparqlDatabaseConnection",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#SparqlDatabaseConnection",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#SparqlDatabaseConnection" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasCatalogName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRepositoryName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isReadOnly" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SparqlUpdateResponse",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#SparqlUpdateResponse",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#SparqlUpdateResponse",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#SparqlUpdateResponse" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdatedTriplesCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SqlDatabaseConnection",
    "parent" : "http://vital.ai/ontology/vital-core#DatabaseConnection",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#SqlDatabaseConnection",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#SqlDatabaseConnection",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#SqlDatabaseConnection" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDatabase" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isReadOnly" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SqlResultRow",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#SqlResultRow",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#SqlResultRow",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#SqlResultRow" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#SqlUpdateResponse",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#SqlUpdateResponse",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#SqlUpdateResponse",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#SqlUpdateResponse" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdatedRowsCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#URIReference",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#URIReference",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#URIReference",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#URIReference" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasURIRef" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Category",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_Category",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_Category",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_Category" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_Edge",
    "type" : "object",
    "sourceDomains" : [ ],
    "destinationDomains" : [ ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Event",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_Event",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_Event",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_Event" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_GraphQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_GraphQuery",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_GraphQuery",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_GraphQuery" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasQueryString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_HyperEdge",
    "type" : "object",
    "sourceDomains" : [ ],
    "destinationDomains" : [ ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_HyperEdge" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasHyperEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasHyperEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_HyperNode",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_HyperNode" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_Node",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_PathQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_PathQuery",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_PathQuery",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_PathQuery" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasQueryString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_PayloadNode",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_PayloadNode",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_PayloadNode",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_PayloadNode" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSerializedJSON" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSerializedRDF" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
    "type" : "object",
    "sourceDomains" : [ ],
    "destinationDomains" : [ ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_PeerEdge" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_Query",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_Query" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasQueryString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_SelectQuery",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Query",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_SelectQuery",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_SelectQuery",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_SelectQuery" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasQueryString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Edge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "type" : "object",
    "sourceDomains" : [ ],
    "destinationDomains" : [ ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalApp",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalApp",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalApp",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalApp" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalAuthKey",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalAuthKey" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalOrganization",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalOrganization",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalOrganization",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalOrganization" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalProvisioning",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalProvisioning",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalProvisioning",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalProvisioning" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalSegment",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalSegment",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalSegment",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalSegment" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSegmentID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isReadOnly" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceAdminKey",
    "parent" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceAdminKey",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceAdminKey",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceAdminKey" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasCatalogName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPoolMaxTotal" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRepositoryName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasServerURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAccessKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3AccessKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3BasePath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3Bucket" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3EndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasS3SecretKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSecretKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTablesPrefix" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isLocalEndpoint" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isS3LocalEndpoint" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasGraphQueries" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSelectQueries" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceKey",
    "parent" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceKey",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceKey",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceKey" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasRootPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceLuceneMemoryConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceLuceneMemoryConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceLuceneMemoryConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceLuceneMemoryConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceMockConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceMockConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceMockConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceMockConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServicePrimeConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServicePrimeConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServicePrimeConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServicePrimeConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceRootKey",
    "parent" : "http://vital.ai/ontology/vital-core#VitalAuthKey",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceRootKey",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceRootKey",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceRootKey" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceSaaSConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceSaaSConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceSaaSConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceSaaSConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceSparkConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceSparkConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceSparkConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceSparkConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig",
    "parent" : "http://vital.ai/ontology/vital-core#VitalServiceConfig",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalServiceSqlConfig",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConfigString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionError" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasConnectionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDbType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasDefaultSegmentName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEndpointURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPassword" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasPoolInitialSize" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasPoolMaxTotal" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTablesPrefix" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetAppID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTargetOrganizationID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#isPrimary" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalSession",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalSession",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalSession",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalSession" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasKey" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSessionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasSessionType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-core#VitalTransaction",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-core#VitalTransaction",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-core#VitalTransaction",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-core#VitalTransaction" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasTransactionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTransactionState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-core#hasAccessKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "accessKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasAggregationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#AggregationResult" ],
    "shortName" : "aggregationType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasAppID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#DomainModel", "http://vital.ai/ontology/vital-core#VitalApp", "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "appID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasBackwardCompVersion",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "backwardCompVersion",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasCatalogName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SparqlDatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig" ],
    "shortName" : "catalogName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasConfigString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "configString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasConnectionError",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "connectionError",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasConnectionState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "connectionState",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDatabase",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SqlDatabaseConnection" ],
    "shortName" : "database",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDateRetrieved",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#Dataset" ],
    "shortName" : "dateRetrieved",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDbType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "dbType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDefaultPackageValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "defaultPackageValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDefaultSegmentName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "defaultSegmentName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDomainOWL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "domainOWL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasDomainOWLHash",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "domainOWLHash",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEdgeDestination",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge" ],
    "shortName" : "edgeDestination",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEdgeSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge" ],
    "shortName" : "edgeSource",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEdge_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "edge_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEdge_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "edge_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEndpointType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection" ],
    "shortName" : "endpointType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasEndpointURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig", "http://vital.ai/ontology/vital-core#VitalServicePrimeConfig", "http://vital.ai/ontology/vital-core#VitalServiceSparkConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "endpointURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasGraphQueries",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ],
    "shortName" : "graphQueries",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperEdgeDestination",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_HyperEdge" ],
    "shortName" : "hyperEdgeDestination",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperEdgeSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_HyperEdge" ],
    "shortName" : "hyperEdgeSource",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperEdge_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperEdge_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperEdge_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperEdge_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperNode_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperNode_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasHyperNode_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperNode_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalAuthKey", "http://vital.ai/ontology/vital-core#VitalServiceConfig", "http://vital.ai/ontology/vital-core#VitalSession" ],
    "shortName" : "key",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasListIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge" ],
    "shortName" : "listIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "name",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasNode_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "node_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasNode_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "node_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasOntologyIRI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "ontologyIRI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasOrganizationID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#DomainModel", "http://vital.ai/ontology/vital-core#VitalOrganization", "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "organizationID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasPassword",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "password",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasPoolInitialSize",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "poolInitialSize",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasPoolMaxTotal",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "poolMaxTotal",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasPreferredImportVersions",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "preferredImportVersions",
    "multipleValues" : true,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_number_index_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_number_index_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_number_index_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_number_index_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_string_index_read",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_string_index_read",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_string_index_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_string_index_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProperties_write",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "properties_write",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasProvenance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "provenance",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasQueryString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Query" ],
    "shortName" : "queryString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRdfContext",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ],
    "shortName" : "rdfContext",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRdfObject",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ],
    "shortName" : "rdfObject",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRdfPredicate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ],
    "shortName" : "rdfPredicate",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRdfSubject",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#RDFStatement" ],
    "shortName" : "rdfSubject",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRepositoryName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SparqlDatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig" ],
    "shortName" : "repositoryName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasRootPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig" ],
    "shortName" : "rootPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3AccessKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3AccessKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3BasePath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3BasePath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3Bucket",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3Bucket",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3EndpointURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3EndpointURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasS3SecretKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3SecretKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSecretKey",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "secretKey",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSegmentID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalSegment" ],
    "shortName" : "segmentID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSelectQueries",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig" ],
    "shortName" : "selectQueries",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSerializedJSON",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_PayloadNode" ],
    "shortName" : "serializedJSON",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSerializedRDF",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_PayloadNode" ],
    "shortName" : "serializedRDF",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasServerURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig" ],
    "shortName" : "serverURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSessionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalSession" ],
    "shortName" : "sessionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSessionType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalSession" ],
    "shortName" : "sessionType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSourceName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#Dataset" ],
    "shortName" : "sourceName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasSourceUrl",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#Dataset" ],
    "shortName" : "sourceUrl",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTablesPrefix",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "tablesPrefix",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTargetAppID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "targetAppID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTargetOrganizationID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "targetOrganizationID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTimestamp",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "timestamp",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTransactionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalTransaction" ],
    "shortName" : "transactionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasTransactionState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalTransaction" ],
    "shortName" : "transactionState",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasURIRef",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#URIReference" ],
    "shortName" : "uRIRef",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUpdateTime",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "updateTime",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUpdatedRowsCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SqlUpdateResponse" ],
    "shortName" : "updatedRowsCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUpdatedTriplesCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SparqlUpdateResponse" ],
    "shortName" : "updatedTriplesCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUriGenerationStrategy",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "uriGenerationStrategy",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasUsername",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig", "http://vital.ai/ontology/vital-core#VitalServiceSqlConfig" ],
    "shortName" : "username",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#AggregationResult" ],
    "shortName" : "value",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasVersionIRI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "versionIRI",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#hasVersionInfo",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "versionInfo",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isActive",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VITAL_Edge", "http://vital.ai/ontology/vital-core#VITAL_HyperEdge", "http://vital.ai/ontology/vital-core#VITAL_HyperNode", "http://vital.ai/ontology/vital-core#VITAL_Node" ],
    "shortName" : "active",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isEdge_indexed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "edge_indexed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isEdge_stored",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "edge_stored",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isHyperEdge_indexed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperEdge_indexed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isHyperEdge_stored",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperEdge_stored",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isHyperNode_indexed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperNode_indexed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isHyperNode_stored",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "hyperNode_stored",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isLocalEndpoint",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "localEndpoint",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isNode_indexed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "node_indexed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isNode_stored",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DynamoDBVitalProvisioning" ],
    "shortName" : "node_stored",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isPositiveResponse",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#SparqlAskResponse" ],
    "shortName" : "positiveResponse",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isPreferred",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DomainModel" ],
    "shortName" : "preferred",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isPrimary",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceConfig" ],
    "shortName" : "primary",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isReadOnly",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#DatabaseConnection", "http://vital.ai/ontology/vital-core#VitalSegment" ],
    "shortName" : "readOnly",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-core#isS3LocalEndpoint",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-core#VitalServiceDynamoDBConfig" ],
    "shortName" : "s3LocalEndpoint",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_core_0_2_303_schema);