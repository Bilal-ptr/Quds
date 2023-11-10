import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';



const Nav = () => {
  
  return (
    <header>
      <NavLink  to="/" >
           <Header/>
      </NavLink>
    </header>
  
  );
};

export default Nav;
