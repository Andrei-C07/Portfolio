import React from "react";

import "./style/About.css";

import eclipse from "./assets/eclipse.png";
import git from "./assets/github-icon.png";
import intJ from "./assets/intellij.png";
import vscode from "./assets/vscode.png";
import pycharm from "./assets/pycharm.png";
import pfp from "./assets/profile-pic.jpg";

const About = () => {
  return (
    <section id="aboutMe">
      <h1 className="text-center mt-5 mb-5">About Me</h1>
      <div className="about">
        <div className="tools">
          <img className="tools-icons" src={eclipse}></img>
          <img className="tools-icons" src={vscode}></img>
          <img className="tools-icons" src={intJ}></img>
          <img className="tools-icons" src={pycharm}></img>
          <img className="tools-icons" src={git}></img>
        </div>
        <div className="andrei">
          <div className="pfp-container">
            <h3>Who am i ?</h3>
            <img id="pfp" src={pfp} alt="This is me !" className="pfp"></img>
          </div>
          <p className="meDesc">
            Hi, my name is <span className="orange">Andrei Cretu</span>. I'm a{" "}
            <span className="orange">19</span>-year-old aspiring developer. I
            speak <span className="underline">Romanian</span>,{" "}
            <span className="underline">French</span>, and{" "}
            <span className="underline">English</span> fluently.
          </p>
          <p className="meDesc">
            I value hard work, perseverance, and respect. In my free time, I
            enjoy coding, working out, reading, and spending time with friends
            and family.
          </p>
        </div>
        <div className="education">
          <h3 class="mb-4"> Education </h3>
          <ul>
            <li className="orange">École Seondaire du Chêne-Bleu</li>
            <ul className="education_p">
              <li>
                <span className="violet">Program :</span> SN (Natural Sciences)
              </li>
              <li>
                <span className="violet">Why :</span>I have always been
                interested in physics and chemistry, making this program a
                perfect fit for me. It also broadened my opportunities for
                college programs and future career paths.
              </li>
              <li>
                <span className="violet">Graduation Year :</span> 2022
              </li>
            </ul>
            <li className="orange">Cégep Gérald-Godin</li>
            <ul className="education_p">
              <li>
                <span className="violet">Programs :</span> Tremplin DEC (Aug.
                2022 - Jun. 2023) / DEC Technique de l'Informatique
              </li>
              <li>
                <span className="violet">Why :</span> Uncertain about my career
                path after high school, I enrolled in Tremplin DEC to complete
                my non-program-specific courses while exploring my options.
                During that time, I developed a strong interest in coding and
                decided to pursue it as my career.
              </li>
              <li>
                <span className="violet">Graduation Year :</span> 2026
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
