import React, { useState } from "react";
import useInput from "./useInput";

function HookFormDemo() {
  let arr = [1, 2, 3];
  const [a, b, c] = arr;
  console.log(a, b, c);

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form Submitted", firstName, lastName);
    resetFirstName("");
    resetLastName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" {...bindFirstName} />
        <input type="text" {...bindLastName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HookFormDemo;
