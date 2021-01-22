
const initialState = {
    counter: 0
}

interface actionTypes {
    type: string,
    payload?: number 
}

const rootReducer=(state = initialState, action: actionTypes)=> {
 switch (action.type) {
   case 'ADD':
     return { value: state.counter + 1 }
   case 'DECREASE':
     return { value: state.counter - 1 }
   default:
     return state
 }
}

export default rootReducer