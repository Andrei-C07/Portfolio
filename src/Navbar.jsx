import React from "react";
import "./style/Header.css";

const Nav = ({ isNavbarVisible }) => {
  return (
    <nav className={`navbar ${isNavbarVisible ? "visible" : "hidden"}`}>
      <a href="#" className="nav-link">Home</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#aboutMe" className="nav-link">About me</a>
      <a href="#contact" className="nav-link">Contact me</a>
    </nav>
  );
};

export default Nav;
