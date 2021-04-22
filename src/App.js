import React from 'react';

// import fetchMovies from './api';
import MovieCard from './Components/MovieCard';
import MainSerch from './Components/MainSerch.jsx';

import './App.css';

function App() {

  return (
    <div className="App">
      <MainSerch />
      <MovieCard />
    </div>
  );
}

export default App;
