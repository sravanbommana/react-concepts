import React, { Component } from 'react'
import PureComponentsExample from './PureComponentsExample';
import RegularComponent from './RegularComponent';

class ParentComponentOne extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: ''
    }
  }
  
  changeHandler = (event) => {
    this.setState({name:event.target.value});
  }
  render() {
    return (
      <div>
        <div>name: {this.state.name}</div>
        <div><input type="text" value={this.state.name} onChange={this.changeHandler}/></div>
        <PureComponentsExample name={this.state.name} />
        <RegularComponent name={this.state.name} />
      </div>
    )
  }
}

export default ParentComponentOne
