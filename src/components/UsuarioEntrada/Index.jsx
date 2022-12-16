import "./style.css";

export default function UsuarioEntrada({
  handleLogin,
  handleParagrafo,
  login,
  paragrafo,
}) {
  return (
    <div className="input-entrada">
      <label>
        Login
        <input
          type="text"
          placeholder={login}
          onChange={handleLogin}
          aria-label="input-login"
        />
      </label>
      <label>
        Parágrafo
        <input
          type="text"
          placeholder={paragrafo}
          onChange={handleParagrafo}
          aria-label="input-paragrafo"
        />
      </label>
    </div>
  );
}
