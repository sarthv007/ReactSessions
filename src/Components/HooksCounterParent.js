import React, { useMemo, useState } from "react";

function HooksCounterParent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const checkEvenOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h2>Counter: {counterOne}</h2>
      <h4>{checkEvenOdd ? "Even" : "Odd"}</h4>
      <button onClick={() => setCounterOne((prevState) => prevState + 1)}>
        Increment Counter1
      </button>

      <h2>Counter: {counterTwo}</h2>
      <button onClick={() => setCounterTwo((prevState) => prevState + 1)}>
        Increment Counter2
      </button>
    </div>
  );
}

export default HooksCounterParent;
