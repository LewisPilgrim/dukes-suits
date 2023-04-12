import React from "react";
import "./HeroSection.css";
import { BsBasket2Fill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="overlay">
      <header>
        <div className="top-bar">
          <div className="logo">
            <h2>
              D<span>UK</span>ES
            </h2>
          </div>
          <div className="nav-bar">
            <h2>HOME</h2>
            <div className="divider orange"></div>
            <h2>
              BASKET <BsBasket2Fill color="#fff" size="18" />
            </h2>
            <div className="divider orange"></div>
            <h2><RxHamburgerMenu color="#fff" size="32" /></h2>
          </div>
        </div>
        <div className="hero-text">
          <h1 className="tagline">Shop the new collection</h1>
          <button className="btn orange">SHOP NOW</button>
        </div>
      </header>
      </div>
    </div>
  );
};

export default HeroSection;
