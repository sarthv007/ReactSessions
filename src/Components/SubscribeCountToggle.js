import React, { Component } from "react";
const img1 = require("./imgs/subscribe.png");
const img2 = require("./imgs/subscribed.png");

class SubscribeCountToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sub: "Subscribe",
      message: "Please hit the subscribe button",
      url: img1,
      flag: false,
    };
  }

  handleClick = () => {
    let message = !this.state.flag
      ? "Thank you for visiting our channel, Please hit bell icon"
      : "Please hit the subscribe button";
    let subText = !this.state.flag ? "Subscribed" : "Subscribe";
    let url = !this.state.flag ? img2 : img1;
    this.setState({
      flag: !this.state.flag,
      sub: subText,
      message: message,
      url: url,
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

export default SubscribeCountToggle;
