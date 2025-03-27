import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";
import '../css/Home.css'
function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const movies = [
        {id: 1, title: 'joh wick', release_date: '2020'},
        {id: 2, title: 'Forrest Gump', release_date: '2022'},
        {id: 3, title: 'Awe', release_date: '2023'},
        {id: 4, title: 'joh wick 4', release_date: '2025'},
    ]

    const handleSearch = (e)=> {
        e.preventDefault()
        alert(searchQuery)
    }


    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text' placeholder='Search for movies ...' className='search-input' value={searchQuery}
                onChange={(e) =>setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button'> Search </button>
            </form>
            <div className='movies-grid'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home