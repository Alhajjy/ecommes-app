import "./App.scss";
import Home from "./pages/Home/Home";
import "bootstrap/scss/bootstrap.scss";
import { Route, Routes } from "react-router";
import About from "./pages/About/About";
import Basket from "./pages/Basket/Basket";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
