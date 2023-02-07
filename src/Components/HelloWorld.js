import React from "react";

function HelloWorld() {
  const title = <h1>Welcome to react world!</h1>;
  let style = { color: "green", fontSize: "30px" };
  return (
    <div className="container">
      <div style={style}>Hello World!</div>
      <div>{title}</div>
      <input type="text" name="" value="" />
      <img src="" alt="" />
      <br />
    </div>
  );
}

export default HelloWorld;

//What is JSX : combination of html + javascript

// onclick="getData()"
// onload="getData()"

//in jSX
// onClick={}
// onLoad={}

//for  htmlFor
