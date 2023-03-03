import React from "react";

function CounterComp({ text, counter }) {
  console.log("From CounterComp");
  return (
    <div>
      {text} : {counter}
    </div>
  );
}

export default React.memo(CounterComp);
