import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { kelToCelcium } from "../../plugins/toCelsium";

import "./City.scss";

const City = (props: any) => {
  let quote: any = {};
  const options: object = {
    method: "GET",
    url: `https://favqs.com/api/qotd`,
  };

  axios
    .request(options)
    .then(function (response) {
      quote = response.data;
      console.log(quote);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <section>
      <h1 className="City">City {props.weather.name}</h1>
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
      <p>{quote.quote.author}</p>
      <q>{quote.quote.body}</q>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    weather: state.cityWeather,
  };
};

export default connect(mapStateToProps)(City);
