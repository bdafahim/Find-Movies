import {createContext, useState, useEffect, useContext} from 'react'

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavs = localStorage.getItem('favorites');
        return storedFavs ? JSON.parse(storedFavs) : [];
      });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);
    const addToFavorites = (movie) =>{
        setFavorites(prevState => [...prevState, movie]);
    }
    const removeFavorites = (movieId) =>{
        setFavorites(prevState => prevState.filter(movie => movie.id !== movieId))
    }
    const isFavorite = (movieId) =>{
        return favorites.some(movie => movie.id === movieId)
    }
    const value = {
        favorites,
        addToFavorites,
        removeFavorites,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}