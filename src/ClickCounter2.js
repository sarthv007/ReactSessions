import React, { Component } from "react";

export default class ClickCounter2 extends Component {
  render() {
    return (
      <div>
        <h2>Counter: {this.props.counter}</h2>
        <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}
