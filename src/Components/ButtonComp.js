import React from "react";

function ButtonComp({ handleClick, text }) {
  console.log("From ButtonComp :" + text);
  return (
    <div>
      <button onClick={handleClick}>Increment {text}</button>
    </div>
  );
}

export default React.memo(ButtonComp);
