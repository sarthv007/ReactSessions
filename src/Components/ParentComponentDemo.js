import React, { useCallback, useState } from "react";
import ButtonComp from "./ButtonComp";
import CounterComp from "./CounterComp";
import Title from "./Title";

function ParentComponentDemo() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementSalary = useCallback(() => {
    setSalary((prevSal) => prevSal + 10000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, [age]);

  return (
    <div>
      <Title />
      <CounterComp text={"Age"} counter={age} />
      <ButtonComp text={"age"} handleClick={incrementAge} />
      <CounterComp text={"Salary"} counter={salary} />
      <ButtonComp text={"Salary"} handleClick={incrementSalary} />
    </div>
  );
}

export default ParentComponentDemo;
