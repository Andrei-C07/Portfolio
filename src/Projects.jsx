import React from "react";
import './style/Projects.css';

import mediatheque from './assets/mediatheque.png';

const Projects = () => {
  return (
    <section id="projects" className="section-Projects">

      <h1 className="text-center mt-5">Projects</h1>

      <div id="mediathequeProject" className="projets">
        <div class='d-flex align-items-center'>
          <img src={mediatheque} id="imgMedia" alt="Mediatheque"/>
        </div>
        <div class='mt-5'>
          <a href='https://github.com/alexandru356/Projet-Mediatheque' className="orange-text" target="_blank"><h4>Mediatheque</h4></a>
          <p className="project-desc">
            This project is a MediaTheque application developed with JavaFX. 
            It functions as a digital library for managing various media files, including books, movies, and music. 
            Users can organize, search, and view their media collection using an easy-to-navigate graphical interface.
          </p>
          <h4>Using: </h4>
          <ul>
            <li>
              Java
            </li>
            <li>
              JavaFX
            </li>
            <li>
              Eclipse IDE
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default Projects;
