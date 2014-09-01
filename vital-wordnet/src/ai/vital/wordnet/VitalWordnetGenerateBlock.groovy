package ai.vital.wordnet

import ai.vital.common.uri.URIGenerator;
import ai.vital.domain.Edge_hasWordnetPointer
import ai.vital.domain.Edge_WordnetAlsoSee
import ai.vital.domain.Edge_WordnetAntonym
import ai.vital.domain.Edge_WordnetAttribute
import ai.vital.domain.Edge_WordnetCause
import ai.vital.domain.Edge_WordnetDerivationallyRelatedForm
import ai.vital.domain.Edge_WordnetDerivedFromAdjective
import ai.vital.domain.Edge_WordnetEntailment
import ai.vital.domain.Edge_WordnetMemberHolonym
import ai.vital.domain.Edge_WordnetPartHolonym
import ai.vital.domain.Edge_WordnetSubstanceHolonym
import ai.vital.domain.Edge_WordnetHypernym
import ai.vital.domain.Edge_WordnetInstanceHypernym
import ai.vital.domain.Edge_WordnetHyponym
import ai.vital.domain.Edge_WordnetInstanceHyponym
import ai.vital.domain.Edge_WordnetMemberMeronym
import ai.vital.domain.Edge_WordnetPartMeronym
import ai.vital.domain.Edge_WordnetSubstanceMeronym
import ai.vital.domain.Edge_WordnetParticiple
import ai.vital.domain.Edge_WordnetPertainym_PertainsToNouns
import ai.vital.domain.Edge_WordnetDomainOfSynset_Region
import ai.vital.domain.Edge_WordnetMemberOfThisDomain_Region
import ai.vital.domain.Edge_WordnetSimilarTo
import ai.vital.domain.Edge_WordnetDomainOfSynset_Topic
import ai.vital.domain.Edge_WordnetMemberOfThisDomain_Topic
import ai.vital.domain.Edge_WordnetDomainOfSynset_Usage
import ai.vital.domain.Edge_WordnetMemberOfThisDomain_Usage
import ai.vital.domain.Edge_WordnetVerbGroup
import ai.vital.domain.SynsetNode
import ai.vital.domain.AdjectiveSynsetNode
import ai.vital.domain.AdjectiveSynsetNode
import ai.vital.domain.AdverbSynsetNode
import ai.vital.domain.NounSynsetNode
import ai.vital.domain.VerbSynsetNode
import ai.vital.vitalservice.model.App;
import ai.vital.vitalsigns.utils.BlockCompactStringSerializer;
import edu.mit.jwi.Dictionary
import edu.mit.jwi.item.IPointer
import edu.mit.jwi.item.ISynset
import edu.mit.jwi.item.ISynsetID
import edu.mit.jwi.item.IWord
import edu.mit.jwi.item.POS
import edu.mit.jwi.item.Pointer

import java.util.Map.Entry

/**
 * Converts data from wordnet database into Vital block format
 * @author Derek
 *
 */
class VitalWordnetGenerateBlock {

	static void o(String m) {System.out.println(m);}
	
	static int nodes = 0;
	static int edges = 0;
	
	
	static App app
	
	static {
		app = new App(ID: 'vital', customerID: 'vital')
	}

	
	public static void main(String[] args) {
		
		o("Wordnet -> VitalBlock conversion script")
		
		if(args.length != 2) {
			o("usage: vitalwordnetgenerateblock <input_wordnet_database_location> <output_vital_block_file_path>")
			o("     vital block file name must end with .vital[.gz]")
			return
		}
		
		File wordnetPath = new File(args[0])
		o("Wordnet path: ${wordnetPath.absoluteFile}")
		
		File blockF = new File(args[1])
		o("Output vital block file: ${blockF.absolutePath}")
		

		if(blockF.exists()) {
			o("output file already exists! ${blockF.absolutePath}")
			return
		}
				
		
		BlockCompactStringSerializer writer = new BlockCompactStringSerializer(blockF)
		
		Dictionary dictionary = new Dictionary(wordnetPath)
		boolean opened = dictionary.open()
		if ( ! opened ) {
			o("couldn't open wordnet dictionary, path: ${wordnetPath.absolutePath}")
			return
		}
		
		
		Map<ISynsetID, String> synsetWords = createSynsetWords(dictionary, writer);
		
		linkWords(synsetWords, dictionary, writer);
		
		writer.close()
		
		dictionary.close()
		
		println "Synset Nodes written: ${nodes}"
		println "Edges written: ${edges}"
		
	} 
	
	static void linkWords(Map<ISynsetID, String> synsetWords, Dictionary _dict, BlockCompactStringSerializer writer) throws Exception {

		Map<IPointer, Class<? extends Edge_hasWordnetPointer>> type2Cls = new LinkedHashMap<IPointer, Class<? extends Edge_hasWordnetPointer>>();
		type2Cls.put(Pointer.ALSO_SEE, Edge_WordnetAlsoSee.class);
		type2Cls.put(Pointer.ANTONYM, Edge_WordnetAntonym.class);
		type2Cls.put(Pointer.ATTRIBUTE, Edge_WordnetAttribute.class);
		type2Cls.put(Pointer.CAUSE, Edge_WordnetCause.class);
		type2Cls.put(Pointer.DERIVATIONALLY_RELATED, Edge_WordnetDerivationallyRelatedForm.class);
		type2Cls.put(Pointer.DERIVED_FROM_ADJ, Edge_WordnetDerivedFromAdjective.class);
		type2Cls.put(Pointer.ENTAILMENT, Edge_WordnetEntailment.class);
		type2Cls.put(Pointer.HOLONYM_MEMBER, Edge_WordnetMemberHolonym.class);
		type2Cls.put(Pointer.HOLONYM_PART, Edge_WordnetPartHolonym.class);
		type2Cls.put(Pointer.HOLONYM_SUBSTANCE, Edge_WordnetSubstanceHolonym.class);
		type2Cls.put(Pointer.HYPERNYM, Edge_WordnetHypernym.class);
		type2Cls.put(Pointer.HYPERNYM_INSTANCE, Edge_WordnetInstanceHypernym.class);
		type2Cls.put(Pointer.HYPONYM, Edge_WordnetHyponym.class);
		type2Cls.put(Pointer.HYPONYM_INSTANCE, Edge_WordnetInstanceHyponym.class);
		type2Cls.put(Pointer.MERONYM_MEMBER, Edge_WordnetMemberMeronym.class);
		type2Cls.put(Pointer.MERONYM_PART, Edge_WordnetPartMeronym.class);
		type2Cls.put(Pointer.MERONYM_SUBSTANCE, Edge_WordnetSubstanceMeronym.class);
		type2Cls.put(Pointer.PARTICIPLE, Edge_WordnetParticiple.class);
		type2Cls.put(Pointer.PERTAINYM, Edge_WordnetPertainym_PertainsToNouns.class);
		type2Cls.put(Pointer.REGION, Edge_WordnetDomainOfSynset_Region.class);
		type2Cls.put(Pointer.REGION_MEMBER, Edge_WordnetMemberOfThisDomain_Region.class);
		type2Cls.put(Pointer.SIMILAR_TO, Edge_WordnetSimilarTo.class);
		type2Cls.put(Pointer.TOPIC, Edge_WordnetDomainOfSynset_Topic.class);
		type2Cls.put(Pointer.TOPIC_MEMBER, Edge_WordnetMemberOfThisDomain_Topic.class);
		type2Cls.put(Pointer.USAGE, Edge_WordnetDomainOfSynset_Usage.class);
		type2Cls.put(Pointer.USAGE_MEMBER, Edge_WordnetMemberOfThisDomain_Usage.class);
		type2Cls.put(Pointer.VERB_GROUP, Edge_WordnetVerbGroup.class);
		
		
		for(POS p : POS.values()) {
			
			for( Iterator<ISynset> synsetIterator = _dict.getSynsetIterator(p); synsetIterator.hasNext(); ) {
				
				ISynset key = synsetIterator.next();
				
				String uri = synsetWords.get(key.getID());
				if(uri == null) throw new Exception("No URI for synset: " + key.getID());
				
				for( Iterator<Entry<IPointer, List<ISynsetID>>> iterator2 = key.getRelatedMap().entrySet().iterator(); iterator2.hasNext(); ) {
					
					Entry<IPointer, List<ISynsetID>> next2 = iterator2.next();
					
					IPointer type = next2.getKey();
					List<ISynsetID> l = next2.getValue();
					if(l == null) continue;

					Class<? extends Edge_hasWordnetPointer> cls= type2Cls.get(type);
					if(cls == null) throw new Exception("No class for pointer type: " + type);
					
					for(ISynsetID id : l) {
						
						String destURI = synsetWords.get(id);
						
						if(destURI == null) throw new Exception("No URI for dest synset: " + id);
						
						Edge_hasWordnetPointer newEdge = cls.newInstance();
						newEdge.setURI(URIGenerator.generateURI(app, cls));
						newEdge.setSourceURI(uri);
						newEdge.setDestinationURI(destURI);
				
						writer.startBlock()
						writer.writeGraphObject(newEdge)
						writer.endBlock()
						
						edges++
						
					}
					
				}
				
			}
			
		}
		
		
	}

	static Map<ISynsetID, String> createSynsetWords(Dictionary _dict, BlockCompactStringSerializer writer) throws Exception {

		Map<ISynsetID, String> m = new LinkedHashMap<ISynsetID, String>();
		
		Map<POS, Class<? extends SynsetNode>> pos2Class = new HashMap<POS, Class<? extends SynsetNode>>();
		pos2Class.put(POS.ADJECTIVE, AdjectiveSynsetNode.class);
		pos2Class.put(POS.ADVERB, AdverbSynsetNode.class);
		pos2Class.put(POS.NOUN, NounSynsetNode.class);
		pos2Class.put(POS.VERB, VerbSynsetNode.class);
		
		for(POS p : POS.values()) {
			
			Class<? extends SynsetNode> cls = pos2Class.get(p);
			if(cls == null) throw new Exception("No vital class for pos: " + p);
			
			for( Iterator<ISynset> synsetIterator = _dict.getSynsetIterator(p); synsetIterator.hasNext(); ) {
				
				ISynset next = synsetIterator.next();
				
				String gloss = next.getGloss();
				//TODO
				
				// canonical name
				List<IWord> words = next.getWords();
			 
				String word_string = "";
				
				String first_word_str = "";
				
				boolean first_word = true;
				
				for(int j=0; j < words.size(); j++) {
					
					if(!first_word) {
						word_string = word_string + ", ";
					}
					
					String word = words.get(j).getLemma();
					
					   word = word.replaceAll("_", " ");
				 
					if(first_word) {
							first_word_str  = word;
					}
					   
					word_string = word_string + word;
					
					first_word = false;
				}
				
				String idPart = "${next.getPOS().getTag()}_${((ISynsetID)next.getID()).getOffset()}"
				
				SynsetNode sn = cls.newInstance();
				sn.setURI(URIGenerator.generateURI(app, cls));
				sn.setProperty("name", word_string);
				sn.setProperty("gloss", gloss);
				sn.setProperty("wordnetID", idPart);
				
				writer.startBlock()
				writer.writeGraphObject(sn)
				writer.endBlock()
				
				nodes++
				
				m.put(next.getID(), sn.getURI());
				
			}
			
		}
		
		return m;
	}
	
}
