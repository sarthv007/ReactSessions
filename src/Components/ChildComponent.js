import React from "react";

function ChildComponent(props) {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.handleClick("sarthak vaidya")}>
        Click Me
      </button>
    </div>
  );
}

export default ChildComponent;
