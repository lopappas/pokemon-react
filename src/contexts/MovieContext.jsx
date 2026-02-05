import { useState, useEffect, useContext, createContext } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    //look inside local storage to see if we have any favorite movies
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    //anytime favorites state changes, update what we are storing in local storage
    //JSON.stringify(favorites) takes an array and converts it to string
    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }
 
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }


    //children of MovieContext can now access all values from MovieContext
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>

}