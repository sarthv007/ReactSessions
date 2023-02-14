import React, { Component } from "react";

export default class LifeCycleBComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
    };
    console.log("Running from B's constructor ");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Running from B's getDerivedStateFromProps");
    return {
      name: props.name,
    };
  }

  componentDidMount() {
    console.log("Running from B's componentDidMount");
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }

  render() {
    console.log("Running from B's render");
    return <div>Child Component B</div>;
  }
}
