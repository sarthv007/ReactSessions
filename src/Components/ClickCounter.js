import React, { Component } from "react";
import HOC from "./HOC";

class ClickCounter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;
    console.log("FRom click counter", this.props);
    return (
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}
export default HOC(ClickCounter);
