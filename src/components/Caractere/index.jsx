import { useState } from "react";

export default function Caractere() {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h2>Quantos Caracteres tem na Palavra?</h2>
      <label>
        Insira aqui
        <input type="text" onChange={handleText}></input>
      </label>
      <p>
        Esse Texto contém {text.length} caractere{text.length <= 1 ? "" : "s"}.
      </p>
    </div>
  );
}
