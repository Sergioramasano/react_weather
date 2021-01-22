import { ADD, DECREASE, RESET, SET_CITY } from "./actionTypes";

export const increment = () => ({ type: ADD });
export const decrement = () => ({ type: DECREASE });
export const reset = () => ({ type: RESET });
export const setCity = (payload: string) => ({ type: SET_CITY, payload: city });
