import React from "react";

function RegularChildComp(props) {
  console.log("RegularChildComp rendering");
  return <div>{props.name}</div>;
}

export default RegularChildComp;
