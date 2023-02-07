import React from "react";
import Greet from "./Greet";

function Hello(props) {
  return (
    <div>
      <h2>Welcome {props.name}!</h2>
      <Greet data={[1, 2, 3, 4]} courseName="Javascript" />
    </div>
  );
}

export default Hello;
