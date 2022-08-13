import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);

  const previousValue = useRef();
  const previousCount = useRef();

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);
  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        // ref={inputElement}
        value={inputValue}
        onChange={changeHandler}
      />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
      <div>
        <button
          onClick={() => {
            setCount(Math.ceil(Math.random() * 100));
          }}
        >
          generate random number
        </button>
        <p> count is : {count}</p>
        <p> previous Count is : {previousCount.current}</p>
      </div>
    </div>
  );
};

export default UseRef;
