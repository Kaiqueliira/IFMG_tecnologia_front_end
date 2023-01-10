import { useState } from "react";
import { Link } from "react-router-dom";
import UsuarioEntrada from "../../components/UsuarioEntrada/Index";
import UsuarioSaida from "../../components/UsuarioSaida/Index";
function Semana3() {
  const [login, setlogin] = useState("Seu Login...");
  const [paragrafo, setParagrafo] = useState("Escreva a descrição");

  const handleLogin = (e) => {
    setlogin(e.target.value);
  };

  const handleParagrafo = (e) => {
    setParagrafo(e.target.value);
  };

  return (
    <main>
      <div>
        <h1>Semana 3</h1>
        <Link to="/"> Voltar</Link>
      </div>
      <UsuarioEntrada
        login={login}
        paragrafo={paragrafo}
        handleLogin={handleLogin}
        handleParagrafo={handleParagrafo}
      />

      <UsuarioSaida login={login} paragrafo={paragrafo} />
    </main>
  );
}

export default Semana3;
