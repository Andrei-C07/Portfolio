import React from "react";
import "./style/Home.css";

import pfp from "./assets/profile-pic.jpg";
import download from "./assets/download.png";

import Socials from "./Socials";
import Skills from "./Skills";

import cv from "./Developper_Andrei.pdf";

const Home = () => {
  return (
    <div id="home" className="wrap">
      <div>
        <div className="shared-container centered-div">
          <div className="title">
            My name is
            <div className="orange-text">Andrei Cretu</div>
          </div>

          <div className="title-buttons-pos">
            <a href="#projects" class="nav-link">
              <button className="title-buttons"> Projects </button>
            </a>
            <a href="#aboutMe" class="nav-link">
              <button className="title-buttons"> About Me </button>
            </a>
            <a href="#contact" class="nav-link">
              <button className="title-buttons"> Contact me </button>
            </a>
          </div>
        </div>
        <div className="skills">
          <Skills />
        </div>
      </div>

      <div className="me">
        <div className="pfp-container">
          <img id="pfp" src={pfp} alt="This is me !" className="pfp"></img>
        </div>
        <button className="cv">
          <a href={cv} target="_blank" className="no-style">
            Download CV{" "}
            <img id="downloadImg" src={download} alt="Download icon" />
          </a>
        </button>
        <span className="desc">
          Hi! I'm a curious and energetic student with a passion for coding. I
          love exploring new ideas, solving challenges, and constantly learning
          to grow personally and professionally.
        </span>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span className="violet">Visit some of my profiles</span>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Home;
