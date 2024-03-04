import React from 'react'
import { useCounterContext } from '../context-with-reducer/contexts/CounterContext'
import { incrementCount, decrementCount, reset } from '../context-with-reducer/actions/CounterActions';

const Counter = () => {
  const {state, dispatch} = useCounterContext();
  const incrementHandler = () => {
      dispatch(incrementCount());
  }
  const decrementHandler = () => {
    dispatch(decrementCount());
  }
  const resetHandler = () => {
    dispatch(reset());
  }
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button  onClick={decrementHandler}>Decrement</button>
      <button  onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default Counter
