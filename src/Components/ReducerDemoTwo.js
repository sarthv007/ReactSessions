import { responsiveFontSizes } from "@mui/material";
import React, { useReducer } from "react";

const intialState = {
  counter: 0,
};

const ReducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    case "RESET":
      return intialState;
  }
};

function ReducerDemoTwo() {
  const [state, dispatch] = useReducer(ReducerFunction, intialState);

  return (
    <div>
      <p>Reducer demo two component</p>
      <h2>Counter: {state.counter}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
        Increment By 5
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        Decrement By 5
      </button>

      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment By 10
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement By 10
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
export default ReducerDemoTwo;
