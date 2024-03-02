import React, { PureComponent, Component } from 'react'

export class PureComponentsExample extends PureComponent {
  render() {
    console.log("Inside Pure Componbent")

    return (
      <div>
        Pure Component: {this.props.name}
      </div>
    )
  }
}

export default PureComponentsExample
