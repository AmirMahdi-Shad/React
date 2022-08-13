import React, { useState } from "react";
const WithCounter = (WrappedComponent, inCrementValue) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);
    const inCrementCount = () => {
      setCount(count + inCrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        inCrementCount={inCrementCount}
        {...props}
      />
    );
  };
  return UpdatedComponent;
};
export default WithCounter;
