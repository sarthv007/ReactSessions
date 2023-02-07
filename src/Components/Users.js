import React from "react";

function Users(props) {
  console.log(props.users);
  let html = props.users.map((item) => <li>{item.name}</li>);
  return (
    <div>
      <ul>{html}</ul>
    </div>
  );
}

export default Users;
