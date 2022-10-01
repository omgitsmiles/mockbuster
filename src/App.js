import React, { useState, useEffect } from 'react';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import MoviesPage from './components/MoviesPage';
import SignIn from './components/SignIn';
import About from './components/About';
import Contact from './components/Contact';
import MyCart from './components/MyCart';

function App() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3004/movies")
    .then(r => r.json())
    .then(setMovies)
  }, [])

  
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Switch>
        <Route exact path="/home">
          <MoviesPage movies={movies}/>
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/mycart">
          <MyCart />
        </Route>
        <Route exact path="*">
          <h1>BE KIND, REWIND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
