import React, { Component } from "react";
import Column from "./Column";

class TableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          firstName: "sarthak",
          lastName: "vaidya",
        },
        {
          firstName: "sidhesh",
          lastName: "tikambare",
        },
        {
          firstName: "nitin",
          lastName: "chauhan",
        },
      ],
    };
  }

  render() {
    const { users } = this.state;
    let userList = users.map((user) => (
      <>
        <tr>
          <Column />
        </tr>
      </>
    ));

    return (
      <>
        <table border="1" width="700" height="200">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
      </>
    );
  }
}

export default TableComponent;
