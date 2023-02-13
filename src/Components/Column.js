import React from "react";

function Column({ user }) {
  return (
    <React.Fragment>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
    </React.Fragment>
  );
}

export default Column;
