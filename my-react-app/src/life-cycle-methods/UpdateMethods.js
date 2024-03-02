import React, { Component } from "react";

export class UpdateMethods extends Component {
  // below order 1)constructor 2)getDerivedStateFromProps 3)render 4)componentDidMount
  constructor(props) {
    super(props);

    this.state = {
      name: "One"
    };
    console.log("Inside constructor");
  }

  componentDidMount() {
    console.log("Inside componentDidMount");
  }

  // Method is called every time a component is re rendered
  static getDerivedStateFromProps() {
    console.log("Inside getDerivedStateFromProps");
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log("Inside getSnapshotBeforeUpdate");
    return null;
  }

  shouldComponentUpdate() {
    console.log("Inside shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate");
  }

  changeHandler = () => {
    this.setState({name:"Test"})
  }
  render() {
    console.log("Inside render");
    return <div>
      <div>name: {this.state.name}</div>
      <div><button onClick={this.changeHandler}>Change state </button></div>
    </div>;
  }
}

export default UpdateMethods;
