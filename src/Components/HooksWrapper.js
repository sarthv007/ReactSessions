import React, { useState } from "react";
import UpdateDocTitleUsingFunctionComp from "./UpdateDocTitleUsingFunctionComp";

function HooksWrapper() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <UpdateDocTitleUsingFunctionComp />}
    </div>
  );
}

export default HooksWrapper;
