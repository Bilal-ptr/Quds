import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
// import Navbar from './Header/Navbar';



const Nav = () => {
  
  return (
    <header>
      <NavLink tabIndex={1}>
           <Header />
      </NavLink>
    </header>
  
  );
};

export default Nav;
