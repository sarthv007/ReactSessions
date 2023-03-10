import { useState } from "react";

function useInput(initalValue) {
  const [value, setValue] = useState(initalValue);

  const reset = () => {
    setValue(initalValue);
  };

  const bind = {
    value: value,
    onChange: (event) => setValue(event.target.value),
  };

  return [value, bind, reset];
}

export default useInput;
