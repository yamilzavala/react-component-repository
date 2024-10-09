import React from "react";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h3>Counter</h3>
        {count}
      </div>
      <div className="container-btn">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      </div>
    </div>
  );
}
