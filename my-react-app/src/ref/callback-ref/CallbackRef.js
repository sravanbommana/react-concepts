import React, { Component } from "react";

class CallbackRef extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  changeHandler = () =>{
    console.log(this.cbRef.value)
    alert(this.cbRef.value);
  }
  render() {
    return <div>
      <input type="text" ref={this.setCbRef} onChange={this.changeHandler} />
    </div>;
  }
}

export default CallbackRef;
