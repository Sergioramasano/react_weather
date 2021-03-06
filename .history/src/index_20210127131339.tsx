import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";

import ReduxThunk from "redux-thunk";

const rootElement = document.getElementById("root");

// we can create Middleware for logging e.g.
const loggerMiddleware = (store: { getState: () => any }) => (
  next: (arg0: any) => any
) => (action: any) => {
  const result = next(action);
  console.log("Middleware", store.getState());
  return result;
};

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, ReduxThunk))
);

// we can subscribe to store for logging e.g.
store.subscribe(() => console.log(store.getState(), 111));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, rootElement);
