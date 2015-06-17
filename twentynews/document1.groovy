import org.example.twentynews.domain.Message;


INSTANTIATE {
	
	value app: "twentynews"
	
	instance (Message.class, provides: 'doc1') { Message msg ->
		
		msg.subject = 'Windows XP'
		
		msg.body = 'Windows XP (codenamed Whistler)[5] is a personal computer operating system produced by Microsoft as part of the Windows NT family of operating systems. The operating system was released to manufacturing on August 24, 2001, and generally released for retail sale on October 25, 2001.'
		
	}
	
}