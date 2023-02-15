import React from "react";

function HeroComponent({ heroName }) {
  if (heroName === "jocker") {
    throw new Error("Not a hero");
  }

  return (
    <div>
      <h2>{heroName}</h2>
    </div>
  );
}

export default HeroComponent;
