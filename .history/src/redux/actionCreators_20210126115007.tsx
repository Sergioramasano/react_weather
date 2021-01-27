import {
  ADD,
  DECREASE,
  RESET,
  SET_CITY,
  SET_CITY_WEATHER,
  SET_ERROR,
} from "./actionTypes";

export const increment = () => ({ type: ADD });
export const decrement = () => ({ type: DECREASE });
export const reset = () => ({ type: RESET });
export const setCity = (payload: string) => ({ type: SET_CITY, payload });
export const setError = (payload: string) => ({ type: SET_ERROR, payload });
export const setCityWeather = (payload: any) => ({
  type: SET_CITY_WEATHER,
  payload,
});
