// Api key = c77aa4b1

import React from 'react';

import './styles/MainSerch.css'
import serchLogo from '../icons/buscar.svg'

class MainSerch extends React.Component {
  render() {
    return (
      <header className="container__header">
        <div className="header-logo">
          <h2>🍿PopMovies</h2>
        </div>
        <div className="header-serch">
          <img src={serchLogo} alt="Serch logo" />
          <input type="text" placeholder="Serch Movie"></input>
        </div>
        <div className="header-avatar">
          <img src="https://www.gravatar.com/avatar/d=identicon" alt="avatar user" />
        </div>
      </header>
    )
  }
}

export default MainSerch;