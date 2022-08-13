import React, { useState, useEffect } from "react";
const FunctionalTimer = () => {
  const { count, setCount } = useState(0);
  useEffect(() => {
    const myInterVal = setInterval(() => {
      console.log("hi Amir");
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log("cwum");

      clearInterval(myInterVal);
    };
  }, [count, setCount]);
  return <div>hi</div>;
};

export default FunctionalTimer;
