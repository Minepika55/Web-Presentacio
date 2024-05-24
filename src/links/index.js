import "./styles.scss";

function Links() {
  return (
    <div className="links-navegacio">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a class="active" href="/info">
            Info
          </a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/contact">Hobbies</a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
