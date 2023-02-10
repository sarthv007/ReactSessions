import React, { Component } from "react";
import Person from "./Person";
import "./UserList.scss";
import styles from "./UserList.module.scss";

export class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 0,
          name: "sarthak",
          email: "sa@gmail.com",
        },
        {
          id: 1,
          name: "sidhesh",
          email: "sid@gmail.com",
        },
        {
          id: 2,
          name: "nitin",
          email: "nitin@gmail.com",
        },
      ],
    };
  }

  handleAtEnd = () => {
    const { users } = this.state;
    this.setState({
      users: [
        ...users,
        {
          id: users.length + 1,
          name: `nitin ${users.length + 1}`,
          email: "n@gmail.com",
        },
      ],
    });
  };

  handleAtStart = () => {
    const { users } = this.state;
    this.setState({
      users: [
        {
          id: users.length + 1,
          name: `nitin ${users.length + 1}`,
          email: "n@gmail.com",
        },
        ...users,
      ],
    });
  };

  render() {
    let styleObject = {
      background: "cyan",
      height: "100vh",
      width: "100%",
    };

    const { users } = this.state;
    const nameList = users.map((user, index) => (
      <Person key={user.id} index={index} user={user} />
    ));
    console.log(styles);
    return (
      <div className={styles.userList} style={styleObject}>
        <div style={{ padding: "10px" }}>
          <button className={styles.btnAdd} onClick={this.handleAtStart}>
            Add At Start
          </button>
          <button className={styles.btnRemove} onClick={this.handleAtEnd}>
            Add At End
          </button>
        </div>

        <br />
        <br />
        <br />
        <table border="1" width="800" height="200">
          <thead>
            <tr>
              <th>Index</th>
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

export default UsersList;

//         key = 1    key =2
// Arr = ["sartak", "Sidhesh"]
// Arr = ["Nitin","sartak", "Sidhesh"]
//         key=3
