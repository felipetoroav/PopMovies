import React from 'react';

import serchLogo from '../icons/buscar.svg'
import DetailsMovie from './DetailsMovie';
import './styles/SerchMovie.css'

function SerchMovie(props) {
  const [query, setQuery] = React.useState("");
  // const [modal, setModal ] = React.useState(true);

  return(
    <div>
      <div className="serch__container">
        <img src={serchLogo} alt="Serch logo" />
        <input type="text" placeholder="Serch Movie"
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }}
        ></input>
        <button className="serch-button"
          type="submit"
          onClick={props.openModal}
        >Serch</button>
      </div>
      <DetailsMovie
        modalIsOpen={props.modalIsOpen}
        closeModal={props.closeModal}
      />
    </div>
  )
}

export default SerchMovie;