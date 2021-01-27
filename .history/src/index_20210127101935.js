import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, Middleware } from "redux";
import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";




const rootElement = document.getElementById("root");

const loggerMiddleware => (store:any) => (next:any) =>(action:any)=> {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
}
let store = createStore(rootReducer, composeWithDevTools(), applyMiddleware(loggerMiddleware));

store.subscribe(() => console.log(store.getState(), 111));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, rootElement);
