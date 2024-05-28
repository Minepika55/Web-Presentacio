import "./styles.scss";
import img1 from "./26.gif";

function Extres() {
  return (
    <div className="extres">
      <p>Sóc molt fan de les coses retro. Aqui hi han alguns gifs:</p>
      <p>Passa per sobre amb el ratolí per fer zoom.</p>
      <img src={img1} class="zoom" />
      <p></p>
      <img src="img/47.gif" class="zoom" />
      <p></p>
      <img src="img/49.gif" class="zoom" />
      <p></p>
      <img src="img/92.gif" class="zoom" />
    </div>
  );
}

export default Extres;
