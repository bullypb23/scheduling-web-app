import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = props => {
  return (
    <header className='header'>
      <div className="header-logo">
        <NavLink to="/">
          <img src="./assets/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <Navigation token={props.token} />
    </header>
  )
}

export default Header;