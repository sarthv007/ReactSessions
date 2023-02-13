import React, { Component } from "react";

class Greet extends Component {
  render() {
    return (
      <>
        <h2>Welcome to React world</h2>
        <h2>
          Welcome
          {this.props.data} {this.props.courseName}
        </h2>
      </>
    );
  }
}

export default Greet;
