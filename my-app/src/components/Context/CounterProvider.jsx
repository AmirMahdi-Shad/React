import React, { createContext, useContext, useReducer } from "react";
// createContext
const CounterContext = createContext(0);
const CounterContextDisPatcher = createContext();

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
// Component
const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // provider
    <CounterContext.Provider value={count}>
      <CounterContextDisPatcher.Provider value={dispatch}>
        {children}
      </CounterContextDisPatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
// export Context
export const useCount = () => useContext(CounterContext);
export const useCountActions = () => {
  return useContext(CounterContextDisPatcher);
};
