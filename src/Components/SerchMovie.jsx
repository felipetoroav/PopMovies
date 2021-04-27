import React from 'react';

import serchLogo from '../icons/buscar.svg'
import DetailsMovie from './DetailsMovie';
import './styles/SerchMovie.css'

function SerchMovie(props) {
  const [query, setQuery] = React.useState("");
  const [queryTest, setQueryTest] = React.useState("");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const handleOpenModal = e => {
    setModalIsOpen(true)
    setQueryTest(query)
  }

  const handleCloseModal = e => {
    setModalIsOpen(false)
  }

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
          onClick={handleOpenModal}
        >Serch</button>
      </div>
      <DetailsMovie
        movieQuery={queryTest}
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
      />
    </div>
  )
}

export default SerchMovie;