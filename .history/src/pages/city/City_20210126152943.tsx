import React from "react";
import { connect } from "react-redux";
import "./City.scss";

const City = (props: any) => {
  return (
    <section>
      <h1 className="City">City {props.weather.name}</h1>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weather: state.cityWeather,
  };
};

export default connect(mapStateToProps)(City);
