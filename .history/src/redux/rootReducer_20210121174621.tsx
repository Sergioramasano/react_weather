interface actionTypes {
    type: string,
    payload?: number 
}

const rootReducer=(state = { value: 0 }, action: actionTypes)=> {
 switch (action.type) {
   case 'ADD':
     return { value: state.value + 1 }
   case 'DECREASE':
     return { value: state.value - 1 }
   default:
     return state
 }
}

export default rootReducer