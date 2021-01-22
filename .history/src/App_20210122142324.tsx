import React from "react";
import "./App.scss";
import Users from "./components/users/users";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
