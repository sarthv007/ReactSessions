import React, { useEffect, useRef, useState } from "react";

function UseRefHookRefDemo() {
  const inputRef = useRef();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log(inputRef.current.value);
  }, [display]);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    </div>
  );
}

export default UseRefHookRefDemo;
