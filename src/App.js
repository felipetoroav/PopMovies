import React from 'react';

import MovieCard from './Components/MovieCard';
import Header from './Components/Header';
import SerchMovie from './Components/SerchMovie'
import DetailsMovie from './Components/DetailsMovie';

import './App.css';

class App extends React.Component {
  state = {
    loading: true,
    movies: [],
    // modalIsOpen: false,
    DefaultMovies: ["Spider-man+homecoming", "Batman", "Aquaman", "Shazam", "Avengers", "Avengers+infinity+war", "Antman", "Black+panter", "Wonder+woman", "Godzilla"],
  }

  async componentDidMount() {

    for (let i = 0; i < this.state.DefaultMovies.length; i++) {
      const call = await this.fetchMovies(this.state.DefaultMovies[i]);
      this.state.movies.push(call)
    }

    this.setState({
      loading: false,
    })
  }

  fetchMovies = async (movie) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=c77aa4b1`);
      const data = await response.json();
      return data;
    } catch(error) {
      console.error(error)
    }
  }

  // handleOpenModal = e => {
  //   this.setState({ modalIsOpen: true })
  // }

  // handleCloseModal = e => {
  //   this.setState({ modalIsOpen: false })
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <SerchMovie
          // openModal={this.handleOpenModal}
          // closeModal={this.handleCloseModal}
          // modalIsOpen={this.state.modalIsOpen}
          movies={this.state.DefaultMovies}
        />
        <MovieCard
          movies={this.state.movies}
          loading={this.state.loading}
          />
        <DetailsMovie />
      </div>
    );
  }
}

export default App;
