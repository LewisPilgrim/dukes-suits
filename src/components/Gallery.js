import React from "react";
import "./Gallery.css";
import { FaThList } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="container">
      <div className="gallery-bar">
        <div className="left-items">
          <div className="divider-black"></div>
          <h2>NEW ITEMS</h2>
        </div>
        <div className="right-items">
          <button className="filters">FILTERS</button>
          <div className="toggle-box">
            <FaThList size="23" color="#999" />
            <div className="divider-black grey"></div>
            <RiLayoutGridFill size="23" />
          </div>
        </div>
      </div>
      <div className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Gallery;
