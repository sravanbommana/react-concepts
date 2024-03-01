import React, { Component } from 'react'

export class ErrorBoundaries extends Component {
  constructor(props) {
    super(props)
    this.state = {
       hasError: false
    }
  }

  static getDerivedStateFromError(error, info) {
    return {
      hasError: true
    }
  }

  componentDidCatch(error) {
    console.log("@@@@", error)
  }
  render() {
    if(this.state.hasError) {
      return <div>oops! something went wrong</div>
    }
  }
}

export default ErrorBoundaries
