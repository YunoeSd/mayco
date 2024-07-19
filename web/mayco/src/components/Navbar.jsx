import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Mayco logo" />
      </div>
      <ul className={`navbar-links ${isMobile ? 'open navbar-links-mobile' : 'navbar-links-mobile'}`}
          onClick={() => setIsMobile(false)}>
        <li><Link to="/">MAQUINADOS</Link></li>
        <li><Link to="/fundicion">FUNDICIÓN</Link></li>
        <li><Link to="/osg-royco">OSG ROYCO</Link></li>
        <li><Link to="/plasticos-ingenieria">PLÁSTICOS DE INGENIERÍA</Link></li>
        <li><Link to="/aceros">ACEROS</Link></li>
        <li><Link to="/sobre-nosotros">SOBRE NOSOTROS</Link></li>
      </ul>
      <div className="navbar-icons">
        <Link to="/busqueda"><IoIosSearch className="search-icon" /></Link>
        <button className="mobile-menu-icon" onClick={handleToggle}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
