import React, { useEffect } from 'react';

import Modal from './Modal';
import Loading from './Loading';
import './styles/DetailsMovie.css';

function DetailsMovie(props) {
  const movie = props.movieQuery;
  const [queryMovie, setQueryMovie] = React.useState();
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    if(movie === undefined || movie === "") {
      return null
    } else {
      fetchData(movie)
    }
  }, [movie]);

  const fetchData = async (movie) => {
    if(movie === undefined || movie === "") {
      return null
    } else {
      try {
        const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=c77aa4b1`);
        const data = await response.json();
        setQueryMovie(data);
        setLoading(false)
      } catch(error) {
        console.error(error);
      }
    }
  }

  // console.log(queryMovie)
  // console.log(props.movieQuery)

  if(loading === true) {
    return (
      <Modal>
        <Loading />
      </Modal>
    )
  } else {
    return(
      <Modal className="details__container"
        isOpen={props.modalIsOpen}
        onClose={props.closeModal}
      >
        <div className="details-img">
          <img src={queryMovie.Poster} alt="Portada pelicula" />
        </div>
        <div className="details">
          <div>
            <div className="details-title">
              <h2>{queryMovie.Title}</h2>
              <span>{queryMovie.Type}</span>
            </div>
            <div className="details-info">
              <div>{queryMovie.Ratings[0].Value}</div>
              <div>{queryMovie.Runtime}</div>
              <div>{queryMovie.Year}</div>
            </div>
            <div className="details-content">
              <p>{queryMovie.Plot}</p>
              <p>Director: {queryMovie.Director}</p>
              <p>Genero: {queryMovie.Genre}</p>
              <p>Actores: {queryMovie.Actors}</p>
            </div>
          </div>
        </div>
      </Modal>
    )
  }

}

export default DetailsMovie;