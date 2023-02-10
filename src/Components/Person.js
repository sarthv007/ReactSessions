import React from "react";

function Person({ user, index }) {
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    </>
  );
}

export default Person;
