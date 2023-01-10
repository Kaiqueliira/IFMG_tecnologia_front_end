import { Link } from "react-router-dom";
import "./styles.css";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/semana3"> Semana 3</Link>
        </li>
        <li>
          <Link to="/semana4"> Semana 4</Link>
        </li>
        <li>
          <Link to="/semana5"> Semana 5</Link>
        </li>
      </ul>
    </nav>
  );
}
