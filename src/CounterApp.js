import React, { Component } from "react";

export default class CounterApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    const { counter } = this.state;
    return this.props.render(counter, this.increment);
  }
}
