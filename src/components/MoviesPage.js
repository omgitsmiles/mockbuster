import React, { useState } from "react";
import MovieCard from "./MovieCard";
import TextField from '@mui/material/TextField';


function MoviesPage({ movies, setCart, cart }) {
    const [search, setSearch] = useState("")

    const filterSearch = movies.filter(movie => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    const renderMovies = filterSearch.map(movie => (
        <MovieCard key={movie.id} movie={movie} setCart={setCart} cart={cart}/>
    ))

    return (
        <main>
            <br></br>
        <div>
        <TextField className="searchBar" id="filled-basic" label="Search Movies" variant="filled" onChange={(e) => setSearch(e.target.value)}/>
        </div>
            {renderMovies}
        </main>
    )
}

export default MoviesPage