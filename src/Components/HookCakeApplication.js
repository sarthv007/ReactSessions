import React from "react";
import { useDispatch, useSelector } from "react-redux";

function HookCakeApplication() {
  const numberOfCake = useSelector((state) => state.cakeReducer.numberOfCake);
  const disptach = useDispatch();

  return (
    <div>
      <h2>Number of Cake : {numberOfCake} </h2>
      <button onClick={() => disptach({ type: "BUY_CAKE" })}>Buy Cake</button>
    </div>
  );
}

export default HookCakeApplication;
