import React, { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";

function FetchDataUsingHook() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resoponse) => resoponse.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  }, []);

  const usersHtml =
    users &&
    users.length &&
    users.map((user) => (
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
      </tr>
    ));

  return (
    <div>
      <h2>Welcome to React useEffect</h2>

      <Button color="primary" href="#" tag="a">
        Fetch Data
      </Button>

      {users.length ? (
        <Table hover>
          <thead>
            <tr>
              <th>#ID</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>{usersHtml}</tbody>
        </Table>
      ) : null}
    </div>
  );
}

export default FetchDataUsingHook;
