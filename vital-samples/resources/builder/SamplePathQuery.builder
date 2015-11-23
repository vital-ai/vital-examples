import ai.vital.vitalsigns.model.Edge_hasChildCategory
import ai.vital.vitalsigns.model.VITAL_Category

PATH {
	
	value segments: [ 'categories' ]
	
	value maxdepth: 2
	
	ROOT {
		
		node_constraint { VITAL_Category.class }
		
		node_constraint { VITAL_Category.props().name.equalTo( 'ROOT' ) }
		
	}
	
	ARC {
		
		value direction: 'forward'
		
		edge_constraint { Edge_hasChildCategory.class }
		
	}
	
	
}