import "./styles.scss";
import React, { useState, useEffect } from "react";
import img1 from "./ds1.png";
import img2 from "./ds2.png";
import img3 from "./ds3.png";
import img4 from "./ds4.png";
import salle from "./sallelogo.jpeg";

function Info() {
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
    <div className="extres">
      <p>Informació sobre mi:</p>
      <p>
        Estudiant de primer any del Grau Superior de Programació d'aplicacions i
        videojocs
      </p>
      <p>de La Salle Girona.</p>
      <img src={salle} alt="" className="image" />
      <p>
        Conec Anglès amb un títol de C1 i Català i Castellà com a llengües
        maternes
      </p>
      <p>Llenguatges de programació que conec:</p>
      <ol>
        <li>C++</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
      </ol>

      <img src={images[currentImageIndex]} alt="" className="zoom" />
      <h2>Senyal actual</h2>
    </div>
  );
}

export default Info;
