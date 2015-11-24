if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_nlp_0_2_300_schema = [ {
  "id" : "http://vital.ai/ontology/vital-nlp#Abbreviation",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Abbreviation",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Abbreviation",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation" ]
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
    "degree" : {
      "type" : "number"
    },
    "longForm" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "shortForm" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#AbbreviationInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#AbbreviationInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#AbbreviationInstance",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ]
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
    "degree" : {
      "type" : "number"
    },
    "longForm" : {
      "type" : "string"
    },
    "longFormEnd" : {
      "type" : "number"
    },
    "longFormStart" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "shortForm" : {
      "type" : "string"
    },
    "shortFormEnd" : {
      "type" : "number"
    },
    "shortFormStart" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Annotation",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Annotation",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Annotation",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Annotation" ]
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
    "annotationName" : {
      "type" : "string"
    },
    "annotationValue" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Content",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Content",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Content",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Content" ]
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
    "body" : {
      "type" : "string"
    },
    "contentType" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Document",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Document",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Document",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Document" ]
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
    "body" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "dmozPath" : {
      "type" : "string"
    },
    "extractedText" : {
      "type" : "string"
    },
    "extractedTitle" : {
      "type" : "string"
    },
    "lang" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "publicationDate" : {
      "type" : "number"
    },
    "sentimentMixed" : {
      "type" : "boolean"
    },
    "sentimentScore" : {
      "type" : "number"
    },
    "sourceDomain" : {
      "type" : "string"
    },
    "sourceName" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "title" : {
      "type" : "string"
    },
    "url" : {
      "type" : "string"
    },
    "urlRoot" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviation",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviation",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviation",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviation" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviationInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviationInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviationInstance",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasAbbreviationInstance" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasAnnotation",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasAnnotation",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasAnnotation",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Annotation" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasAnnotation" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasCategory",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasCategory",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasCategory",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Category" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasCategory" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasContent",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasContent",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasContent",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Content" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasContent" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEntity",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasEntity",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasEntity",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Entity" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEntity" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEntityInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasEntityInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasEntityInstance",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#Entity" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEntityInstance" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceElement",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceElement",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceElement",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceElement" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceRelationInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceRelationInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceRelationInstance",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceRelationInstance" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventElement",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventElement",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasEventElement",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#EventInstance" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEventElement" ]
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
    "eventRole" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasEventInstance",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEventInstance" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventTrigger",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasEventTrigger",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasEventTrigger",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#EventInstance" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEventTrigger" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasImageReference",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasImageReference",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasImageReference",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#ImageReference" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasImageReference" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Entity" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity" ]
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
    "normConfidence" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Topic" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic" ]
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
    "normConfidence" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasNounPhrase",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasNounPhrase",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasNounPhrase",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#NounPhrase" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasNounPhrase" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasPhraseNormalizedEntity",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasPhraseNormalizedEntity",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasPhraseNormalizedEntity",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Phrase" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasPhraseNormalizedEntity" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasPosTag",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasPosTag",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasPosTag",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#PosTag" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasPosTag" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasRelationElement",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasRelationElement",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasRelationElement",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#RelationInstance" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasRelationElement" ]
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
    "relationRole" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasRelationInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasRelationInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasRelationInstance",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#RelationInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasRelationInstance" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentence",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentence",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasSentence",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasSentence" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentenceAbbreviationInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentenceAbbreviationInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasSentenceAbbreviationInstance",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasSentenceAbbreviationInstance" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentenceEntityInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasSentenceEntityInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasSentenceEntityInstance",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasSentenceEntityInstance" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTagElement",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasTagElement",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasTagElement",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasTagElement" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTargetNode",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasTargetNode",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasTargetNode",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-core#VITAL_Node" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasTargetNode" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTextBlock",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasTextBlock",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasTextBlock",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasTextBlock" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasToken",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasToken",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasToken",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Token" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasToken" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTopic",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasTopic",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasTopic",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Topic" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasTopic" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasTranslation",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasTranslation",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasTranslation",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasTranslation" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Edge_hasVerbPhrase",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Edge_hasVerbPhrase",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Edge_hasVerbPhrase",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
  "destinationDomains" : [ "http://vital.ai/ontology/vital-nlp#VerbPhrase" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasVerbPhrase" ]
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
  "id" : "http://vital.ai/ontology/vital-nlp#Entity",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Entity",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Entity",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Entity" ]
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
    "category" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "extractSource" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "openCalaisURI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "relevance" : {
      "type" : "number"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
    },
    "wikipediaURL" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#EntityInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#EntityInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#EntityInstance",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ]
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
    "author" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "exactString" : {
      "type" : "string"
    },
    "length" : {
      "type" : "number"
    },
    "lengthInSentence" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "offset" : {
      "type" : "number"
    },
    "offsetInSentence" : {
      "type" : "number"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "sentimentMixed" : {
      "type" : "boolean"
    },
    "sentimentScore" : {
      "type" : "number"
    },
    "spanType" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance" ]
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
    "author" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "equivalenceType" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#EventInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#EventInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#EventInstance",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#EventInstance" ]
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
    "author" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "eventType" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#FlowPredictModel",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#FlowPredictModel",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#FlowPredictModel",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#FlowPredictModel" ]
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
    "degree" : {
      "type" : "number"
    },
    "modelPath" : {
      "type" : "string"
    },
    "modelType" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Image",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Image",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Image",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Image" ]
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
    "contentType" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "heightPx" : {
      "type" : "number"
    },
    "imageData" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "publicationDate" : {
      "type" : "number"
    },
    "timestamp" : {
      "type" : "number"
    },
    "title" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    },
    "widthPx" : {
      "type" : "number"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#ImageReference",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#ImageReference",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#ImageReference",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#ImageReference" ]
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
    "contentType" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "heightPx" : {
      "type" : "number"
    },
    "imageURL" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "publicationDate" : {
      "type" : "number"
    },
    "timestamp" : {
      "type" : "number"
    },
    "title" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    },
    "widthPx" : {
      "type" : "number"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#NormalizedEntity",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#NormalizedEntity",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#NormalizedEntity",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ]
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
    "category" : {
      "type" : "string"
    },
    "context" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "entityType" : {
      "type" : "string"
    },
    "heightPx" : {
      "type" : "number"
    },
    "imageDate" : {
      "type" : "number"
    },
    "imageURL" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "nameVariants" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "openCalaisURI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "shortname" : {
      "type" : "string"
    },
    "symbol" : {
      "type" : "string"
    },
    "ticker" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
    },
    "widthPx" : {
      "type" : "number"
    },
    "wikipediaURL" : {
      "type" : "string"
    },
    "wordnetURI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#NormalizedTopic",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#NormalizedTopic",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#NormalizedTopic",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ]
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
    "degree" : {
      "type" : "number"
    },
    "heightPx" : {
      "type" : "number"
    },
    "imageDate" : {
      "type" : "number"
    },
    "imageURL" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "nameVariants" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "openCalaisURI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "shortname" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
    },
    "widthPx" : {
      "type" : "number"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#NounPhrase",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#NounPhrase",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#NounPhrase",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#NounPhrase" ]
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
    "degree" : {
      "type" : "number"
    },
    "endTokenIndex" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "startTokenIndex" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Phrase",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Phrase",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Phrase",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Phrase" ]
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
    "degree" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#PosTag",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#PosTag",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#PosTag",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#PosTag" ]
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
    "confidence" : {
      "type" : "number"
    },
    "degree" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "tagValue" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#RelationInstance",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#RelationInstance",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#RelationInstance",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#RelationInstance" ]
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
    "author" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "relationType" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#Sentence",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Sentence",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Sentence",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ]
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
    "degree" : {
      "type" : "number"
    },
    "endPosition" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "posTagsConfidenceString" : {
      "type" : "string"
    },
    "posTagsValuesString" : {
      "type" : "string"
    },
    "sentenceNumber" : {
      "type" : "number"
    },
    "startPosition" : {
      "type" : "number"
    },
    "timestamp" : {
      "type" : "number"
    },
    "tokensPositionsString" : {
      "type" : "string"
    },
    "tokensTextString" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#TagElement",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#TagElement",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#TagElement",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ]
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
    "closingTag" : {
      "type" : "boolean"
    },
    "degree" : {
      "type" : "number"
    },
    "endPosition" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "openingTag" : {
      "type" : "boolean"
    },
    "pageRank" : {
      "type" : "number"
    },
    "standaloneTag" : {
      "type" : "boolean"
    },
    "startPosition" : {
      "type" : "number"
    },
    "tagValue" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#TargetNode",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#TargetNode",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#TargetNode",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ]
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
    "degree" : {
      "type" : "number"
    },
    "modelURI" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "targetDoubleValue" : {
      "type" : "number"
    },
    "targetScore" : {
      "type" : "number"
    },
    "targetStringValue" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#TextBlock",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#TextBlock",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#TextBlock",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ]
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
    "degree" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "text" : {
      "type" : "string"
    },
    "textBlockLength" : {
      "type" : "number"
    },
    "textBlockOffset" : {
      "type" : "number"
    },
    "timestamp" : {
      "type" : "number"
    },
    "transformationVector" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#Token",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Token",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Token",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Token" ]
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
    "degree" : {
      "type" : "number"
    },
    "endPosition" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "startPosition" : {
      "type" : "number"
    },
    "timestamp" : {
      "type" : "number"
    },
    "tokenText" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-nlp#Topic",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#Topic",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#Topic",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#Topic" ]
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
    "classifierName" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "openCalaisURI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "score" : {
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
  "id" : "http://vital.ai/ontology/vital-nlp#VerbPhrase",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-nlp#VerbPhrase",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-nlp#VerbPhrase",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-nlp#VerbPhrase" ]
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
    "degree" : {
      "type" : "number"
    },
    "endTokenIndex" : {
      "type" : "number"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "startTokenIndex" : {
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
} ];

 VITAL_JSON_SCHEMAS.push(vital_nlp_0_2_300_schema);