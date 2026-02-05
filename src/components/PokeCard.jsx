import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

function PokeCard({pokemon}) {

    //MovieCard is created with all of these states grabbed from useMovieContext
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(pokemon.id);

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(pokemon.id)
        else addToFavorites(pokemon)
        //alert("Clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`${pokemon.sprite}`}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>   
            </div>
        </div>
        <div className="movie-info">
            <h3>{pokemon.name}</h3>
            {/* <p>{pokemon.release_date?.split("-")[0]}</p> */}
        </div>
    </div>

}

export default PokeCard; 