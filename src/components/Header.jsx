// components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import YH from '../images/YH.png';
import '../CSS/Header.css';




const Header = () => {
  return (
    <header>
      <img src={YH} alt="YH" />
      <nav>
        <NavLink to="/nyc">HOME</NavLink>
      </nav>
    </header>
  );
};

export default Header;
