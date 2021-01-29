import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { setCityWeather, setError } from "./redux/actionCreators";
let weather = null;

// ...

// Наша Сага-наблюдатель: создаёт новые setCityWeather задачи на каждом SET_CITY
export function* watchSetCityAsync() {
  yield takeEvery("SET_CITY", setWeather);
}

// Наша Сага-рабочий (worker Saga): будет выполнять асинхронную задачу получения погоды
export function* setWeather(action) {
  try {
    yield axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((res) => {
        const localData = JSON.stringify(res.data);
        localStorage.setItem("weather", localData);
        weather = res.data;
      });
    yield put(setCityWeather(weather));
  } catch (error) {
    yield put(setError("Некорректное название города"));
  }
}
