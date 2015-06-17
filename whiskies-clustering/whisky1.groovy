import org.example.whiskies.domain.Whisky


INSTANTIATE {


	value app: "app"


	instance(Whisky.class) { Whisky w ->

		w.malty = 2
		
		w.winey = 0
		
		w.smoky = 1
		
		w.nutty = 2
		
		w.honey = 1
		
		w.medicinal = 0
		
		w.spicy = 0
		
		w.floral = 2
		
		w.name = "Aultmore"
		
		w.body = 2
		
		w.fruity = 2
		
		w.sweetness = 2
		
		w.tobacco = 0
		
	}

}