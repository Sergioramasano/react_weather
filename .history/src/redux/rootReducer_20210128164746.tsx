import {
  ADD,
  DECREASE,
  RESET,
  SET_CITY,
  SET_CITY_WEATHER,
  SET_ERROR,
  REMOVE_ERROR,
} from "./actionTypes";

interface IState {
  counter: number;
  city: string;
  cityWeather: any;
  errorText: string;
}

const initialState: IState = {
  counter: 0,
  city: "",
  cityWeather: null,
  errorText: "",
};

interface actionTypes {
  type: string;
  payload?: any;
}

const rootReducer = (state: any = initialState, action: actionTypes) => {
  switch (action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case SET_CITY:
      return { ...state, city: action.payload };
    case SET_CITY_WEATHER:
      return { ...state, cityWeather: action.payload };
    case SET_ERROR:
      return { ...state, errorText: action.payload };
    case REMOVE_ERROR:
      return { ...state, errorText: "" };
    case RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default rootReducer;
