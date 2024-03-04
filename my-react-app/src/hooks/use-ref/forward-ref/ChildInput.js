import React, { forwardRef } from 'react'

const ChildInput = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default ChildInput
