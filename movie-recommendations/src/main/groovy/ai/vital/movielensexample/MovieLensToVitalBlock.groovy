package ai.vital.movielensexample

import ai.vital.vitalsigns.block.BlockCompactStringSerializer
import java.io.OutputStream
import java.io.OutputStreamWriter
import java.util.Random
import java.io.InputStreamReader
import java.io.BufferedReader
import java.nio.charset.StandardCharsets
import java.util.HashMap
import org.movielens.domain.Edge_hasMovieRating
import org.movielens.domain.Movie
import org.movielens.domain.User
import java.util.ArrayList
import ai.vital.vitalsigns.VitalSigns
import ai.vital.vitalsigns.model.GraphObject
import java.util.Arrays
import java.util.LinkedHashMap
import ai.vital.vitalsigns.model.property.IProperty
import java.util.Collection
import java.util.Map.Entry
import java.util.zip.GZIPInputStream

class MovieLensToVitalBlock {

	def static NS = "http://vital.ai/movielens/"
	def static MOVIE_NS = NS + "movie/"
	def static USER_NS = NS + "user/"
	def static RATING_NS = NS + "rating/"
	def static EDGE_HAS_RATING_NS = NS + "edge_has_rating/"
	def static EDGE_HAS_DIRECT_RATING_NS = NS + "edge_has_direct_rating/"
	def static EDGE_HAS_RATED_MOVIE_NS = NS + "edge_has_rated_movie/"

	def static mode_movies = "movies"

	def static mode_users = "users"

	def static mode_predict_direct_edges = "predict-direct-edges"

	def static modesList = [ mode_movies, mode_users, mode_predict_direct_edges ]

	static void main(args) {

		def cli = new CliBuilder(usage: "convert_movielens_to_vitalblock [options]")
		cli.with {
			m longOpt: 'mode', "mode, one of " + modesList, args:1, required:true
			i longOpt: "input-dir", "input movielens directory, must contain movies.dat and ratings.dat", args: 1, required: true
			o longOpt: "output-block", "output vital block file .vital[.gz] or .vital.seq", args: 1, required: true
			ow longOpt: "overwrite", "overwrite output file if exists", args:0, required: false
			p longOpt: "percent", "optional output objects percent limit", args: 1, required: false
		}

		def options = cli.parse(args)
		if(!options) {
			return
		}

		String mode = options.m
		File inputPath = new File(options.i)
		File outputBlockPath = new File(options.o)
		boolean overwrite = options.ow ? true : false

		String percentValue = options.p ? options.p : null
		Integer percent = 100D
		if(percentValue != null && !percentValue.isEmpty()) {
			percent = Double.parseDouble(percentValue)
		}

		println "Mode: " + mode

		if(!modesList.contains(mode)) error("Unknown mode: " + mode + ", valid: " + modesList)

		println("Input path:  " + inputPath.toString())
		println("Output block path:  " + outputBlockPath.toString())
		println("Overwrite ? " + overwrite)
		println("Output docs percent: " + percent)

		if(percent <= 0D || percent > 100D) {
			error("percent value must be in (0; 100] range: " + percent)
			return
		}

		String outPath = outputBlockPath.toString()

		if(outPath.endsWith(".vital") || outPath.endsWith(".vital.gz")) {
			println("Output is a vital block file...")
		} else {
			error("Output block file name must end with .vital[.gz]")
		}

		boolean blockGzip = outPath.endsWith(".gz")

		if( ! inputPath.isDirectory() ) {
			error("Input path is not a directory: " + inputPath)
		}

		def moviesPath = new File(inputPath, "movies.dat");
		if( ! moviesPath.isFile() ) {
			error("Input movies path is not a file: " + moviesPath)
		}

		def ratingsPath = new File(inputPath, "ratings.dat")
		if( ! ratingsPath.isFile() ) {
			error("Input ratings path is not a file: " + ratingsPath);
		}

		if(outputBlockPath.exists()) {
			if(!overwrite) {
				error("Output block file path already exists, use --overwrite option - " + outputBlockPath)
			} else {
				if(!outputBlockPath.isFile()) {
					error("Output block file path exists but is not a file: " + outputBlockPath)
				}
			}
		}


		def movieID2Movie = new LinkedHashMap<Integer, Movie>()
		def userID2User = new LinkedHashMap<Integer, User>()

		String l = null;

		if( ! mode.equals(mode_users)) {

			println("Collecting movies list ...")

			def moviesReader = new BufferedReader(new InputStreamReader(new FileInputStream(moviesPath), StandardCharsets.UTF_8))

			l = moviesReader.readLine()
			while ( l != null ) {
				l = l.trim()
				if(!l.isEmpty()) {
					//MovieID::Title::Genres
					def record = l.split("::");
					def movieID = Integer.parseInt(record[0])
					def title = record[1]
					def movie = new Movie()
					movie.setURI(MOVIE_NS + movieID)
					movie.setProperty("name", title)
					if(movieID2Movie.containsKey(movieID)) error("Duplicate movie: " + movieID)
					movieID2Movie.put(movieID, movie)
				}

				l = moviesReader.readLine()
			}

			moviesReader.close()

			println("Movies count: " + movieID2Movie.size())
		} else {
			println("skipping movies collection")
		}



		def blockWriter = null

		def processed = 0;
		def skipped = 0;

		OutputStream fos = new FileOutputStream(outputBlockPath)

		if(blockGzip) {
			fos = new GZIPInputStream(fos)
		}

		blockWriter = new BlockCompactStringSerializer(new OutputStreamWriter(fos, "UTF-8"))

		def random = new Random(1000L)

		if(mode.equals(mode_movies)) {

			for(Entry<Integer, Movie> e : movieID2Movie.entrySet()) {

				def movie = e.getValue()

				blockWriter.startBlock()
				blockWriter.writeGraphObject(movie)
				blockWriter.endBlock()
				processed = processed + 1
			}
		} else {

			def ratingsReader = new BufferedReader(new InputStreamReader(new FileInputStream(ratingsPath), StandardCharsets.UTF_8.name()))

			l = ratingsReader.readLine()

			Integer lastUserID = null

			while( l != null) {

				l = l.trim()

				if(!l.isEmpty()) {

					def accept = true

					if(percent < 100D) {

						if(random.nextDouble() * 100D > percent) {
							accept = false
							skipped = skipped + 1
						}
					}

					if(accept) {

						//UserID::MovieID::Rating::Timestamp
						def record = l.split("::");

						def userID = Integer.parseInt(record[0])
						def movieID = Integer.parseInt(record[1])
						def rating = java.lang.Double.parseDouble(record[2])
						def timestampSeconds = java.lang.Long.parseLong(record[3])

						def user = userID2User.get(userID)
						if(user == null) {
							user = new User()
							user.setURI(USER_NS + userID)
							user.setProperty("name", "User " + userID)
							userID2User.put(userID, user)
						}


						if(mode.equals(mode_users)) {

							//continue

						} else {

							def movie = movieID2Movie.get(movieID)

							if(movie == null) error("Movie not found: " + movieID)


							def directEdge = new Edge_hasMovieRating()
							directEdge.setURI(EDGE_HAS_DIRECT_RATING_NS + userID + "_" + movieID)
							directEdge.addSource(user).addDestination(movie)
							directEdge.setProperty("rating", rating);
							directEdge.setProperty("timestamp", new java.lang.Long(timestampSeconds * 1000L).longValue());

							blockWriter.startBlock()
							blockWriter.writeGraphObject(directEdge)
							blockWriter.endBlock()

						}

						processed = processed + 1

					}
				}

				l = ratingsReader.readLine()
			}


			if(mode.equals(mode_users)) {


				for( Entry<Integer, User> e : userID2User.entrySet() ) {

					if(blockWriter != null) {
						blockWriter.startBlock()
						blockWriter.writeGraphObject(e.getValue())
						blockWriter.endBlock()

					}

				}

			}

		}

		blockWriter.close()

		println("DONE")
		println("processed: " + processed)
		println("skipped: " + skipped)


	}

	def static error( String msg ) {
		System.err.println(msg)
		System.exit(1)

	}

}