import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
=======
>>>>>>> b278b35823e9e60f1477e1c4761415d679313dc3
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
>>>>>>> 960a9ea (initial commit)
=======
>>>>>>> d09463b6576a26fd36e7bfeaba368964c2e4c452
>>>>>>> b278b35823e9e60f1477e1c4761415d679313dc3

import "./style/main.scss";

function main() {
  ReactDOM.render(
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>,
=======
>>>>>>> b278b35823e9e60f1477e1c4761415d679313dc3
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
<<<<<<< HEAD
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>,
>>>>>>> 960a9ea (initial commit)
=======
>>>>>>> d09463b6576a26fd36e7bfeaba368964c2e4c452
>>>>>>> b278b35823e9e60f1477e1c4761415d679313dc3
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
