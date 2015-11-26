if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_nlp_0_2_301_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-nlp",
  "name" : "vital-nlp-0.2.301",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasLongForm" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortForm" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasLongForm" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLongFormEnd" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasLongFormStart" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortForm" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortFormEnd" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortFormStart" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasAnnotationName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasAnnotationValue" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasContentType" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasDmozPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLang" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentimentScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceDomain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrlRoot" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isSentimentMixed" : {
        "type" : "boolean"
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasEventRole" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasNormConfidence" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasNormConfidence" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasRelationRole" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasRelevance" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasWikipediaURL" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasAuthor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExactString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasLengthInSentence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasOffsetInSentence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentimentScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSpanType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isSentimentMixed" : {
        "type" : "boolean"
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasAuthor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasEquivalenceType" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasAuthor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasEventType" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasModelPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasModelType" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasHeightPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageData" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWidthPx" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasContentType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasHeightPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWidthPx" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasContext" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasEntityType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasHeightPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasNameVariants" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortname" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSymbol" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTicker" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWidthPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasWikipediaURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWordnetURI" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasHeightPx" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasNameVariants" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasShortname" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasWidthPx" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasEndTokenIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartTokenIndex" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasConfidence" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTagValue" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasAuthor" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasRelationType" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasEndPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasPosTagsConfidenceString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPosTagsValuesString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentenceNumber" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTokensPositionsString" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTokensTextString" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasEndPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTagValue" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isClosingTag" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#isOpeningTag" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#isStandaloneTag" : {
        "type" : "boolean"
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasModelURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTargetDoubleValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTargetScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTargetStringValue" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTextBlockLength" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTextBlockOffset" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTransformationVector" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasEndPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartPosition" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasTokenText" : {
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasClassifierName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasScore" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasEndTokenIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasStartTokenIndex" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasAnnotationName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Annotation" ],
    "shortName" : "annotationName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasAnnotationValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Annotation" ],
    "shortName" : "annotationValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasAuthor",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance", "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance", "http://vital.ai/ontology/vital-nlp#EventInstance", "http://vital.ai/ontology/vital-nlp#RelationInstance" ],
    "shortName" : "author",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasBody",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Content", "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "body",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasCategory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity", "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "category",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasClassifierName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Topic" ],
    "shortName" : "classifierName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasConfidence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#PosTag" ],
    "shortName" : "confidence",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasContentType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Content", "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference" ],
    "shortName" : "contentType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasContext",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "context",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasDmozPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "dmozPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEndPosition",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence", "http://vital.ai/ontology/vital-nlp#TagElement", "http://vital.ai/ontology/vital-nlp#Token" ],
    "shortName" : "endPosition",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEndTokenIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NounPhrase", "http://vital.ai/ontology/vital-nlp#VerbPhrase" ],
    "shortName" : "endTokenIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEntityType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "entityType",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEquivalenceType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EquivalenceRelationInstance" ],
    "shortName" : "equivalenceType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEventRole",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasEventElement" ],
    "shortName" : "eventRole",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasEventType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EventInstance" ],
    "shortName" : "eventType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasExactString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "exactString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasExtractSource",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity" ],
    "shortName" : "extractSource",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasExtractedText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "extractedText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasExtractedTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "extractedTitle",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasHeightPx",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference", "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "heightPx",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasImageData",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Image" ],
    "shortName" : "imageData",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasImageDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "imageDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#ImageReference", "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "imageURL",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLang",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "lang",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLength",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "length",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLengthInSentence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "lengthInSentence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLongForm",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation", "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "longForm",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLongFormEnd",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "longFormEnd",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasLongFormStart",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "longFormStart",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasModelPath",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#FlowPredictModel" ],
    "shortName" : "modelPath",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasModelType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#FlowPredictModel" ],
    "shortName" : "modelType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasModelURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "shortName" : "modelURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasNameVariants",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "nameVariants",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasNormConfidence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity", "http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic" ],
    "shortName" : "normConfidence",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasOffset",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "offset",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasOffsetInSentence",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "offsetInSentence",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasOpenCalaisURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity", "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic", "http://vital.ai/ontology/vital-nlp#Topic" ],
    "shortName" : "openCalaisURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasPosTagsConfidenceString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "posTagsConfidenceString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasPosTagsValuesString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "posTagsValuesString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasPublicationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference" ],
    "shortName" : "publicationDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasRelationRole",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Edge_hasRelationElement" ],
    "shortName" : "relationRole",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasRelationType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#RelationInstance" ],
    "shortName" : "relationType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasRelevance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity" ],
    "shortName" : "relevance",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Topic" ],
    "shortName" : "score",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSentenceNumber",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "sentenceNumber",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSentimentScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "sentimentScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasShortForm",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Abbreviation", "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "shortForm",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasShortFormEnd",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "shortFormEnd",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasShortFormStart",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#AbbreviationInstance" ],
    "shortName" : "shortFormStart",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasShortname",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "shortname",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSourceDomain",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "sourceDomain",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSourceName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "sourceName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSpanType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "spanType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasStartPosition",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence", "http://vital.ai/ontology/vital-nlp#TagElement", "http://vital.ai/ontology/vital-nlp#Token" ],
    "shortName" : "startPosition",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasStartTokenIndex",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NounPhrase", "http://vital.ai/ontology/vital-nlp#VerbPhrase" ],
    "shortName" : "startTokenIndex",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasSymbol",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "symbol",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTagValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#PosTag", "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "shortName" : "tagValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTargetDoubleValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "shortName" : "targetDoubleValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTargetScore",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "shortName" : "targetScore",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTargetStringValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TargetNode" ],
    "shortName" : "targetStringValue",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "shortName" : "text",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTextBlockLength",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "shortName" : "textBlockLength",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTextBlockOffset",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "shortName" : "textBlockOffset",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTicker",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "ticker",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTitle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference" ],
    "shortName" : "title",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTokenText",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Token" ],
    "shortName" : "tokenText",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTokensPositionsString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "tokensPositionsString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTokensTextString",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Sentence" ],
    "shortName" : "tokensTextString",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasTransformationVector",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TextBlock" ],
    "shortName" : "transformationVector",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasUrl",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "url",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasUrlRoot",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "shortName" : "urlRoot",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasWidthPx",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Image", "http://vital.ai/ontology/vital-nlp#ImageReference", "http://vital.ai/ontology/vital-nlp#NormalizedEntity", "http://vital.ai/ontology/vital-nlp#NormalizedTopic" ],
    "shortName" : "widthPx",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasWikipediaURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Entity", "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "wikipediaURL",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#hasWordnetURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#NormalizedEntity" ],
    "shortName" : "wordnetURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#isClosingTag",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "shortName" : "closingTag",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#isOpeningTag",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "shortName" : "openingTag",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#isSentimentMixed",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#Document", "http://vital.ai/ontology/vital-nlp#EntityInstance" ],
    "shortName" : "sentimentMixed",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-nlp#isStandaloneTag",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-nlp#TagElement" ],
    "shortName" : "standaloneTag",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_nlp_0_2_301_schema);