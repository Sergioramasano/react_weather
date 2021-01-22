import { ADD, DECREASE, RESET, SET_CITY } from "./actionTypes";

export const increment = () => ({ type: ADD });
export const decrement = () => ({ type: DECREASE });
export const reset = () => ({ type: RESET });
export const setCity = () => ({ type: SET_CITY, payload: string });
