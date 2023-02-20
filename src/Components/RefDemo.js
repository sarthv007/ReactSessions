import React, { Component } from "react";

export default class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    //how to create a callback ref
    this.cbRef = null;
    this.setCBRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    //this.inputRef.current.focus();
    if (this.cbRef) {
      this.cbRef.focus();
    }

    //console.log(this.inputRef.current.fucus());
  }

  handleClick = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />

        <input type="text" ref={this.setCBRef} />

        <button onClick={this.handleClick}>Print</button>
      </div>
    );
  }
}
