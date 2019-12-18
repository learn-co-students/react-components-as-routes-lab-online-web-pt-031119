import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink 
        to='/' 
        exact 
        style={link} 
        activeStyle={{
          color: 'black'
        }} 
        >Home</NavLink>
      <NavLink 
        to='/movies' 
        exact 
        style={link} 
        activeStyle={{
          color: 'black'
        }} 
        >Movies</NavLink>
      <NavLink 
        to='/directors' 
        exact 
        style={link} 
        activeStyle={{
          color: 'black'
        }} 
        >Directors</NavLink>
      <NavLink 
        to='/actors' 
        exact 
        style={link} 
        activeStyle={{
          color: 'black'
        }} 
        >Actors</NavLink>
    </div>
  );
};

export default NavBar;
