import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
=======
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
>>>>>>> d09463b6576a26fd36e7bfeaba368964c2e4c452

import "./style/main.scss";

function main() {
  ReactDOM.render(
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>,
=======
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
>>>>>>> d09463b6576a26fd36e7bfeaba368964c2e4c452
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
