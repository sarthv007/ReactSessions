import React, { Component } from "react";

export default class ComponentC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sarthak Viadya",
    };
    console.log("Running from constructor");
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
    console.log("running from getSnapshotBeforeUpdate");
    return "This is snapshot";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("running from componentDidUpdate");
    //console.log(snapshot);
    if (this.state.name !== prevState.name) {
      this.setState({
        name: "sarthak 007",
      });
    }
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
        Name: {this.state.name}
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}
