import React, { useState } from "react";
import useCounter from "./useCounter";

function HookCounter1() {
  const intialState = 0;
  const [counter, increment, decrement, reset] = useCounter(intialState);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default HookCounter1;
