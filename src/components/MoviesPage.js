import React, { useState } from "react";
import MovieCard from "./MovieCard";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


function MoviesPage({ movies, setCart, cart }) {
    const [search, setSearch] = useState("")
    const [sortOn, setSortOn] = useState(false)



    const filterSearch = movies.filter(movie => {  
        return movie.title.toLowerCase().includes(search.toLowerCase())
    }).sort((a,b) => {
        if (sortOn) {
        const aName = a.title.toLowerCase()
        const bName = b.title.toLowerCase()
        if (aName > bName) {
            return 1
        } else {
            return -1
        }
    } else {
       return null
    }
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
            <br></br>
            <div>
                <Button variant="contained" onClick={e => setSortOn(sortOn => !sortOn)}>Sort by Name</Button>
            </div>
            {renderMovies}
        </main>
    )
}

export default MoviesPage