import React, {memo} from 'react'

const ChildOne = ({increaseCount}) => {
  console.log("Rendering ChildOne")
  return (
    <div>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  )
}

export default memo(ChildOne);
