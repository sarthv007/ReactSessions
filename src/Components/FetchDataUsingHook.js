import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchDataUsingHook() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setUser(res.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setUser({});
        setError("Something went wrong");
      });
  }, []);

  return (
    <>
      <h2>Welcome to React useEffect</h2>
      <div>
        {loading ? <div>Loading...</div> : user.name}
        {error ? error : null}
      </div>
    </>
  );
}

export default FetchDataUsingHook;
