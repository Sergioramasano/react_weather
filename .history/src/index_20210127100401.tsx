import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";


const loggerMiddleware =>(store:any)=>next>action{
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
}

const rootElement = document.getElementById("root");
let store = createStore(rootReducer, composeWithDevTools());
store.subscribe(() => console.log(store.getState(), 111));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, rootElement);
