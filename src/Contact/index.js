import React, { useState, useEffect } from "react";
import "./styles.scss"; // Ensure this import is at the top
import img1 from "./ds1.png";
import img2 from "./ds2.png";
import img3 from "./ds3.png";
import img4 from "./ds4.png";
import linkedin from "./linkedin.png";
import github from "./github-mark.png";
import email from "./email.png";

function Contact() {
  const images = [img1, img2, img3, img4];

  const getRandomIndex = () => Math.floor(Math.random() * images.length);

  const [currentImageIndex, setCurrentImageIndex] = useState(getRandomIndex());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(getRandomIndex());
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="contact">
      <p>Se'm pot contactar als següents enllaços:</p>
      <button
        className="button"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/guillem-ortiz-hern%C3%A0ndez-2061002b7/",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        Linkedin
      </button>
      <button
        className="button"
        onClick={() =>
          window.open(
            "https://github.com/Minepika55",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        GitHub
      </button>
      <button
        className="button"
        onClick={() =>
          window.open(
            "mailto:guillem.ortiz.lsgi@gmail.com?subject=Hello&body=Hi",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        Email
      </button>
      <button
        className="button"
        onClick={() =>
          window.open(
            "https://x.com/minepika55?lang=es",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        Twitter
      </button>
      <img src={images[currentImageIndex]} alt="" className="zoom" />
      <h2>Current Signal</h2>
    </div>
  );
}

export default Contact;
