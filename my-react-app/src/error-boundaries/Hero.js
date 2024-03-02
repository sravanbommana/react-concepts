import React from 'react'
import { withErrorBoundaries } from '../hoc/withErrrorBoundaries';

function Hero(props) {
  if(props.role === 'Joker') {
    throw new Error("Joker is not Hero");
  }
  return (
    <div>
      {props.role}
    </div>
  )
}

export default withErrorBoundaries(Hero);
