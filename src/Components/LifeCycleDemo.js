import React, { Component } from "react";

export default class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sarthak Vaidya",
      count: 0,
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       name: "Javascript",
  //     });
  //   }, 5000);
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return {
  //     counter: 3,
  //     courseName: "Javascript",
  //   };
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("prevState", prevState, this.state, snapshot);
    if (prevState.count < 3) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   //performance optimization
  //   return false;
  // }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}
