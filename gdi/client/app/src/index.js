import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./components/home-page";

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById("root")
);
