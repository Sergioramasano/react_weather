import { Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  removeError,
  setCity,
  setCityWeather,
  setError,
} from "../../redux/actionCreators";
import { Dispatch } from "redux";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import SearchIcon from "@material-ui/icons/Search";
import "./Home.scss";
import { Heading } from "../../components/Heading/Heading";
import image from "../../images/umbrella.png";

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

  useEffect(() => {
    const weather = localStorage.getItem("weather");
    props.removeError();
    if (weather) {
      props.setCityWeatherByName(JSON.parse(weather));
    }
  }, []);

  const inputHandler = (event: any): any => {
    let inputData = "";
    if (event.type === "submit") {
      event.preventDefault();
      inputData = event.target[0].value;
    }
    if (
      event.key === "Enter" ||
      event.type === "click" ||
      event.type === "submit"
    ) {
      event.preventDefault();
      props.removeError();
      props.setCityName(inputData || event.target.value);
    }
  };

  const setErroroText = () => {
    return "it is the required field!";
  };

  return (
    <section className="Home">
      <Heading name={"weather"}></Heading>
      <form
        onSubmit={inputHandler}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div>
          <div className="flex bettween center">
            <TextField
              error={props.error}
              id="standard-error-helper-text"
              label="Enter city name"
              onKeyPress={inputHandler}
              helperText={setErroroText()}
            />
            <Button type="submit">
              <SearchIcon />
            </Button>
          </div>
          <section className="cards">
            {props.weather ? (
              <WeatherCard weather={props.weather} />
            ) : (
              <h3>No data</h3>
            )}
          </section>
          <img className="umbrella" src={image} alt="umbrella" />
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cityName: state.city,
    weather: state.cityWeather,
    error: state.errorText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCityName: (payload: string) => dispatch(setCity(payload)),
    setCityWeatherByName: (payload: any) => setCityWeather(dispatch, payload),
    setError: (payload: string) => dispatch(setError(payload)),
    removeError: () => dispatch(removeError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
