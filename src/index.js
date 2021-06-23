import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Index.css";

document.body.style.overflowX = "hidden";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
