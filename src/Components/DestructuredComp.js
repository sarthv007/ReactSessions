import React from "react";

function DestructuredComp(props) {
  const { children, name, count, title, data, flag, object } = props;
  return (
    <div>
      {children}
      {name}
      {count}
    </div>
  );
}

export default DestructuredComp;
