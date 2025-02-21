import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/default.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/fp-nice-select.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
