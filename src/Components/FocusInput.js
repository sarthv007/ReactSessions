import React, { Component } from "react";
import InputComponent from "./InputComponent";

export default class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  handleClick = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <InputComponent ref={this.componentRef} />
        <button onClick={this.handleClick}>Focus</button>
      </div>
    );
  }
}
