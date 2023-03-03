import React from "react";

function Title() {
  console.log("From Title");
  return (
    <div>
      <h2>UseCallback hook demo</h2>
    </div>
  );
}

export default React.memo(Title);
