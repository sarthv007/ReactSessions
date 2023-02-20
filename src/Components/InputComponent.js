import React, { Component } from "react";

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.inputRef1 = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
    console.log(this.inputRef.current.value);
    console.log(this.inputRef1.current.value);

    this.inputRef1.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.inputRef1} />
      </div>
    );
  }
}
