import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    this.setState(
      (prevState, props) => ({ count: prevState.count + 1 }),
      () => {
        console.log("callback count", this.state.count);
      }
    );

    //this.state.count = this.state.count + 1;
    console.log("outside", this.state.count);
  };

  incrementByFive = () => {
    // this.increment();
    // this.increment();
    // this.increment();
    // this.increment();
    // this.increment();
  };

  render() {
    return (
      <div>
        <h4>Counter: {this.state.count} </h4>
        <button onClick={() => this.incrementByFive()}>Increment By 5</button>
      </div>
    );
  }
}

export default Counter;
