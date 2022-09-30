import React from "react";
import MovieCard from "./MovieCard";
import { CardActionArea } from '@mui/material';

function MoviesPage({movies}) {

    const renderMovies = movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
    ))

    return (
        <div>
                {renderMovies}
        </div>
    )
}

export default MoviesPage