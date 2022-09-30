import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import MoviesPage from './components/MoviesPage';
import SignIn from './components/SignIn';

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
      <Switch>
        <Route exact path="/home">
          <MoviesPage movies={movies}/>
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="*">
          <h1>BE KIND, REWIND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
