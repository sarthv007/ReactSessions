import React, { Component } from "react";

export default class HoverCounter2 extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.increment}>
          Counter: {this.props.counter}
        </h2>
      </div>
    );
  }
}
