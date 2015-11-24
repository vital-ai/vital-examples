if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var movielens_1_0_0_schema = [ {
  "id" : "http://vital.ai/ontology/movielens#Edge_hasMovieRating",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/movielens#Edge_hasMovieRating",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/movielens#Edge_hasMovieRating",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/movielens#User" ],
  "destinationDomains" : [ "http://vital.ai/ontology/movielens#Movie" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/movielens#Edge_hasMovieRating" ]
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
    "rating" : {
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
  "id" : "http://vital.ai/ontology/movielens#Edge_hasTag",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/movielens#Edge_hasTag",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/movielens#Edge_hasTag",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/movielens#User" ],
  "destinationDomains" : [ "http://vital.ai/ontology/movielens#Tag" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/movielens#Edge_hasTag" ]
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
  "id" : "http://vital.ai/ontology/movielens#Edge_hasTaggedMovie",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_PeerEdge",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/movielens#Edge_hasTaggedMovie",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/movielens#Edge_hasTaggedMovie",
  "type" : "object",
  "sourceDomains" : [ "http://vital.ai/ontology/movielens#Tag" ],
  "destinationDomains" : [ "http://vital.ai/ontology/movielens#Movie" ],
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/movielens#Edge_hasTaggedMovie" ]
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
  "id" : "http://vital.ai/ontology/movielens#Movie",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/movielens#Movie",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/movielens#Movie",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/movielens#Movie" ]
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
    "genres" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
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
  "id" : "http://vital.ai/ontology/movielens#Tag",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/movielens#Tag",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/movielens#Tag",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/movielens#Tag" ]
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
    "tagText" : {
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
  "id" : "http://vital.ai/ontology/movielens#User",
  "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/movielens#User",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/movielens#User",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/movielens#User" ]
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
} ];

 VITAL_JSON_SCHEMAS.push(movielens_1_0_0_schema);