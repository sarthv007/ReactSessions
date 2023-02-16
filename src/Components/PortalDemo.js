import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class PortalDemo extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h1>Portal Demo</h1>
      </div>,
      document.getElementById("my-app-root")
    );
  }
}

//ReactDOM.createPortal(Eleme, Node)
