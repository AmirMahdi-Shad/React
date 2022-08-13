import React from "react";
import WithCounter from "./WithCounter";
const ClickCounter = ({ count, inCrementCount }) => {
  return (
    <div>
      <h2 onClick={inCrementCount}>Clicked {count} times!</h2>
    </div>
  );
};

export default WithCounter(ClickCounter, 5);
