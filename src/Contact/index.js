import "./styles.scss";
import React, { useState, useEffect } from "react";
import img1 from "./ds1.png";
import img2 from "./ds2.png";
import img3 from "./ds3.png";
import img4 from "./ds4.png";
import linkedin from "./linkedin.png";

function Contact() {
  const images = [img1, img2, img3, img4]; //Array amb les imatges

  //Posa imatge aleatoria
  const getRandomIndex = () => Math.floor(Math.random() * images.length);

  //Controla la imatge actual
  const [currentImageIndex, setCurrentImageIndex] = useState(getRandomIndex());

  //Cambia la imatge cada dos segons
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(getRandomIndex());
    }, 2000);
    return () => clearInterval(timer); //Nateja
  }, []);
  return (
    <div className="contact">
      <img src={linkedin} id="imatge" />
      <a href="https://www.linkedin.com/in/guillem-ortiz-hern%C3%A0ndez-2061002b7/">
        Linkedin
      </a>
      <p></p>
      <a href="https://github.com/Minepika55">GitHub</a>
      <p>
        <a href="mailto:guillem.ortiz.lsgi@gmail.com">E-mail</a>
      </p>
      <img src={images[currentImageIndex]} alt="" className="zoom" />
      <h2>Senyal actual</h2>
    </div>
  );
}

export default Contact;
