import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";

import ReduxThunk from "redux-thunk";
import { loggerMiddleware } from "./Middleware/Middleware";

const rootElement = document.getElementById("root");

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, ReduxThunk))
);

// we can subscribe to store for logging e.g.
store.subscribe(() => console.log(store.getState(), "subscribe"));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, rootElement);
