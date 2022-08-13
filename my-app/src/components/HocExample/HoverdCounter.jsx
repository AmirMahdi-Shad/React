import React from "react";
import WithCounter from "./WithCounter";

const HoveredCounter = ({ count, inCrementCount }) => {
  return (
    <div>
      <h2 onMouseOver={inCrementCount}>Hovered {count} times!</h2>
    </div>
  );
};

export default WithCounter(HoveredCounter, 10);
