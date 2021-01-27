import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import Home from "./pages/home/Home";
import { City } from "./pages/city/City";
import Menu from "./components/menu/Menu";
import { Alert, AlertTitle } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { setCity, setError } from "./redux/actionCreators";
import { Dispatch } from "redux";

function App(props: any) {
  console.log(props);
  useEffect(() => {
    console.log(props.errorText);
  }, [props.errorText]);
  return (
    <BrowserRouter>
      <Menu></Menu>
      {props.errorText && (
        <Alert severity="error" className="alert">
          <div className="flex between center">
            <AlertTitle>Error</AlertTitle>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {}}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
          This is an error alert — <strong>check it out!</strong>
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
