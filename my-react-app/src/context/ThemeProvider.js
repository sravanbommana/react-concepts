import React, { Component } from 'react'
import { ThemeContext } from "./theme-context";

export class ThemeProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       color: "green",
       setColor: this.setColor
    }
  }

  setColor = (color) => {
    this.setState({
      color: color
    })
  }
  
  render() {
    return (
      <ThemeContext.Provider value={{
        ...this.state
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
