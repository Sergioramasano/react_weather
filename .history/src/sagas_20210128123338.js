import React from "react";
import axios from "axios";

import { put, takeEvery } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let weather = null;

// ...

// Наша Сага-наблюдатель: создаёт новые incrementAsync задачи на каждом INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("SET_CITY", incrementAsync);
}

// Наша Сага-рабочий (worker Saga): будет выполнять асинхронную задачу увеличения счётчика
export function* incrementAsync(action) {
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
      type: "SET_CITY_WEATHER",
      payload: weather,
    });
  } catch (error) {
    yield put({ type: "SET_ERROR", payload: "Некорректное название города" });
  }
}
