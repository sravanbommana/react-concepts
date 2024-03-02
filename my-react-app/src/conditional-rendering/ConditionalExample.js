import React, { Component } from "react";

export class ConditionalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
    };
  }

  render() {
    const { isAuthenticated } = this.state;
    return <div>
      { isAuthenticated ? (<div>Welcome Sravan</div>) : (<div>Welcome Guest</div>)}
      { isAuthenticated && <div>User Information</div>}
    </div>;
  }
}

export default ConditionalExample;
