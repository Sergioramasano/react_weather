import React from "react";
import { Dispatch } from "redux";
import "./City.scss";

const City = () => {
  return (
    <section>
      <h1 className="City">City</h1>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weather: state.cityWeather,
  };
};

export default connect(mapStateToProps)(City);
