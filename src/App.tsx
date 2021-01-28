import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import Home from "./pages/home/Home";
import City from "./pages/city/City";
import Menu from "./components/menu/Menu";
import { connect } from "react-redux";
import { setError } from "./redux/actionCreators";
import { Dispatch } from "redux";
import { Alert } from "@material-ui/lab";

function App(props: any) {
  return (
    <BrowserRouter>
      <Menu></Menu>
      {props.errorText && (
        <Alert className="alert-error" severity="error">
          {props.errorText}
        </Alert>
      )}
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

const mapStateToProps = (state: any) => {
  return {
    errorText: state.errorText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setError: (payload: string) => dispatch(setError(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
