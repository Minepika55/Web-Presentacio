import "./styles.scss";
import React, { useState, useEffect } from "react";
import img from "./26.gif";
import img1 from "./ds1.png";
import img2 from "./ds2.png";
import img3 from "./ds3.png";
import img4 from "./ds4.png";
import flipnote from "./flipnote.gif";

function Extres() {
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
      <p>Soc molt fan de les coses retro. Aquí hi ha alguns gifs retro:</p>
      <p>Passa per sobre amb el ratolí per fer zoom.</p>
      <p>
        Primer hi ha un partit de futbol que vaig gravar, el GIF només utilitza
        3 colors. Blanc, Negre i Vermell.
      </p>
      <p></p>
      <img src={flipnote} class="pixel" />
      <img src={img} class="zoom" />
      <p></p>
      <img src="img/47.gif" class="zoom" />
      <p></p>
      <img src="img/49.gif" class="zoom" />
      <p></p>
      <img src="img/92.gif" class="zoom" />
      <p></p>
      <img src={images[currentImageIndex]} alt="" className="zoom" />
      <h2>Senyal actual</h2>
    </div>
  );
}

export default Extres;
