import React, { Component } from "react";

export default class RegularComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.name === this.props.name) {
      return false;
    }
  }

  render() {
    console.log("Regular component rendering");
    return <div>{this.props.name}</div>;
  }
}
