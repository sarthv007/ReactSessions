import React, { Component } from "react";

export default class ClassInterval extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <>
        <h1>Counter : {this.state.counter}</h1>
        <button onClick={this.handleClick}>Clear Interval</button>
      </>
    );
  }
}
