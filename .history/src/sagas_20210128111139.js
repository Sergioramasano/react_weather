import { put, takeEvery } from "redux-saga/effects";
import getCityWeather from "./plugins/requests/getCityWeather";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// ...

// Наша Сага-рабочий (worker Saga): будет выполнять асинхронную задачу увеличения счётчика
export function* incrementAsync(action) {
  yield delay(1000);
  yield put({ type: "SET_CITY_WEATHER", payload: action.payload });
}

// Наша Сага-наблюдатель: создаёт новые incrementAsync задачи на каждом INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("SET_CITY", incrementAsync);
}
