import axios from "axios";

export const setWeatherCity = () => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        inputData || event.target.value
      }&appid=${"89131358011ec8066582be44f133475a"}`
    )
    .then((res: any) => {
      props.setCityWeatherByName(res.data);
      const localData = JSON.stringify(res.data);
      localStorage.setItem("weather", localData);
    })
    .catch((error?: any) => {
      props.setError("Некорректное название города");
    });
};
