import React from "react";
import "./App.scss";
import Users from "./components/users/users";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
import { City } from "./pages/city/City";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/city:id">
          <City />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
