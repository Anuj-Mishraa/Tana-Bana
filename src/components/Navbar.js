import React from 'react';
import './Navbar.css';
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>TANA-BANA</h1>
      </div>
      <ul className="navbar__links">
        <li><Link activeClass="active" to='home' spy={true} smooth={true} duration={500} >Home</Link></li>
        <li><Link to='about' spy={true} smooth={true} duration={500} >About Us</Link></li>
        <li><Link to='services' spy={true} smooth={true} duration={500} >Services</Link></li>
        <li><Link to='contact' spy={true} smooth={true} duration={500} >Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
