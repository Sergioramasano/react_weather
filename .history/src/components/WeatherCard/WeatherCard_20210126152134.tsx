import React from "react";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import "./WeatherCard.scss";

const WeatherCard = ({ weather }: any) => {
  const kelToCelcium = (kel: number): string => {
    return `${Math.ceil(kel - 273.15)}°C`;
  };
  return (
    <Card className="Card">
      <CardContent>
        {weather ? (
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="icon"
          />
        ) : (
          <p>loading...</p>
        )}
        <ul>
          <li>
            <span>
              <b>city:</b>
            </span>
            <span>{weather.name}</span>
          </li>
          <li>
            <span>
              <b>country:</b>
            </span>
            <span>{weather.sys.country}</span>
          </li>
          <li>
            <span>
              <b>temp:</b>
            </span>
            <span>{kelToCelcium(weather.main.temp)}</span>
          </li>
          <li>
            <span>
              <b>fell:</b>
            </span>
            <span>{kelToCelcium(weather.main.feels_like)}</span>
          </li>
          <li>
            <span>
              <b>description:</b>
            </span>
            <span>{weather.weather[0].description}</span>
          </li>
          <li>
            <span>
              <b>temp main:</b>
            </span>
            <span>{weather.weather[0].main}</span>
          </li>
          <li>
            <span>
              <b>temp max:</b>
            </span>
            <span>{kelToCelcium(weather.main.temp_max)}</span>
          </li>
          <li>
            <span>
              <b>temp min:</b>
            </span>
            <span>{kelToCelcium(weather.main.temp_min)}</span>
          </li>
        </ul>
      </CardContent>
      <CardActions>
        <Button variant="contained">
          <Link className="link" to="/">
            {text}
          </Link>
          Show more...
        </Button>
      </CardActions>
    </Card>
  );
};

export default WeatherCard;
