import React, { Component } from "react";

export class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome User",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: "Bye Bye User",
    });
    console.log(this);
  }

  //   handleClick = () => {
  //     this.setState({
  //       message: "Bye Bye User",
  //     });
  //     console.log(this);
  //   };

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    );
  }
}

export default EventBinding;
