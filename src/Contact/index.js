import "./styles.scss";

import linkedin from "./linkedin.png";

function Contact() {
  return (
    <div className="contact">
      <img src={linkedin} id="imatge" />
      <a href="https://github.com/Minepika55">Linkedin</a>
      <p></p>
      <p>
        <a href="mailto:guillem.ortiz.lsgi@gmail.com">E-mail</a>
      </p>
    </div>
  );
}

export default Contact;
