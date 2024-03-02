import React, { Component } from 'react'

export class MountingMethods extends Component {

  // below order 1)constructor 2)getDerivedStateFromProps 3)render 4)componentDidMount
  constructor(props) {
    super(props)
    
    this.state = {
       
    }
    console.log("Inside constructor");
  }
  
  componentDidMount() {
    console.log("Inside componentDidMount");
  }

  // Method is called every time a component is re rendered 
  static getDerivedStateFromProps() {
    console.log("Inside getDerivedStateFromProps");
    return null
  }
  render() {
    console.log("Inside render");
    return (
      <div>
        
      </div>
    )
  }
}

export default MountingMethods
