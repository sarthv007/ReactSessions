import React, { useState } from "react";

function useCounter(intialState) {
  const [counter, setCounter] = useState(intialState);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const reset = () => {
    setCounter(intialState);
  };

  return [counter, increment, decrement, reset];
}

export default useCounter;
