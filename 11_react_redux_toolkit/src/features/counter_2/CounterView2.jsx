import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { barao, baraoDosKore, komao, sunnoKor } from "./counter2Slice";

const CounterView2 = () => {
    const count = useSelector(state => state.counter2.count)
    const dispatch = useDispatch()
  return (
    <>
      <h2>Second Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(barao())}>Bara</button>
      <button onClick={() => dispatch(baraoDosKore(10))}>Dos kore Bara</button>
      <button onClick={() => dispatch(sunnoKor())}>Sunno Kor</button>
      <button onClick={() => dispatch(komao())}>Koma</button>
    </>
  );
};

export default CounterView2;
