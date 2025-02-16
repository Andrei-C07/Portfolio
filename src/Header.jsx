import React, { useState, useEffect } from "react";
import "./style/Header.css";

import logo from "./assets/logo.jpg";
import Nav from "./Navbar.jsx";

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleScroll = () => {
    const projectsSection = document.getElementById("home");

    if (projectsSection) {
      const rect = projectsSection.getBoundingClientRect();
      // Hide navbar when projects section is in view
      setIsNavbarVisible(!(rect.top < window.innerHeight && rect.bottom > 0));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <img id="logo" src={logo} alt="Logo" />
      <Nav isNavbarVisible={isNavbarVisible} />
    </header>
  );
};

export default Header;
