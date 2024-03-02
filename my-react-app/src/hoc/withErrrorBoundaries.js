import React, { Component } from "react";
import ErrorBoundaries from "../error-boundaries/ErrorBoundaries";

export const withErrorBoundaries = (OriginalComponent) => {
  const NewComponent = () => {
    return (
      <ErrorBoundaries>
        <OriginalComponent />
      </ErrorBoundaries>
    );
  };
  return NewComponent;
};
