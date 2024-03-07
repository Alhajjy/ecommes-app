import "./App.scss";
import Home from "./components/pages/Home/Home";
import "bootstrap/scss/bootstrap.scss";
import { Route, Routes } from "react-router";
import About from "./components/pages/About/About";
import Basket from "./components/pages/Basket/Basket";

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
