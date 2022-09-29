import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import MoviesPage from './components/MoviesPage';

function App() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3004/movies")
    .then(r => r.json())
    .then(setMovies)
  }, [])

  
  return (
    <div className="App">
      <NavBar />
      <MoviesPage movies={movies}/>
    </div>
  );
}

export default App;
