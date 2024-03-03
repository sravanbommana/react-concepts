import React, { Component, createRef } from "react";
import ForwardRefInput from "./ForwardRefInput";

class ForwardRefParentInput extends Component {
  constructor(props) {
    super(props);
    this.frRef = createRef();
  }

  clickHanlder = () => {
    this.frRef.current.focus();
  }
  
  render() {
    return <div>
      <ForwardRefInput ref={this.frRef}/>
      <div><button onClick={this.clickHanlder}>Give focus</button></div>
    </div>;
  }
}

export default ForwardRefParentInput;
