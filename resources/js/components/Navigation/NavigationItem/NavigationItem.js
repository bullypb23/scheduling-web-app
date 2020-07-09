import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  let classes = [];
  if(props.button) {
    classes.push('button');
  }
  return (
    <li className='header-navigation-item'>
      <NavLink to={props.link} className={classes.join(' ')}>
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavigationItem;