import React from "react";

function HelloWithoutJsx() {
  return React.createElement(
    "div",
    { id: "wrapper" },
    React.createElement(
      "div",
      "",
      React.createElement("h2", { className: "title" }, "Hello React World!")
    )
  );
}

export default HelloWithoutJsx;
