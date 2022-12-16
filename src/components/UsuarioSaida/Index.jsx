import "./style.css";

export default function UsuarioSaida({ login, paragrafo }) {
  return (
    <div className="box">
      <p>
        <span>Login:</span> {login}
      </p>
      <p>{paragrafo}</p>
    </div>
  );
}
