import React, { useState } from "react";

function FunctionComp1() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={(e) => setState({ ...state, firstName: e.target.value })}
      />

      <input
        type="text"
        name="lastName"
        value={state.lastName}
        onChange={(e) => setState({ ...state, lastName: e.target.value })}
      />
      <p>{JSON.stringify(state)}</p>

      {/* <button onClick={() => setName("Sidhesh Tikambare")}>Change Name</button> */}
    </div>
  );
}

export default FunctionComp1;
