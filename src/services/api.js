const API_KEY = "25e4b544ecbd68a9c7c5465abd3207de"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {

    //The request we send to the movie db. The function will "await here untill it gets the response"
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)

    //await until the response.json is retrieved.
    const data = await response.json()
    console.log(data)

    return data.results
};


export const searchMovies = async (query) => {
    //The request we send to the movie db. The function will "await here untill it gets the response"
    //encodeURIComponent on query makes the query obey URI (the parent of URLs) rules so it actually gets read correctly as text instead of url commands like &, =, or /
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)

    //await until the response.json is retrieved.
    const data = await response.json()
    
    return data.results
};


export const getPokemon = async () => {

    const pokeData = new Array();

    for (let i = 1; i < 152; i++) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)

        const data = await response.json()
        console.log(data)
        //console.log(data.sprites.front_default)

        const pokemon = {
            id: data.id,
            name: data.name,
            sprite: data.sprites.front_default
        }

        pokeData.push(pokemon)

    }

    return pokeData

};

export const searchPokemons = async (query) => {
    //The request we send to the movie db. The function will "await here untill it gets the response"
    //encodeURIComponent on query makes the query obey URI (the parent of URLs) rules so it actually gets read correctly as text instead of url commands like &, =, or /
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    //await until the response.json is retrieved.
    const data = await response.json()
    
    return data.results
};

