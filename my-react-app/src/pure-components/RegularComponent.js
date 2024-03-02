import React, { Component } from 'react'

export class RegularComponent extends Component {
  render() {
    console.log("Inside Regular Componbent")

    return (
      <div>
                Regular Component: {this.props.name}

      </div>
    )
  }
}

export default RegularComponent
