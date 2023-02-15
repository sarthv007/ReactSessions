import React, { Component, PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("PureComponent component rendering");
    return <div>{this.props.name}</div>;
  }
}

export default PureComp;
