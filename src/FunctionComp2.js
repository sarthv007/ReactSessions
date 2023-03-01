import React, { useState } from "react";

function FunctionComp2() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "john",
      lastName: "Doe",
    },
    {
      id: 2,
      firstName: "json",
      lastName: "deo",
    },
    {
      id: 3,
      firstName: "mike",
      lastName: "tisan",
    },
  ]);

  const addUser = () => {
    setUsers([
      ...users,
      {
        id: users.length,
        firstName: `john ${users.length}`,
        lastName: `Deo ${users.length}`,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addUser}>add User </button>
      <table style={{ border: "1px solid green" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>last Name</th>
          </tr>
        </thead>
        {users.length &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default FunctionComp2;
