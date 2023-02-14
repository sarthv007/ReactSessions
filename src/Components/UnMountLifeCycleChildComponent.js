import React, { Component } from "react";

export default class UnMountLifeCycleChildComponent extends Component {
  componentWillUnmount() {
    //code for releasing resorces will go here
    console.log("componentWillUnmount running");
  }

  render() {
    return <div>Welcome to react js</div>;
  }
}
