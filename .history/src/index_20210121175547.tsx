import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./rootReducer"

import App from './App'

const rootElement = document.getElementById('root')
let store = createStore(rootReducer)
const app = (
<Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  rootElement
)
