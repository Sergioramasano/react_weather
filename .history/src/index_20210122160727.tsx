import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import {rootReducer from "./redux/rootReducer";

import App from "./App";

const rootElement = document.getElementById("root");
let store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, rootElement);
