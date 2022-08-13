import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count one is {count}</h2>
      {/* reset  */}
      <button
        className="m-4 bg-zinc-400 p-2"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      {/* counter1 add*/}
      <button
        className="m-4 bg-zinc-400 p-2"
        onClick={() => dispatch({ type: "add", value: 110 })}
      >
        add
      </button>
      {/* counter1 decrement*/}
      <button
        className="m-4 bg-zinc-400 p-2"
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        decrement
      </button>
      {/* counter 2 */}
      <h2>Count Two is {countTwo}</h2>
      {/* reset */}
      <button
        className="m-4 bg-zinc-400 p-2"
        onClick={() => {
          dispatchTwo({ type: "reset" });
        }}
      >
        Reset
      </button>
      {/* counter2 add*/}
      <button
        className="m-4 bg-zinc-400 p-2"
        onClick={() => dispatchTwo({ type: "add", value: 1 })}
      >
        add
      </button>
      {/* counter2 decrement*/}
      <button
        className="m-4 bg-zinc-400 p-2"
        onClick={() => {
          dispatchTwo({ type: "decrement", value: 1 });
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default CounterOne;
