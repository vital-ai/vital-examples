package ai.vital.app.template

import ai.vital.vitalservice.VitalService

import ai.vital.vitalservice.factory.Factory


import ai.vital.vitalservice.query.ResultElement
import ai.vital.vitalservice.query.ResultList
import ai.vital.vitalservice.query.VitalPropertyConstraint
import ai.vital.vitalservice.query.VitalQueryContainer
import ai.vital.vitalservice.query.VitalSelectQuery
import ai.vital.vitalservice.query.VitalTypeConstraint
import ai.vital.vitalservice.segment.VitalSegment

import ai.vital.vitalservice.query.QueryPathElement
import ai.vital.vitalservice.query.VitalGraphQuery
import ai.vital.domain.*


class AppTemplate {

	public static void main(String[] args) {
		
		VitalService service = Factory.getVitalService()
		
		service.ping()
		
		// assuming wordnet data loaded into vitalservice segment "wordnet"
		
		
		String apple_uri = ""
		
		
		VitalSelectQuery sq = new VitalSelectQuery()
		sq.components = [
				new VitalTypeConstraint(NounSynsetNode.class),
				new VitalPropertyConstraint(NounSynsetNode.class, "name", "apple", VitalPropertyConstraint.Comparator.EQ_CASE_INSENSITIVE)
		]
		sq.type = VitalQueryContainer.Type.and
		
		sq.offset = 0
		sq.limit = 10
		sq.segments = [VitalSegment.withId('wordnet')]
		
		ResultList rl = service.selectQuery(sq)
		
		
		for(ResultElement r : rl.results) {
			
			apple_uri = r.graphObject.URI
			
			println(r.graphObject)
			
			//println ( r.graphObject.toJSON() )
			
		}
		
		
		VitalGraphQuery gq = new VitalGraphQuery()
		gq.rootUris = [apple_uri]
		gq.segments = [VitalSegment.withId('wordnet')]
		gq.pathsElements = []
		
		List edgeClasses = [
				Edge_WordnetAlsoSee.class,
				Edge_WordnetAntonym.class,
				Edge_WordnetAttribute.class,
				Edge_WordnetDerivationallyRelatedForm.class,
				Edge_WordnetDerivedFromAdjective.class,
				Edge_WordnetDomainOfSynset_Region.class,
				Edge_WordnetDomainOfSynset_Topic.class,
				Edge_WordnetDomainOfSynset_Usage.class,
				Edge_WordnetHypernym.class,
				Edge_WordnetHyponym.class,
				Edge_WordnetInstanceHypernym.class,
				Edge_WordnetInstanceHyponym.class,
				Edge_WordnetMemberHolonym.class,
				Edge_WordnetMemberMeronym.class,
				Edge_WordnetMemberOfThisDomain_Region.class,
				Edge_WordnetMemberOfThisDomain_Topic.class,
				Edge_WordnetMemberOfThisDomain_Usage.class,
				Edge_WordnetPartHolonym.class,
				Edge_WordnetParticiple.class,
				Edge_WordnetPartMeronym.class,
				Edge_WordnetPertainym_PertainsToNouns.class,
				Edge_WordnetSubstanceHolonym.class,
				Edge_WordnetSubstanceMeronym.class
		]
		
		for(Class edgeClass : edgeClasses) {
				gq.pathsElements.add([
						new QueryPathElement(edgeClass, null, QueryPathElement.Direction.forward)
				])
				gq.pathsElements.add([
						new QueryPathElement(edgeClass, null, QueryPathElement.Direction.reverse)
				])
		}
		
		
		rl = service.graphQuery(gq)
		
		for(ResultElement r : rl.results) {
			
			println(r.graphObject)
			
			//println ( r.graphObject.toJSON() )
				
		}
		
	}
		
		
		
			
	
	
}
