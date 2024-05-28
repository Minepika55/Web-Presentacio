import "./styles.scss";

import linkedin from "./linkedin.png";

function Contact() {
  return (
    <div className="contact">
      <img src={linkedin} id="imatge" />
      <a href="https://www.linkedin.com/in/guillem-ortiz-hern%C3%A0ndez-2061002b7/">Linkedin</a>
      <p></p>
    <a href="https://github.com/Minepika55">GitHub</a>
      <p>
        <a href="mailto:guillem.ortiz.lsgi@gmail.com">E-mail</a>
      </p>
    </div>
  );
}

export default Contact;
