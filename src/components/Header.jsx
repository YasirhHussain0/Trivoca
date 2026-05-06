import { useState } from "react";
import { Link } from 'react-router-dom'
import logo from "../assets/Images/logo.webp";
import "../assets/Style/header.css";

import useScrollToSection from '../hooks/useScrollToSection';

function Header() {

  const [isOpen, isSetOpen] = useState(false);

  const toggleMenu = () => {
    isSetOpen(!isOpen);
  }

  const closeMenu = () => {
    isSetOpen(false);
  }
  const scrollToSection = useScrollToSection();

  const handleServicesClick = () => {
    scrollToSection("services");
    closeMenu();
  };

  return (
    <header>
      <div style={{ textAlign: "center", backgroundColor: "var(--purple)", color: "var(--white)" }}>
        <p style={{ padding: "10px 0", fontSize: "12px", fontWeight: "400" }}>
          Sago Health is now TriVoca Heath
        </p>
      </div>
      <div className="sticky-header"  >

        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="TriVoca Health Logo" />
              </Link>
            </div>

            <button className="toggleBtn" onClick={toggleMenu}>
              <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>


            <nav className={isOpen ? "navlinks active" : "navlinks"}>

              <Link to="/" onClick={closeMenu}>Home</Link>
              <a className='scroll-link' smooth onClick={() => handleServicesClick("services")}>
                Services
              </a>

              <Link to="/About" onClick={closeMenu}>About Us</Link>
              <Link to="/Blog" onClick={closeMenu}>Resource Center</Link>
              <Link to="/Contact" className='orange-btn' onClick={closeMenu}>Contact Us</Link>
            </nav>

          </div>
        </div>

      </div>
    </header>
  )
}

export default Header

