import React, { useEffect } from 'react';

import Modal from './Modal';
import './styles/DetailsMovie.css';

function DetailsMovie(props) {
  // const movie = props.queryMovie;
  // const [queryMovie, setQueryMovie] = React.useState();
  // console.log(movie, "hola")

  // const fetchData = async (movie) => {
  //   try {
  //     const response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=c77aa4b1`);
  //     const data = await response.json();
  //     return data;
  //   } catch(error) {
  //     console.error(error)
  //   }
  // }

  return(
    <Modal className="details__container"
      isOpen={props.modalIsOpen}
      onClose={props.closeModal}
    >
      <div className="details-img">
        <img src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/reportajes/los-20-posters-de-peliculas-mas-creativos/los-idus-de-marzo/7055664-1-esl-ES/LOS-IDUS-DE-MARZO.jpg" alt="Portada pelicula" />
      </div>
      <div className="details">
        <div>
          <div className="details-title">
            <h2>Titulo de la elicula ome</h2>
            <span>Type</span>
          </div>
          <div className="details-info">
            <div>Ratings</div>
            <div>Runtime</div>
            <div>Year</div>
          </div>
          <div className="details-content">
            <p>Plot</p>
            <p>Director: Director</p>
            <p>Genero: Genre</p>
            <p>Actores: Actors</p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DetailsMovie;