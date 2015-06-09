package ai.vital.enrondata

import org.apache.commons.io.IOUtils;

import java.io.Reader;

import org.apache.james.mime4j.dom.TextBody;

import ai.vital.vitalsigns.uri.URIGenerator;
import ai.vital.vitalservice.model.App
import ai.vital.vitalsigns.block.BlockCompactStringSerializer;

import java.nio.file.Path
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.io.FileUtils;
import org.apache.james.mime4j.dom.Body
import org.apache.james.mime4j.dom.Message
import org.apache.james.mime4j.dom.address.Address
import org.apache.james.mime4j.dom.address.AddressList;
import org.apache.james.mime4j.dom.address.Mailbox;
import org.apache.james.mime4j.dom.address.MailboxList;
import org.apache.james.mime4j.message.MessageBuilder;
import org.apache.james.mime4j.stream.MimeConfig;
import org.example.enrondata.domain.Edge_hasBCCRecipient;
import org.example.enrondata.domain.Edge_hasCCRecipient
import org.example.enrondata.domain.Edge_hasDirectRecipient;
import org.example.enrondata.domain.Edge_hasRecipient;
import org.example.enrondata.domain.Edge_hasSender;
import org.example.enrondata.domain.EnronEmail;
import org.example.enrondata.domain.EnronPerson;

class EnronDataToVitalBlock {

	static void err(String e) { System.err.println(e); System.exit(1) }
	
	static App app = null
	
	static Pattern forwarded_startPattern = Pattern.compile("-{7,} Forwarded ");
	static Pattern forwarded_endPattern = Pattern.compile("-[\n-]{6,}");
	
	static class Recipient {
		String address
		boolean direct = false
		boolean cc = false
		boolean bcc = false
		public Recipient(String address) {
			this.address = address
		}
		
		@Override
		public int hashCode() {
			return address.hashCode() + ( this.direct ? 1 : 0 ) + (this.cc ? 2 : 0) + (this.bcc ? 4 : 0);
		}
		
		
	}
	
	static main(args) {
	
		
		def cli = new CliBuilder(usage: "convert_enrondata_to_vitalblock [options]")
		cli.with {
			i longOpt: "input-dir", "enron maildir path", args: 1, required: true
			d longOpt: "directories-index", "directories index file, will be created if does not exist", args: 1, required: true
			om longOpt: "output-messages", "output messages vital block file .vital[.gz]", args: 1, required: true
			op longOpt: "output-persons", "output persons vital block file .vital[.gz]", args: 1, required: true
			ow longOpt: "overwrite", "overwrite output files if exist", args:0, required: false
			max longOpt: "max-messages-per-inbox", "max messages per inbox limit, default 0 (none)", args: 1, required: false
		}

		def options = cli.parse(args)
		if(!options) {
			return
		}
		
		File enronMaildir = new File(options.i)
		println "enron maildir path: ${enronMaildir.absolutePath}"
		if(enronMaildir.name != 'maildir') err("enron dir must be maildir")
	
		File filesIndex = new File(options.d)
		println "files index file: ${filesIndex.absolutePath}"

		File outputMessagesFile = new File(options.om)
		println "output messages file: ${outputMessagesFile.absolutePath}"
		
		File outputPersonsFile = new File(options.op)
		println "output persons file: ${outputPersonsFile.absolutePath}"
		
		boolean overwrite = options.ow ? true : false
		println "overwrite output files ? ${overwrite}"
		
		Path basePath = enronMaildir.toPath()
		
		
		if(outputMessagesFile.exists()) {
			if(!overwrite) err("Output messages file already exists: ${outputMessagesFile.absolutePath}")
			println "output messages file will be overwritten: ${outputMessagesFile.absolutePath}"
		}
		
		if(outputPersonsFile.exists()) {
			if(!overwrite) err("Output persons file already exists: ${outputPersonsFile.absolutePath}")
			println "output persons file will be overwritten: ${outputPersonsFile.absolutePath}"
		}
		
		List<String> index = []
		
		Integer messages_per_mailbox = 0
		
		if(options.max) {
			messages_per_mailbox = Integer.parseInt(options.max)
		}
		
		println "messages per mailbox: ${messages_per_mailbox}"
		if(!filesIndex.exists()) {
			
			println "Generating directories index - index not found ..."
			
			
			processDirectory(basePath, enronMaildir, index);
			
			
			FileUtils.writeLines(filesIndex, 'UTF-8', index)
			
		} else {
		
			index = FileUtils.readLines(filesIndex, 'UTF-8')
			
		}
		
		println "Mailbox directories count: ${index.size()}"
				
		
		app = new App(ID: 'app', customerID: 'customer')
		

		MimeConfig config = MimeConfig.copy(MimeConfig.DEFAULT)
				.setMaxLineLen(100000)
				.setMaxHeaderLen(100000)
				.build();

		
		BlockCompactStringSerializer messagesWriter = new BlockCompactStringSerializer(outputMessagesFile)
		BlockCompactStringSerializer personsWriter = new BlockCompactStringSerializer(outputPersonsFile)
		
		Map<String, EnronPerson> personsMap = [:] 
		
		int trimmed = 0
		
		int rooms = 0
		int segments = 0
		int noDates = 0
		int noSenders = 0
		int noRecipients = 0
		int tooManysenders = 0
		int noText = 0
		int duplicateText = 0
		
//		SimpleDateFormat dateFormat = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z (z)")
		SimpleDateFormat dateFormat = new SimpleDateFormat("M/d/yyyy HH:mm:ss")
		dateFormat.setTimeZone(TimeZone.getTimeZone("America/New_York"))
		
		DecimalFormat df = new DecimalFormat('000')
		
		Map<Class<? extends Edge_hasRecipient>, Integer> edgesHistogram = [:]
		edgesHistogram.put( Edge_hasDirectRecipient.class, 0)
		edgesHistogram.put( Edge_hasBCCRecipient.class, 0)
		edgesHistogram.put( Edge_hasCCRecipient.class, 0)
		
		int c = 0
		
		int total = 0
		
		for(String mbox : index) {
			
			c++
			
			if(c % 100 == 0) println "Processing: ${c} of ${index.size()}"
			
			String[] cols = mbox.split("\\t")
			
			int initialCount = Integer.parseInt( cols[1] )
			
			File dir = new File(basePath.toFile(), cols[0])
			
			Set<String> bodies = new HashSet<String>()
			
			List<Message> messages = []
			
			Map<Message, String> msg2Text = [:]
			
			Map<Message, String> msg2LocalID = [:]
			
			Map<Message, Set<Recipient>> msg2Recipients = [:]
			
			for(File f : dir.listFiles()) {
				if(f.isFile()) {
					FileInputStream fis = new FileInputStream(f)
					Message msg = MessageBuilder.create().use(config).parse(fis).build();
					fis.close()
					
					
					if(msg.date == null) {
						noDates++
						continue
					}
					
					MailboxList from = msg.getFrom();
					
					if(from == null || from.size() == 0) {
						noSenders++;
						continue
					}
					
					if(from.size() > 1) {
						tooManysenders++
						continue
					}
					
					AddressList to = msg.getTo()
					
					Set<Recipient> emailRecipients = new HashSet<Recipient>()
					
					if(to != null){
						for(Address a : to) {
							if(a instanceof Mailbox) {
								Mailbox mb = a
								if(mb.address) {
									Recipient r = new Recipient(mb.address)
									r.direct = true
									emailRecipients.add(r)
								}
							}
						}
					}
					
					
					/*
					AddressList bcc = msg.getBcc()
					if(bcc != null) {
						for(Address a : bcc) {
							if(a instanceof Mailbox) {
								Mailbox mb = a
								if(mb.address) {
									Recipient r = new Recipient(mb.address)
									r.bcc = true
									emailRecipients.add(r)
								}
							}
						}
					}
					*/
					
					AddressList cc = msg.getCc()
					if(cc != null) {
						for(Address a : cc) {
							if(a instanceof Mailbox) {
								Mailbox mb = a
								if(mb.address) {
									Recipient r = new Recipient(mb.address)
									r.cc = true
									emailRecipients.add(r)
								}
							}
						}
					}
					
					if(emailRecipients.size() == 0) {
						noRecipients++;
						continue;
					}
					
					Mailbox mailbox = from.get(0);
				
					String senderAddress = mailbox.address 
										
					String txt = null
					Body body = msg.getBody();
					if(body instanceof TextBody) {
						Reader bodyReader = ((TextBody)body).getReader();
						txt = IOUtils.toString(bodyReader);
						bodyReader.close()
					} else {
						
					}
					
					if(txt != null) txt = txt.trim()
					
					if(txt == null || txt.isEmpty()) {
						noText++;
						continue
					}

					
					String emailTxt = txt
										
					messages.add(msg)
					msg2Text.put(msg, emailTxt)
					msg2Recipients.put(msg, emailRecipients)
					msg2LocalID.put(msg, f.name)
					
				}
				
			}
			
			
			//sort by date ascendingly
			messages.sort { Message m1, Message m2 ->
				Date d1 = m1.date
				if(d1 == null) d1 = new Date(0L)
				Date d2 = m2.date
				if(d2 == null) d2 = new Date(0L)
				return d1.compareTo(d2)
			}
			
			if(messages_per_mailbox.intValue() > 0 && messages.size() > messages_per_mailbox.intValue()) {
				messages = messages.subList(0, messages_per_mailbox )
				trimmed++;
			}
			
			
			
			//don't set bod
			// messages ids are unique in room
			int counter = 0
				
			for(Message m : messages) {
					
				String emailTxt = msg2Text.get(m)
							
				MailboxList from = m.getFrom();
					
				Mailbox mailbox = from.get(0);
					
				String senderAddress = mailbox.address
							
				EnronPerson sender = personsMap.get(senderAddress)
				
				String localID = msg2LocalID.get(m)			
				
				//cols[0].replace("/", "__") + "__" + localID
				EnronEmail email = new EnronEmail()
				email.URI = URIGenerator.generateURI(app, EnronEmail.class, cols[0].replace("/", "__") + "__" + localID)
				email.name = m.getMessageId()
				email.publicationDate = m.date
				email.body = emailTxt
				email.emailSubject = m.getSubject()
				
				
				messagesWriter.startBlock()			
				messagesWriter.writeGraphObject(email)
				
				if(sender == null) {
								
					sender = new EnronPerson()
					sender.URI = URIGenerator.generateURI(app, EnronPerson.class, URLEncoder.encode(senderAddress, 'UTF-8'))
					sender.name = senderAddress
					sender.emailAddress = senderAddress
					personsMap.put(senderAddress, sender)
					
							
				}
								
				Edge_hasSender senderEdge = new Edge_hasSender().addSource(email).addDestination(sender).generateURI(app)
				
				messagesWriter.writeGraphObject(senderEdge)
				
				Set<Recipient> recipientAddresses = msg2Recipients.get(m)
				
				for(Recipient recipientEl : recipientAddresses) {
					
					EnronPerson recipient = personsMap.get(recipientEl.address)
					if(recipient == null) {
						recipient = new EnronPerson()
						recipient.URI = URIGenerator.generateURI(app, EnronPerson.class, URLEncoder.encode(recipientEl.address, 'UTF-8'))
						recipient.name = recipientEl.address
						recipient.emailAddress = recipientEl.address
						personsMap.put(recipientEl.address, recipient)
					}

					Edge_hasRecipient rEdge = null
					
					if(recipientEl.direct) {
						rEdge = new Edge_hasDirectRecipient()
					} else if(recipientEl.bcc) {
						rEdge = new Edge_hasBCCRecipient()
					} else if(recipientEl.cc) {
						rEdge = new Edge_hasCCRecipient()
					} else {
						throw new RuntimeException("recipient type not set")
					}
					
					rEdge.addSource(email).addDestination(recipient).generateURI(app)
					
					messagesWriter.writeGraphObject(rEdge)
					
					edgesHistogram.put(rEdge.getClass(), edgesHistogram.get(rEdge.getClass()) + 1) 
					
				}
					
					
				messagesWriter.endBlock()
				
				total++
				
			}
			
		}
		
		messagesWriter.close()
		
		//write persons
		for(EnronPerson sender : personsMap.values() ) {
			
			personsWriter.startBlock()
			
			personsWriter.writeGraphObject(sender)
			
			personsWriter.endBlock()
			
		}
		
		personsWriter.close()
		
		println "trimmed: ${trimmed}"
		
		println "no dates: ${noDates}"
		println "no senders: ${noSenders}"
		println "tooManysenders : ${tooManysenders}"
		println "noText: ${noText}"
		println "duplicateText: ${duplicateText}"
		
		println "output messages count: ${total}"
		println "persons count: ${personsMap.size()}"	
		
		println "recipient edges histogram: ${edgesHistogram}"
		
		
	}
	
	static void processDirectory(Path basePath, File dir, List<String> index) {
		
		int files = 0;
		
		for(File f : dir.listFiles() ) {
			if(f.isDirectory()) {
				
				processDirectory(basePath, f, index)
				
			} else {
				files++;
			}
		}
		
		if(files > 0) {
			
			if('all_documents'.equals(dir.name) || 'discussion_threads'.equals(dir.name)) {
				return
			}
			
			String relativePath = basePath.relativize(dir.toPath()).toString().replace('\\', '/')
			index.add(relativePath + "\t" + files)
			
		}
		
	}

}
