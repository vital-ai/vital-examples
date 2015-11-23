import com.vitalai.domain.wordnet.SynsetNode

GRAPH {
	
	value segments: [ "wordnet" ]
	
	value inlineObjects: true
	
	ARC {
		
		// bind this node to name "node1"
		node_bind { "node1" }
		
		// include subclasses of SynsetNode: Noun, Verb, Adjective, Adverb
		node_constraint { SynsetNode.expandSubclasses(true) }
				
		node_constraint { SynsetNode.props().name.contains_i("happy") }

		ARC {
		
			// bind the node and edge to names "node2" and "edge"
			edge_bind { "edge" } 
			node_bind { "node2" } 
		}
			
	}
}