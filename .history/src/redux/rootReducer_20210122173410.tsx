import { ADD, DECREASE, RESET, SET_CITY } from "./actionTypes";

const initialState = {
  counter: 0,
  city: "",
};

interface actionTypes {
  type: any;
  payload?: any;
}

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case SET_CITY:
      return { city: "ff" };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};

export default rootReducer;
