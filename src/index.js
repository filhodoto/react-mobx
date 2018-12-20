import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";

// Store
import moviesStore from "./stores/moviesStore";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={moviesStore}>
    <App />
  </Provider>,
  rootElement
);
