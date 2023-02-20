import React, { Component } from "react";
import HOC from "./HOC";

class HOCDemoComponent extends Component {
  render() {
    console.log("From HOCDemoComponent ", this.props);
    return <div>HOC Demo Component Loaded</div>;
  }
}

export default HOC(HOCDemoComponent);
