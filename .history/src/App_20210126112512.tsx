import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import Home from "./pages/home/Home";
import { City } from "./pages/city/City";
import Menu from "./components/menu/Menu";
import { Alert, AlertTitle } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Alert severity="error" className="alert">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Alert>
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
