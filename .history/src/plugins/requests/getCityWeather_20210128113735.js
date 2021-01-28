import axios from "axios";

export const setWeatherCity = (props) => {
  console.log(props, 222);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        props.cityName
      }&appid=${"89131358011ec8066582be44f133475a"}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      props.setError("Некорректное название города");
    });
};