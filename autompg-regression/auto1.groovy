import org.example.autompg.domain.AutoMpg


INSTANTIATE {


	value app: "app"


	instance(AutoMpg.class) { AutoMpg a ->

		a.name = 'X Car'

		a.cylinders = 6
		
		a.displacement = 181.0
		
		a.horsepower = 110.0
		
		a.weight = 2945.0
		
		a.acceleration = 16.4
		
		a.modelYear = 82
		
		a.origin = 1

	}

}