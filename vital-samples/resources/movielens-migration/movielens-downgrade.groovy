import org.movielens.domain.User as NEW_User
import org.movielens.domain.v_1_0_0.User as OLD_User

import org.movielens.domain.Edge_hasMovieRating as NEW_Edge_hasMovieRating
import org.movielens.domain.v_1_0_0.Edge_hasMovieRating as OLD_Edge_hasMovieRating

DOWNGRADE {
    
    value oldOntologyFileName: "movielens-1.0.0.owl"
    
    downgrade( oldClass: OLD_User.class, newClass: NEW_User.class ) { u_new, u_old ->
    
        u_old.name = u_new.username
    
    }
    
    downgrade( oldClass: OLD_Edge_hasMovieRating.class, newClass: NEW_Edge_hasMovieRating.class ) { e_new, e_old  ->
    
        e_old.timestamp = e_new.timestamp
        e_old.sourceURI = e_new.sourceURI
        e_old.destinationURI = e_new.destinationURI
        
        e_old.rating = e_new.ratingNew
    
    }
    
}