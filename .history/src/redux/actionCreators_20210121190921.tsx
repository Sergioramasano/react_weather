import { ADD, DECREASE, RESET } from './actionTypes';


export const increment = () => ({ type: ADD });
export const decrement = () => ({ type: DECREASE })
export const reset = () => ({ type: RESET})