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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setError: (payload: string) => dispatch(setError(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
