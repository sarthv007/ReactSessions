import React, { Component } from "react";

export default class UserComp extends Component {
  render() {
    return <div>{this.props.render(false)}</div>;
  }
}
// export default HOC(UserComp);
