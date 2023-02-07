import React, { Component } from "react";
import Users from "./Users";

export class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Users users={this.state.data} />
      </div>
    );
  }
}

export default Container;
