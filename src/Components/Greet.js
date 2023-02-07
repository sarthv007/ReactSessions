import React, { Component } from "react";

class Greet extends Component {
  render() {
    return (
      <div>
        Welcome to React world
        <h2>
          {this.props.data} {this.props.courseName}
        </h2>
      </div>
    );
  }
}

export default Greet;
