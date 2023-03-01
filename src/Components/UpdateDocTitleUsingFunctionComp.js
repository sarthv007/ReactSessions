import React, { useEffect, useState } from "react";

function UpdateDocTitleUsingFunctionComp() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  let interval = 0;

  useEffect(() => {
    console.log("useEffect called");
    document.title = `Counter: ${counter}`;
    interval = setInterval(() => {
      console.log(JSON.stringify(new Date()));
    }, 1000);

    return () => {
      //clean up code. it will be same like a componentWillUnmount Methods in class comp
      console.log("Component Will Unmount code running");
      clearInterval(interval);
    };
  }, [name, counter]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Counter:{counter}
      </button>
    </div>
  );
}

export default UpdateDocTitleUsingFunctionComp;

//syntax of useEffect hook

//useEffect(callbackfnuc,[])
