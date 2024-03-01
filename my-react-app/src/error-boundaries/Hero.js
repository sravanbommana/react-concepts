import React from 'react'

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

export default Hero
