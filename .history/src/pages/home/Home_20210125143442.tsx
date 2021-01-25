import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setCity, setCityWeather } from "../../redux/actionCreators";
import { Dispatch } from "redux";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./Home.scss";
import axios from "axios";

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
  const [errorState, setErrorState] = useState(false);

  const inputHandler = (event: any): any => {
    setError();
    if (event.key === "Enter") {
      event.preventDefault();
      props.setCityName(event.target.value);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            event.target.value
          }&appid=${"89131358011ec8066582be44f133475a"}`
        )
        .then((res: any) => {
          props.setCityWeatherByName(res.data);
        });
    }
  };

  const setErroroText = () => {
    if (!props.cityName) {
      return "it is the required field!";
    }
  };

  const setError = () => {
    if (props.cityName) {
      setErrorState(true);
    } else {
      setErrorState(false);
    }
  };

  return (
    <section className="Home">
      <h1>Home</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            error={errorState}
            id="standard-error-helper-text"
            label="Enter city name"
            onKeyPress={inputHandler}
            helperText={setErroroText()}
          />
          <section className="cards">
            {props.weather ? (
              <WeatherCard weather={props.weather} />
            ) : (
              <h3>No data</h3>
            )}
          </section>
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cityName: state.city,
    weather: state.cityWeather,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCityName: (payload: string) => dispatch(setCity(payload)),
    setCityWeatherByName: (payload: any) => dispatch(setCityWeather(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
