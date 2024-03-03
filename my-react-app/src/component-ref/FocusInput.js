import React, { Component, createRef } from 'react'
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = createRef();
  }
  
  clickHandler = () => {
    this.componentRef.current.focusInput();
  }
  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <div><button onClick={this.clickHandler}>Focus Input</button></div>
      </div>
    )
  }
}

export default FocusInput
