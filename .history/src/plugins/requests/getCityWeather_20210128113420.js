import React, { useEffect, useState } from "react";

import axios from "axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setCity, setCityWeather, setError } from "../../redux/actionCreators";

const setWeatherCity = (props) => {
  console.log(props, 222);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        props.cityName
      }&appid=${"89131358011ec8066582be44f133475a"}`
    )
    .then((res) => {
      props.setCityWeatherByName(res.data);
      const localData = JSON.stringify(res.data);
      localStorage.setItem("weather", localData);
    })
    .catch((error) => {
      props.setError("Некорректное название города");
    });
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCityName: (payload) => dispatch(setCity(payload)),
    setCityWeatherByName: (payload) => setCityWeather(dispatch, payload),
    setError: (payload) => dispatch(setError(payload)),
  };
};

export default connect(mapDispatchToProps)(setWeatherCity);
