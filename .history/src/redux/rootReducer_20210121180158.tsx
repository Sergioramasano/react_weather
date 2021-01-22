import {ADD, DECREASE, RESET} from "./actionTypes"

const initialState = {
    counter: 0
}

interface actionTypes {
    type: string,
    payload?: number 
}

const rootReducer=(state = initialState, action: actionTypes)=> {
 switch (action.type) {
   case ADD:
     return { counter: state.counter + 1 }
   case DECREASE:
     return { counter: state.counter - 1 }
     case DECREASE:
        return { counter: state.counter - 1 }
   default:
     return { counter: 0 }
 }
}

export default rootReducer