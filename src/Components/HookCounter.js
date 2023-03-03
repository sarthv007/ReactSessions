import React, { useState } from "react";

function HookCounter() {
  const intialState = 0;
  const [counter, setCounter] = useState(intialState);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCounter(intialState)}>Reset</button>
    </div>
  );
}

export default HookCounter;
