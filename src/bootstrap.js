import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
=======
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
>>>>>>> 960a9ea (initial commit)

import "./style/main.scss";

function main() {
  ReactDOM.render(
<<<<<<< HEAD
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>,
>>>>>>> 960a9ea (initial commit)
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
