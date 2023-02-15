import React, { Component } from "react";

export default class RegularComponent extends Component {
  render() {
    console.log("Regular component rendering");
    return <div>{this.props.name}</div>;
  }
}
