import React from 'react';

import './styles/Header.css'

function  Header() {

  return (
    <header className="container__header">
      <div className="header-logo">
        <h2>🍿PopMovies</h2>
      </div>
      <div className="header-avatar">
        <img src="https://www.gravatar.com/avatar/d=identicon" alt="avatar user" />
      </div>
    </header>
  )
}


export default Header;