import Navb from "./components/Navb";
import "./App.scss";
import Home from "./components/home/Home";
import "bootstrap/scss/bootstrap.scss";

function App() {
  return (
    <div className="App">
      <Navb />
      <Home />
    </div>
  );
}

export default App;
