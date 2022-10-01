import React from "react";
import MovieCard from "./MovieCard";
import TextField from '@mui/material/TextField';


function MoviesPage({movies}) {

    const renderMovies = movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
    ))

    return (
        <main>
            <br></br>
        <div>
        <TextField
          style={{ color: "white" }}
          label="Search Movies"
          id="outlined-size-small"
          placeholder="Search"
          size="small"
        />
        </div>
            {renderMovies}
        </main>
    )
}

export default MoviesPage