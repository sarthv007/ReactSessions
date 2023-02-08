import React, { Component } from "react";
const img1 = require("./imgs/subscribe.png");
const img2 = require("./imgs/subscribed.png");

class SubscriberCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sub: "Subscribe",
      message: "Please hit the subscribe button",
      url: img1,
    };
  }

  handleClick = () => {
    this.setState({
      sub: "Subscribed",
      message: "Thank you for visiting our channel, Please hit bell icon",
      url: img2,
    });
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h4>{this.state.message}</h4>
        <button onClick={() => this.handleClick()}>{this.state.sub}</button>
        <p>
          <img src={this.state.url} style={{ width: "40px", height: "40px" }} />
        </p>
      </div>
    );
  }
}

export default SubscriberCounter;
