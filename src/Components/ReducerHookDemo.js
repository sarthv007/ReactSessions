import React, { useReducer } from "react";

const intialState = 0;

const ReducerFunction = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return intialState;

    default:
      return state;
  }
};

function ReducerHookDemo() {
  const [counter, dispatch] = useReducer(ReducerFunction, intialState);

  return (
    <div>
      <p>Reducer demo component</p>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
}
export default ReducerHookDemo;
