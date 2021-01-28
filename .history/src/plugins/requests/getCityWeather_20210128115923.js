import axios from "axios";

const setWeatherCity = (props) => {
  console.log(props, 222);
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${props}&appid=${"89131358011ec8066582be44f133475a"}`
    )
    .then((res) => {
      const localData = JSON.stringify(res.data);
      localStorage.setItem("weather", localData);
      alert(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log("Некорректное название города");
    });
};

export default setWeatherCity;
