import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./components/home-page";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById("root")
);
