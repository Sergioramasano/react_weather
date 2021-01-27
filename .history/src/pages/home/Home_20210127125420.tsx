import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setCity, setCityWeather, setError } from "../../redux/actionCreators";
import { Dispatch } from "redux";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import SearchIcon from "@material-ui/icons/Search";
import "./Home.scss";
import axios from "axios";
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
  const [errorState, setErrorState] = useState(false);
  useEffect(() => {
    const weather = localStorage.getItem("weather");
    if (weather) {
      props.setCityWeatherByName(JSON.parse(weather));
    }
  }, []);

  const inputHandler = (event: any): any => {
    console.log(event);
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
      props.setCityName(inputData || event.target.value);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            inputData || event.target.value
          }&appid=${"89131358011ec8066582be44f133475a"}`
        )
        .then((res: any) => {
          props.setCityWeatherByName(res.data);
          const localData = JSON.stringify(res.data);
          localStorage.setItem("weather", localData);
        })
        .catch((error?: any) => {
          props.setError("Некорректное название города");
        });
    }
  };

  const setErroroText = () => {
    if (!props.cityName) {
      return "it is the required field!";
    }
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
              error={errorState}
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
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCityName: (payload: string) => dispatch(setCity(payload)),
    setCityWeatherByName: (payload: any) => setCityWeather(dispatch, payload),
    setError: (payload: string) => dispatch(setError(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
