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
export const setCityWeather = async (dispatch: any, payload: any) => {
  //BEFORE SOME ASYNC ACTION
  console.table("Thunk", ["before dispatch"]);
  setTimeout(() => {
    // SOME ASYNC ACTION
    dispatch({
      type: SET_CITY_WEATHER,
      payload,
    });
    console.table("Thunk", ["End dispatch"]);
    // SOME ASYNC ACTION END
  }, 2000);
};
