import { useState } from "react";
import UsuarioEntrada from "./components/UsuarioEntrada/Index";
import UsuarioSaida from "./components/UsuarioSaida/Index";

function App() {
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

export default App;
