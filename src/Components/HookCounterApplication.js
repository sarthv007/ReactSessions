import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  derementCounter,
  inrementCounter,
  resetCounter,
} from "../Actions/CounterActions";
import { DECREMENT, INCREMENT, RESET } from "../constant";
import { CounterSelector } from "../Selectors/CounterSelector";

function HookCounterApplication() {
  const counter = useSelector(CounterSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(inrementCounter())}>Increment</button>
      <button onClick={() => dispatch(derementCounter())}>Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
}

export default HookCounterApplication;
