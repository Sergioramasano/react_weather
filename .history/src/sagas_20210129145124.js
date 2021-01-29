import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { SET_CITY_WEATHER, SET_CITY, SET_ERROR } from "./redux/actionTypes";
let weather = null;

// ...

// Наша Сага-наблюдатель: создаёт новые setCityWeather задачи на каждом SET_CITY
export function* watchSetCityAsync() {
  yield takeEvery(SET_CITY, setCityWeather);
}

// Наша Сага-рабочий (worker Saga): будет выполнять асинхронную задачу получения погоды
export function* setCityWeather(action) {
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
    yield put({
      type: SET_CITY_WEATHER,
      payload: weather,
    });
  } catch (error) {
    yield put({
      type: SET_ERROR,
      payload: `Некорректное название города, ${error.message}`,
    });
  }
}
