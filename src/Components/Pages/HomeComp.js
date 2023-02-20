import React from "react";
import { useNavigate } from "react-router-dom";

function HomeComp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("place-order");
  };

  return (
    <div>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default HomeComp;
