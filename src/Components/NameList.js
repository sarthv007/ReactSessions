import React, { Component } from "react";
import Person from "./Person";

export class NameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: "sarthak",
          email: "sa@gmail.com",
        },
        {
          id: 2,
          name: "sidhesh",
          email: "sid@gmail.com",
        },
        {
          id: 3,
          name: "nitin",
          email: "nitin@gmail.com",
        },
      ],
    };
  }
  render() {
    const { users } = this.state;
    const nameList = users.map((user) => <Person key={user.id} user={user} />);

    return (
      <div>
        <table border="1" width="800" height="200">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{nameList}</tbody>
        </table>
      </div>
    );
  }
}

export default NameList;

//         key = 1    key =2
// Arr = ["sartak", "Sidhesh"]
// Arr = ["Nitin","sartak", "Sidhesh"]
//         key=3
