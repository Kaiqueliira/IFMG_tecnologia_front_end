import { useState } from "react";

export default function Login() {
  const [logged, setLogged] = useState(false);

  function handleLogin() {
    setLogged(!logged);
  }

  if (!!logged) {
    return (
      <>
        <h2>Logado.</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xIyedcx4Qk4YEEXlpmOh5KfC7xjwbn9U2A&usqp=CAU"
          alt="logado"
          width={200}
        ></img>
        <div>
          <button onClick={handleLogin}>Logout</button>
        </div>
      </>
    );
  }
  return (
    <div>
      <h2>Por favor faça o login.</h2>

      <img
        width={200}
        src="https://cdn.w600.comps.canstockphoto.com.br/selo-vermelho-refused-cliparte_csp13289319.jpg"
        alt="login"
      />
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
