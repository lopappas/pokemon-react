import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
import PokeCard from "../components/PokeCard"
import SurprisePikachu from "../assets/surprise_pikachu.png"


function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites.length > 0) {
        console.log(favorites)
        return (
        <div className="favorites">
            <h2>Your Favorite Pokémon </h2>
            <div className="movies-grid">
                {favorites.map((pokemon) => (
                    <PokeCard pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>

        </div>
        )

    }


    return <div className="favorites-empty">
        <h2>No favorite Pokémon... yet</h2>
        <img src={SurprisePikachu} width={100}></img>
        <p>Start adding Pokémon to favorites and they will appear here</p>
    </div>
}

export default Favorites