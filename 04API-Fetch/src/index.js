import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import { App } from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
