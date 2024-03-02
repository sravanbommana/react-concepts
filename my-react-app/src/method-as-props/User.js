import React, { Component } from "react";
import UserInfo from "./UserInfo";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserDetails: false,
    };
  }

  changeHandler = () => {
    this.setState({showUserDetails: !this.state.showUserDetails})
  }

  render() {
    return (
      <div>
        <div>Welecome User</div>
        <UserInfo changeHandler={this.changeHandler} />
        {this.state.showUserDetails && (
          <div>
            <div>User Name: Sravan</div>
            <div>User Name: 21</div>
          </div>
        )}
      </div>
    );
  }
}

export default User;
