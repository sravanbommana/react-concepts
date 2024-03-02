import React, { Component, createRef } from 'react'

class InputRef extends Component {

  constructor(props) {
    super(props)
    this.inputRef = createRef();
  }
  
  changeHandler = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} onChange={this.changeHandler}/>
      </div>
    )
  }
}

export default InputRef
