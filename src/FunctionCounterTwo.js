import React, { useState } from "react";

function FunctionCounterTwo() {
  //syntax of useState
  let initialValue = 0;
  const [counter, setCounter] = useState(initialValue);

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={incrementByFive}>Increment by 5</button>
      <button onClick={() => setCounter(initialValue)}>Reset Counter</button>
    </div>
  );
}

export default FunctionCounterTwo;
