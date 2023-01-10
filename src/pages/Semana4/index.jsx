import { Link } from "react-router-dom";
import Caractere from "../../components/Caractere";
import Login from "../../components/Login";

export default function Semana4() {
  return (
    <main>
      <div>
        <h1>Semana 4</h1>
        <Link to="/"> Voltar</Link>
      </div>
      <Caractere />
      <Login />
    </main>
  );
}
