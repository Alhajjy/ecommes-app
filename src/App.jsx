import "./App.scss";
import Home from "./pages/Home/Home";
import "bootstrap/scss/bootstrap.scss";
import { Route, Routes } from "react-router";
import About from "./pages/About/About";
import Basket from "./pages/Basket/Basket";
import Admin from "./pages/Admin/Admin";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useEffect } from "react";

function App() {
  const tkn =
    localStorage.getItem("token") || sessionStorage.getItem("token") || false;
  useEffect(() => {
    if (
      sessionStorage.getItem("token") !== null ||
      localStorage.getItem("token") !== null
    ) {
      console.log(
        +localStorage.getItem("token") || +sessionStorage.getItem("token")
      );
    }
  }, [tkn]);
  const handle = () => {
    if (tkn !== false) {
      return (
        <Routes className="App">
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      );
    } else {
      return (
        <Routes className="App">
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      );
    }
  };
  return handle();
}

export default App;
