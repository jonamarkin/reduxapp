import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, login} from './Actions'


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Counter {counter}</p>
      <button onClick = {() => dispatch(increment(5))}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
      <button onClick = {() => dispatch(login())}>See Something</button>

      {isLogged ? <h3>Valuable information I couldn't see</h3> : ''}
      {/* <h3>Valuable information I couldn't see</h3> */}
    </div>
  );
}

export default App;
