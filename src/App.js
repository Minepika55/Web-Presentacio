import React, { useState, useEffect } from "react";
import "./App.scss";
import img1 from "./ds1.png";
import img2 from "./ds2.png";
import img3 from "./ds3.png";
import img4 from "./ds4.png";

function App() {
  const images = [img1, img2, img3, img4]; // Array amb les imatges

  // Posa imatge aleatoria
  const getRandomIndex = () => Math.floor(Math.random() * images.length);

  // Controla la imatge actual
  const [currentImageIndex, setCurrentImageIndex] = useState(getRandomIndex());

  // Cambia la imatge cada dos segons
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(getRandomIndex());
    }, 2000);
    return () => clearInterval(timer); // Nateja
  }, []);

  // Mostra el spinner de càrrega per 2 segons després del carregament inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("loadingSpinner").style.display = "none"; // Amaga el spinner
    }, 600);
    return () => clearTimeout(timer); // Neteja
  }, []);

  return (
    <div className="Home">
      <h1>Guillem Ortiz Hernandez</h1>

      <p>
        Benvingut a la meva pàgina personal, no hi ha pressa navega per
        qualsevol dels enllaços superiors per començar.
      </p>

      <div
        id="loadingSpinner"
        style={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img src="./img/spinner.gif" alt="Carregant..." />
      </div>

      <img src="img/imatge.jpeg" id="imatge" />
      <img src={images[currentImageIndex]} alt="" className="zoom" />
      <h2>Senyal actual</h2>
    </div>
  );
}

export default App;
