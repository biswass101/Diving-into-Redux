import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increByValue, increment, reset } from "./counterSlice";
import { MdOutlineArrowDropDown } from "react-icons/md";

const CounterView = () => {
  const [value, setValue] = useState(5);
  const [toggle, setToggle] = useState(false);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleSetValue = (e) => {
    const newValue = Number(e.target.value) || 0;
    setValue(newValue);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch(increByValue(value))}>Increment By Value: {value}</button>
        <MdOutlineArrowDropDown onClick={() => setToggle(true)} />
      </div>
      {toggle && (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input type="text" value={value} onChange={handleSetValue} />
          <button onClick={() => setToggle(false)}>OK</button>
        </div>
      )}
    </div>
  );
};

export default CounterView;
