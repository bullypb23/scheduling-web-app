import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = props => {
  let links = (
    <ul>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/login">Login</NavigationItem>
      <NavigationItem link="/register" button>Register</NavigationItem>
    </ul>
  );

  if(props.token !== null) {
    links = (
      <ul>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/calendar">Calendar</NavigationItem>
        <NavigationItem link="/logout" button>Logout</NavigationItem>
      </ul>
    )
  }

  return (
    <nav className="header-navigation">
      {links}
    </nav>
  )
}

export default Navigation;