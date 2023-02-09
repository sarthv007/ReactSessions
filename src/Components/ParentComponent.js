import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
  handleClick = (name) => {
    console.log("from parent");
    alert(name);
  };

  render() {
    return (
      <div>
        <ChildComponent name={"sarthak"} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default ParentComponent;
