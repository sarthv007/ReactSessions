import React, { Component } from "react";

export default class UpdateLifeCycleMethod extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = {
      name: "sarthak",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Running from getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Running from shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("running from getSnapshotBeforeUpdate", prevState);
    document.getElementById("old").innerHTML = prevState.name;
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("running from componentDidUpdate");
    //console.log(snapshot);
    document.getElementById("new").innerHTML = this.state.name;
  }

  handleClick = () => {
    this.setState({
      name: "John",
    });
  };

  render() {
    console.log("Running from render");
    return (
      <div>
        <div id="old"></div>
        <div id="new"></div>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}
