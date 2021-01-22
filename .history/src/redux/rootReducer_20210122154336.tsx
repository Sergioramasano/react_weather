import { ADD, DECREASE, RESET } from "./actionTypes";

const initialState = {
  counter: 0,
  city: "",
};

interface actionTypes {
  type: string;
  payload?: number;
}

const rootReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case ADD:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};

export default rootReducer;
