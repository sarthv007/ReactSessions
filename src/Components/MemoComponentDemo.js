import React from "react";

function MemoComponentDemo(props) {
  console.log("MemoComponentDemo rendering");
  return <div>{props.name}</div>;
}

export default React.memo(MemoComponentDemo);
