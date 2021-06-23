import React from "react";
//import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import "./NavigationBar.css";

function NavigationBar() {
  const [navShow, setNavShow] = useState(false);

  const handleBurgerClick = () => {
    setNavShow(!navShow);
  };

  const getNavClases = () => {
    return navShow ? "nav-links nav-active" : "nav-links";
  };

  const getBurgerClases = () => {
    return navShow ? "burger-toggler burger-cross" : "burger-toggler";
  };

  return (
    <nav>
      <div className="nav-element-container">
        <div className="nav-logo">
          <a href="#home">
            <h4 id="Ju">JU</h4>
            <img src="logo/jumhc-logo.jpeg" className="logo-image" />
            <h4 id="Hc">HC</h4>
          </a>
        </div>
        <ul className={getNavClases()}>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about-us">ABOUT US</a>
          </li>
          <li>
            <a href="#rcc">RCC</a>
          </li>
          <li>  
            <a href="#expedition">EXPEDITION</a>
          </li>
          <li>
            <a href="#treks">TREKS</a>
          </li>
        </ul>
        <div className={getBurgerClases()} onClick={handleBurgerClick}>
          <div className="burger-line" id="line1"></div>
          <div className="burger-line" id="line2"></div>
          <div className="burger-line" id="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
