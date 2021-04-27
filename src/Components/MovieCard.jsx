import React from 'react';

import Loading from './Loading';
import './styles/MovieCard.css';

class MovieCard extends React.Component {

  render() {
    if (this.props.loading === true) {
      return (
        <Loading />
      )
    } else {
      return (
        <section className="container__movies">
          {this.props.movies.map(movie => {
            return(
              <div key={movie.imdbID} className="container__moviecard" >
                <div className="top-moviecard" >
                  <img src={movie.Poster} alt="poster pelicula" />
                  <span>⭐{movie.Ratings[0].Value}</span>
                </div>
                <div className="botton-moviecard" >
                  <h3>{movie.Title}</h3>
                  <p>{movie.Runtime}</p>
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