import React from "react";
import axios from "axios";

import { put, takeEvery } from "redux-saga/effects";
import getCityWeather from "./plugins/requests/getCityWeather";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let weather = null;

// ...

// Наша Сага-наблюдатель: создаёт новые incrementAsync задачи на каждом INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("SET_CITY", incrementAsync);
}

// Наша Сага-рабочий (worker Saga): будет выполнять асинхронную задачу увеличения счётчика
export function* incrementAsync(action) {
  yield axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${props}&appid=${"89131358011ec8066582be44f133475a"}`
    )
    .then((res) => {
      const localData = JSON.stringify(res.data);
      localStorage.setItem("weather", localData);
      weather = res.data;
    })
    .catch((error) => {
      console.log("Некорректное название города");
    });
  yield put({
    type: "SET_CITY_WEATHER",
    payload: getCityWeather(action.payload),
  });
}
