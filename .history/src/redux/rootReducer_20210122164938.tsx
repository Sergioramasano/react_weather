import { ADD, DECREASE, RESET, SET_CITY } from "./actionTypes";

const initialState = {
  counter: 0,
  city: "",
};

interface actionTypes {
  type: string;
  payload?: any;
}

const rootReducer = (state = initialState, action: actionTypes): void => {
  switch (action.type) {
    case ADD:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case SET_CITY:
      return { city: action.payload };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};

export default rootReducer;
