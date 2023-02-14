import React, { Component } from "react";
import LifeCycleBComp from "./LifeCycleBComp";

export default class LifeCycleAComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sarthak Viadya",
    };
    console.log("Running from constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Running from getDerivedStateFromProps");
    return {
      name: props.name,
    };
  }

  componentDidMount() {
    console.log("Running from componentDidMount");
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }

  handleClick = () => {
    this.setState({
      name: "XYZ",
    });
  };

  render() {
    console.log("Running from render");
    return (
      <div>
        Name : {this.state.name}
        <button onClick={this.handleClick}>Change Name</button>
        <LifeCycleBComp />
      </div>
    );
  }
}
