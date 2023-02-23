import React from "react";
import { MyContext } from "./Context";

function ComponentG() {
  console.log("From ComponentG");
  return (
    <MyContext.Consumer>
      {(state) => {
        return (
          <>
            <h2>Counter: {state.counter}</h2>
            <button onClick={state.increment}>Increment</button>
          </>
        );
      }}
    </MyContext.Consumer>
  );
}

export default ComponentG;
