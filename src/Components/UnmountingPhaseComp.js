import React, { Component } from "react";
import UnMountLifeCycleChildComponent from "./UnMountLifeCycleChildComponent";

export default class UnmountingPhaseComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: true,
    };
  }

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    return (
      <div>
        {this.state.flag && <UnMountLifeCycleChildComponent />}
        <button onClick={this.handleClick}>Remove Component</button>
      </div>
    );
  }
}
