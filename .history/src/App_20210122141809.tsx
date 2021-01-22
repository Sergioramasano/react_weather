import React from "react";
import "./App.scss";
import Counter from "./components/counter/Counter";
import Users from "./components/users/users";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default App;
