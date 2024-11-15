import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <a href="https://github.com/Corentinlhm02" target="_blank">
        <i className="fa-brands fa-github fa-4x"></i>
      </a>
      <nav>
          <ul>
          <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}><li>Accueil</li></NavLink>
          <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}><li>A Propos</li></NavLink>
          </ul>
      </nav>
    </header>
   
  );
}

export default Header;
