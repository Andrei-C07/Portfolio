import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

import "./style/Contact.css";

import link from './assets/linkSqr.png'

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gkdu44b", "template_ni0b3jp", form.current, {
        publicKey: "AidTQspwMWVMfwFm1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          clearFields();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const clearFields = () => {
    form.current.reset();
  };

  return (
    <section id="contact">
      <h1 className="text-center mt-5">Contact Me</h1>
      <div className="cards">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="horiDiv">
            <input id="name" name="name" type="text" placeholder="First Name" required />
            <input id="surname" name="surname" type="text" placeholder="Last Name" required />
          </div>
          <div className="horiDiv">
            <input id="phone" name="phone" type="text" placeholder="Phone Number" required />
            <input id="email" name="email" type="email" placeholder="Email" required />
          </div>

          <textarea
            id="message"
            name="message"
            maxLength="1000"
            placeholder="Enter Message . . ."
            required
          />

          <div className="divbtn">
            <button id="btnSend" type="submit">
              Send
            </button>
            <button id="btnClear" type="button" onClick={clearFields}>
              Clear
            </button>
          </div>
        </form>
        <div class='d-flex position-relative flex-column justify-content-between'>
          <div className="smallCard">
            <span className="orange">Call me : </span><span class='ms-2'> 514 - 654 - 3719</span>
          </div>
          <div className="smallCard">
            <div>
              <span className="orange">Icloud : </span><span class='ms-2'> andrei.cretu2005@icoud.com </span>
            </div>
            <div>
            <span className="orange">Gmail : </span><span class='ms-2'> andrei.cretu4676@gmail.com </span>
            </div>
          </div>
          <div className="smallCard">
            <img id="linkIMG" src={link} />
            <a id='link' target="_blank" href="https://www.linkedin.com/in/andrei-cretu07/">My LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
