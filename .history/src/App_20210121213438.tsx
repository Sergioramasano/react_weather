import React from 'react';
import './App.scss';
import Counter from "./components/counter/Counter"
import Users from './components/users/users';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <hr/>
      <Users />
    </div>
  );
}

export default App;
