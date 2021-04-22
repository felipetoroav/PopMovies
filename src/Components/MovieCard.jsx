import React from 'react';

import './styles/MovieCard.css'

class MovieCard extends React.Component {
  state = {
    apiKey: 'c77aa4b1',
    loading: true,
    pelis: [],
    DefaultMovies: ["Spider-man+homecoming", "Batman", "Aquaman", "Shazam", "Avengers", "Avengers+infinity+war", "Antman", "Black+panter", "Wonder+woman", "Hulk"],
  }

  async componentDidMount() {

    for (let i = 0; i < this.state.DefaultMovies.length; i++) {
      const call = await this.fetchMovies(this.state.DefaultMovies[i]);
      this.state.pelis.push(call)
    }

    this.setState({
      loading: false,
    })
    console.log(this.state.pelis)
  }

  fetchMovies = async (movie) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${this.state.apiKey}`);
      const data = await response.json();
      return data;
    } catch(error) {
      console.error(error)
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div>Cargando...</div>
      )
    } else {
      return (
        <section className="container__movies">
          {this.state.pelis.map(peli => {
            return(
              <div key={peli.imbdID} className="container__moviecard" >
                <div className="top-moviecard" >
                  <img src={peli.Poster} alt="poster pelicula" />
                  <span>⭐{peli.Ratings[0].Value}</span>
                </div>
                <div className="botton-moviecard" >
                  <h3>{peli.Title}</h3>
                  <p>{peli.Runtime}</p>
                </div>
              </div>
            )
          })}
        </section>
      )
    }
  }
}


export default MovieCard;