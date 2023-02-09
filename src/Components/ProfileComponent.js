import React, { Component } from "react";

export class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    //normal if else
    // if (isLoggedIn) {
    //   return <div>Welcome User</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    //element approch
    // let message;
    // if (isLoggedIn) {
    //   message = <div>Welcome User</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    //turnary operator
    // return isLoggedIn ? <div>Welcome User</div> : <div>Welcome Guest</div>;

    //short circuit operator

    return isLoggedIn && <div>Welcome User</div>;
  }
}

export default ProfileComponent;
