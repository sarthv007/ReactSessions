import React, { useEffect, useState, useRef } from "react";

function HookInterval() {
  const [counter, setCounter] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const handleClick = () => {
    clearInterval(interval.current);
  };

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={handleClick}>Clear Interval</button>
    </>
  );
}

export default HookInterval;
