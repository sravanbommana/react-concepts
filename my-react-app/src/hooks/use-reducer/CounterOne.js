import React, { useReducer } from 'react'
import { counterOneReducer, initialState } from './CounterOneReducer'
import { decrementCount, incrementCount } from '../context-with-reducer/actions/CounterActions';

const CounterOne = () => {
  const[state, dispatch] = useReducer(counterOneReducer, initialState);

  return (
    <div>
      <div>Count:{state.count}</div>
      <div>
        <button onClick={() => dispatch(incrementCount())}>Increment</button>
        <button  onClick={() => dispatch(decrementCount())}>Decrement</button>
      </div>
    </div>
  )
}

export default CounterOne
