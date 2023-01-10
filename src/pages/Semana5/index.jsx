import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Semana5() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleItem(e) {
    setItem(e.target.value);
  }

  function addItem(e) {
    e.preventDefault();
    if (!item) return;

    setList((list) => [item, ...list]);
    setItem("");
  }
  function removeItem(item) {
    const newList = list.filter((i) => i !== item);
    setList(newList);
    alert("Item Removido");
  }
  return (
    <main>
      <h1>Semana 5</h1>
      <Link to="/"> Voltar</Link>
      <form>
        <h2>To Do</h2>
        <div className="addItem">
          <input
            type="text"
            onChange={handleItem}
            value={item}
            placeholder="adicione o item"
          />
          <button type="submit" onClick={addItem}>
            +
          </button>
        </div>
      </form>

      <div className="list">
        <ul>
          {list?.map((item, index) => (
            <li
              className={
                item?.includes("estudar") || item?.includes("ler")
                  ? "bk-blue"
                  : "normal"
              }
              key={index}
            >
              {item} <button onClick={() => removeItem(item)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
