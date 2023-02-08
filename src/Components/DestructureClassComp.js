import React, { Component } from "react";

class DestructureClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome user",
      count: 100,
    };
  }

  render() {
    const { message, count } = this.state;
    const { title } = this.props;

    return (
      <div>
        <p>{title}</p>
        {message} {count}
      </div>
    );
  }
}

export default DestructureClassComp;
