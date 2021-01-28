import { Card, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Heading } from "../../components/Heading/Heading";
import { kelToCelcium } from "../../plugins/toCelsium";
import { setCityWeather } from "../../redux/actionCreators";

import "./City.scss";

const City = (props: any) => {
  let [quote, setQuote]: any = useState();

  const writeWeatherToStorage = () => {
    const cityWeather = localStorage.getItem("weather");
    if (cityWeather) props.setWeather(JSON.parse(cityWeather));
    localStorage.setItem("weather", JSON.stringify(props.weather));
  };

  useEffect(() => {
    axios
      .get(`https://favqs.com/api/qotd`)
      .then((response) => {
        setQuote(response.data.quote);
      })
      .catch((error) => {
        console.error(error);
      });
    writeWeatherToStorage();
  }, []);

  return (
    <Card className="City">
      {props.weather && quote ? (
        <>
          <Heading name={props.weather.name}></Heading>
          <ul>
            <li>
              <span>
                <b>city:</b>
              </span>
              <span>{props.weather.name}</span>
            </li>
            <li>
              <span>
                <b>country:</b>
              </span>
              <span>{props.weather.sys.country}</span>
            </li>
            <li>
              <span>
                <b>temp:</b>
              </span>
              <span>{kelToCelcium(props.weather.main.temp)}</span>
            </li>
            <li>
              <span>
                <b>fell:</b>
              </span>
              <span>{kelToCelcium(props.weather.main.feels_like)}</span>
            </li>
            <li>
              <span>
                <b>description:</b>
              </span>
              <span>{props.weather.weather[0].description}</span>
            </li>
            <li>
              <span>
                <b>temp main:</b>
              </span>
              <span>{props.weather.weather[0].main}</span>
            </li>
            <li>
              <span>
                <b>temp max:</b>
              </span>
              <span>{kelToCelcium(props.weather.main.temp_max)}</span>
            </li>
            <li>
              <span>
                <b>temp min:</b>
              </span>
              <span>{kelToCelcium(props.weather.main.temp_min)}</span>
            </li>
          </ul>
        </>
      ) : (
        <LinearProgress color="secondary" />
      )}

      <Alert className="alert-quote">
        {quote ? <q>{quote.body}</q> : null}
        {quote ? <p>-- {quote.author}</p> : null}
      </Alert>
    </Card>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weather: state.cityWeather,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setWeather: (payload: string) => setCityWeather(dispatch, payload),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
