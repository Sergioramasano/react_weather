import React from "react";
import { connect } from "react-redux";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./City.scss";

const City = (props: any) => {
  return (
    <section>
      <h1 className="City">City {props.weather.name}</h1>
      <WeatherCard weather={props.weather}></WeatherCard>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weather: state.cityWeather,
  };
};

export default connect(mapStateToProps)(City);
