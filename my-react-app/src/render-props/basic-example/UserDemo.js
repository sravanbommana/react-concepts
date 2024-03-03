import React, { Component } from 'react'

 class UserDemo extends Component {
  render() {
    return (
      <div>
        {this.props.name(false)}
      </div>
    )
  }
}

export default UserDemo
