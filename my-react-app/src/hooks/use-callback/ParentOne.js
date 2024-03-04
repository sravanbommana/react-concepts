import React, { useCallback, useState } from 'react'
import ChildOne from './ChildOne';

const ParentOne = () => {
  console.log("Rendering ParentOne");
  const [total, setCount] = useState(0);
  const increaseCount = useCallback(() => {
   setCount(prevState => prevState + 1);
  }, [setCount]);
  return (
    <div>
      <div>USe Call Back Example</div>
      <div>count: {total}</div>
      <ChildOne increaseCount={increaseCount}/>
    </div>
  )
}

export default ParentOne
