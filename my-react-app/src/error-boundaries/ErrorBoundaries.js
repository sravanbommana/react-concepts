import React, { Children, Component } from "react";

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStatesFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <div>oops! something went wrong</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
