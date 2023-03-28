// components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { yuckbug }  from images/yuckbug.png;

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/nyc">NYC</NavLink>
        <NavLink to="/la">LA</NavLink>
        <NavLink to="/chicago">Chicago</NavLink>
      </nav>
      <input type="text" placeholder="Search..." />
    </header>
  );
};

export default Header;
