import React, { useState } from "react";

function FunctionComp3() {
  const [state, setState] = useState({
    counter: 0,
    name: "John",
    data: [1, 2, 3, 4, 5],
    flag: true,
    users: {},
    userName: null,
    json: undefined,
  });

  return (
    <div>
      <h2>{JSON.stringify(state)}</h2>
      <button
        onClick={() =>
          setState({
            ...state,
            name: "Json",
          })
        }
      >
        Change Name
      </button>
    </div>
  );
}

export default FunctionComp3;
