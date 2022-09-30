import React from "react";
import MovieCard from "./MovieCard";
import TextField from '@mui/material/TextField';

function MoviesPage({movies}) {

    const renderMovies = movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
    ))

    return (
        <main>
            <TextField
              className="navLeft"
              label="Search Movies"
              id="standard-size-small"
              defaultValue="Movies"
              size="small"
              variant="standard"
              />
                {renderMovies}
        </main>
    )
}

export default MoviesPage