import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <App city="Vancouver" />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
