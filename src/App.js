import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import MoviesPage from './components/MoviesPage';
import About from './components/About';
import AddMovie from './components/AddMovie';
import MyCart from './components/MyCart';

function App() {
  const [movies, setMovies] = useState([])
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3004/movies")
    .then(r => r.json())
    .then(setMovies)
  }, [])

  function handleNewMovie(newMovie) {
    setMovies([...movies, newMovie])
  }

  return (
    <div className="App">
      <ResponsiveAppBar cart={cart}/>
      <Switch>
      <Route path="/home">
          <MoviesPage movies={movies} setCart={setCart} cart={cart}/>
        </Route>
        <Route path="/about">
          <About movies={movies} setMovies={setMovies}/>
        </Route>
        <Route path="/addmovie">
          <AddMovie handleNewMovie={handleNewMovie}/>
        </Route>
        <Route path="/mycart">
          <MyCart cart={cart} setCart={setCart}/>
        </Route>
        <Route exact path="*">
          <h1>404 BE KIND, REWIND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
