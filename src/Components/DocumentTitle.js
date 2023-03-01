import React, { Component } from "react";

export default class DocumentTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  render() {
    return <div>DocumentTitle</div>;
  }
}
