import React, { Component } from "react";
import HOC from "./HOC";

class HoverCounter extends Component {
  
  render() {
    console.log("FRom hover component", this.props)
  
    return (
      <div>
        <h2>Counter: {this.props.counter}</h2>
        <button onMouseEnter={this.props.increment}>Increment</button>
        <button onMouseEnter={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}
export default HOC(HoverCounter);
