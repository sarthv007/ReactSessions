import React from "react";

function Welcome(props) {
  console.log(props);
  return <div>{props.children}</div>;
}

export default Welcome;
