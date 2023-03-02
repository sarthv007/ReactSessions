import React, { useEffect, useState } from "react";
import { Button, ButtonDropdown, Input, Table } from "reactstrap";

function FetchSignleRecord() {
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1);

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resoponse) => resoponse.json())
      .then((res) => {
        console.log(res);
        setUser(res);
      });
  }, [buttonId]);

  useEffect(() => {
    console.log("UseEFfect is called");
  }, []);

  useEffect(() => {
    console.log("UseEFfect is called1");
  }, []);

  useEffect(() => {
    console.log("UseEFfect is called2");
  }, []);

  useEffect(() => {
    console.log("UseEFfect is called3");
  }, []);

  return (
    <div>
      <h2>Welcome to React useEffect</h2>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <p>{user && user.name}</p>
      <button onClick={() => setButtonId(id)}>Fetch User</button>
    </div>
  );
}

export default FetchSignleRecord;
