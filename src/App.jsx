import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Semana3 from "./pages/Semana3";
import Semana4 from "./pages/Semana4";
import Semana5 from "./pages/Semana5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/semana3" element={<Semana3 />}></Route>
        <Route path="/semana4" element={<Semana4 />}></Route>
        <Route path="/semana5" element={<Semana5 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
