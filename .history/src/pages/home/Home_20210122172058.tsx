import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setCity } from "../../redux/actionCreators";
import { Dispatch } from "redux";

import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Home = (props: any) => {
  const classes = useStyles();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // props.setCityName();
  };

  return (
    <section className="Home">
      <h1>Home</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={false}
            id="standard-error-helper-text"
            label="Enter city name"
            onChange={inputHandler}
            helperText={"efwe"}
          />
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cityName: state.city,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCityName: () => dispatch(setCity()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
