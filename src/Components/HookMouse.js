import React, { useEffect } from "react";
import { useState } from "react";

function HookMouse() {
  console.log("Mouse Event");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePostion = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePostion);
    // return () => {
    //   console.log("Removed Event Handler");
    //   window.removeEventListener("mouseMove", logMousePostion);
    // };
  }, []);

  return (
    <div>
      value of X: {x} and Y: {y}
    </div>
  );
}

export default HookMouse;
