var VITAL_JSON_SCHEMAS = [];

var vital_core_0_2_300_schema = [ {
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "aggregationType" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "value" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "endpointType" : {
      "type" : "string"
    },
    "endpointURL" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "password" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "username" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "appID" : {
      "type" : "string"
    },
    "backwardCompVersion" : {
      "type" : "string"
    },
    "defaultPackageValue" : {
      "type" : "string"
    },
    "domainOWL" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "organizationID" : {
      "type" : "string"
    },
    "preferred" : {
      "type" : "boolean"
    },
    "preferredImportVersions" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
    },
    "versionInfo" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edge_indexed" : {
      "type" : "boolean"
    },
    "edge_read" : {
      "type" : "number"
    },
    "edge_stored" : {
      "type" : "boolean"
    },
    "edge_write" : {
      "type" : "number"
    },
    "hyperEdge_indexed" : {
      "type" : "boolean"
    },
    "hyperEdge_read" : {
      "type" : "number"
    },
    "hyperEdge_stored" : {
      "type" : "boolean"
    },
    "hyperEdge_write" : {
      "type" : "number"
    },
    "hyperNode_indexed" : {
      "type" : "boolean"
    },
    "hyperNode_read" : {
      "type" : "number"
    },
    "hyperNode_stored" : {
      "type" : "boolean"
    },
    "hyperNode_write" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "node_indexed" : {
      "type" : "boolean"
    },
    "node_read" : {
      "type" : "number"
    },
    "node_stored" : {
      "type" : "boolean"
    },
    "node_write" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "properties_number_index_read" : {
      "type" : "number"
    },
    "properties_number_index_write" : {
      "type" : "number"
    },
    "properties_read" : {
      "type" : "number"
    },
    "properties_string_index_read" : {
      "type" : "number"
    },
    "properties_string_index_write" : {
      "type" : "number"
    },
    "properties_write" : {
      "type" : "number"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    },
    "URIProp" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "rdfContext" : {
      "type" : "string"
    },
    "rdfObject" : {
      "type" : "string"
    },
    "rdfPredicate" : {
      "type" : "string"
    },
    "rdfSubject" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "positiveResponse" : {
      "type" : "boolean"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    },
    "URIProp" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "catalogName" : {
      "type" : "string"
    },
    "endpointType" : {
      "type" : "string"
    },
    "endpointURL" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "password" : {
      "type" : "string"
    },
    "repositoryName" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "username" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "updatedTriplesCount" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "database" : {
      "type" : "string"
    },
    "endpointType" : {
      "type" : "string"
    },
    "endpointURL" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "password" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "username" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    },
    "URIProp" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "updatedRowsCount" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "uRIRef" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    },
    "URIProp" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "queryString" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "hyperEdgeDestination" : {
      "type" : "string"
    },
    "hyperEdgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "queryString" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "serializedJSON" : {
      "type" : "string"
    },
    "serializedRDF" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "queryString" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "queryString" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "edgeDestination" : {
      "type" : "string"
    },
    "edgeSource" : {
      "type" : "string"
    },
    "listIndex" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "appID" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "key" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "organizationID" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "readOnly" : {
      "type" : "boolean"
    },
    "segmentID" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "key" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "key" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "key" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "key" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "sessionID" : {
      "type" : "string"
    },
    "sessionType" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "transactionID" : {
      "type" : "string"
    },
    "transactionState" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
} ];

 VITAL_JSON_SCHEMAS.push(vital_core_0_2_300_schema);