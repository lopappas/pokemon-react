import { Route } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import PokeCard from "../components/PokeCard"
import { useState, useEffect } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies, getPokemon, searchPokemons } from "../services/api"


function Pokemon() {

    //Movie State
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    // set to true since it should run immedietly on load
    const [loading, setLoading] = useState(true);  

    //Poke State
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                const retrievedPokemon = await getPokemon()
                setPokemons(retrievedPokemon)
            } catch (err) {
                console.log(err.message);
                setError("Failed to load pokemon 😟");
            }
            finally {  
                setLoading(false);
            }
        }

        loadPokemon();

    }, [])



    console.log("pokemon 0")
    console.log(pokemons)

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return //return nothing if search is just spaces
        if(loading) return //stops us from loading if we are already loading
        setLoading(true)

        try {
            const searchResults = await searchPokemons(searchQuery)
            setPokemons(searchPokemons)
            setError(null)

        } catch (err) {
            console.log(err)
            setError("Failed to search Pokemons...")  
        } finally {
            setLoading(false) //no matter what, we want loading to finish
        }
        setSearchQuery("");
    }


    // // Load movies
    // return <div className="home">
    //     <form onSubmit={handleSearch} className="search-form">

    //         <input 
    //         type="text" 
    //         placeholder="Search for movies..." 
    //         className="search-input"
    //         value={searchQuery}
    //         onChange={(e) => setSearchQuery(e.target.value)}
    //         />

    //         <button type="submit" className="search-button">Search</button>

    //     </form>

    //       {error && <div className="error-message">{error}</div>}


    //     {loading ? ( <div className="loading">Loading...</div> 
    //     ) : ( 
    //     <div className="movies-grid">
    //         {movies.map((movie) => (
    //             <MovieCard movie={movie} key={movie.id} />
    //         ))}
    //     </div>
    //     )}
    // </div>

    // Load Pokes
    return <div className="home">
        {/* <form onSubmit={handleSearch} className="search-form">

            <input 
            type="text" 
            placeholder="Search for Pokemons..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type="submit" className="search-button">Search</button>

        </form>

          {error && <div className="error-message">{error}</div>}
 */}

        {loading ? ( <div className="loading">Loading...</div> 
        ) : ( 
        <div className="movies-grid">
            {console.log("swag")}
            {console.log(pokemons)}
            {console.log(typeof(pokemons))}
            {pokemons.map((pokemon) => (
                <PokeCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
        )}
    </div>
}

export default Pokemon