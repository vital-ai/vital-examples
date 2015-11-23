import com.vitalai.domain.wordnet.AdjectiveSynsetNode

SELECT {
				
	value segments: [ "wordnet" ]
				
	value limit: 100
				
	node_constraint { AdjectiveSynsetNode.class }
				
	node_constraint { AdjectiveSynsetNode.props().name.contains_i("happy") }
			
}