import React, {createContext, useContext, useReducer} from "react";
import { counterReducer, initialState } from "../reducers/CounterReducer";

export const CounterContext = createContext();

const CounterContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{state, dispatch}}>
      {children}
    </CounterContext.Provider>
  )
}
export default CounterContextProvider;

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if(!context) {
    throw new Error("Use Context within CounterContextProvider");
  }

  return context;
}
