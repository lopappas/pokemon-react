import { Route } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies, getPokemon } from "../services/api"


function Home() {

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


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err.message);
                setError("Failed to load movies 😟");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies(); //calls the function

    }, [])

    //console.log(movies[0])

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return //return nothing if search is just spaces
        if(loading) return //stops us from loading if we are already loading
        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)

        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")  
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
        <form onSubmit={handleSearch} className="search-form">

            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type="submit" className="search-button">Search</button>

        </form>

          {error && <div className="error-message">{error}</div>}


        {loading ? ( <div className="loading">Loading...</div> 
        ) : ( 
        <div className="movies-grid">
            {console.log("movies")}
            {console.log(typeof(movies))}
            {console.log(movies)}
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        )}
    </div>
}

export default Home