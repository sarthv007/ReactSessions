import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}
