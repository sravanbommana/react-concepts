import React, { Component } from "react";
import { ThemeContext } from "../context/theme-context";

export function withTheme(OriginalComponent) {
  return class NewComponent extends Component {
    render() {
      return(
        <ThemeContext.Consumer>
          {
            (contexts) => <OriginalComponent {...this.props} {...contexts} />
          }
        </ThemeContext.Consumer>
      )
    }
  }
}