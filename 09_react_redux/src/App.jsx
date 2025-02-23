import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./services/actions/counterAction";
const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  // console.log(count)
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  return (
    <div className="app">
      <h2>Counter App</h2>

      <h3>Count: {count}</h3>
      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center'
      }}>
        <button onClick={handleDecrement}>(-) Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>(+) Increment</button>
      </div>
    </div>
  );
};

export default App;

// state - count 0
// actions - increment, decrement, reset
// reducers - increment -> count => count + 1
//          - decrement -> count => count - 1
//          - reset -> count => 0
// store
