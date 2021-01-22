import { createStore } from 'redux'

interface action {
    type: string,
    payload?: number
}

function todos(state = [], action:action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {state: state+action.payload}
    default:
      return state
  }
}

const store = createStore(todos, ['Use Redux'])

store.dispatch({
  type: 'ADD_TODO',
  payload: 100
})

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]