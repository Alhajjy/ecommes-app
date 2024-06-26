import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import Navb from "./components/Navb";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      {/* <React.StrictMode> */}
      <Navb />
      <App />
      {/* </React.StrictMode> */}
    </Router>
  </Provider>
);
