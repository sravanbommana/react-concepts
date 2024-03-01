import logo from "./logo.svg";
import "./App.css";
import Hero from "./error-boundaries/Hero";
import ErrorBoundaries from "./error-boundaries/ErrorBoundaries";
import ParentComponent from "./data-sharing/ParentComponent";
import Counter from "./state/Counter";
import ModalPopUp from "./ui/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Menu from "./dumb-components/Menu";
import ChangeColor from "./dumb-components/ChangeColor";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <div className="App">
      {/* Error Boundaries code */}
      {/* <ErrorBoundaries>
        <Hero role="Test2" />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Hero role="Joker" />
      </ErrorBoundaries> */}

      {/* Data Sharing */}
      {/* <ParentComponent /> */}

      {/* Context Example */}
      {/* <User /> */}
      <Counter />
      <ThemeProvider>
        <Menu />
        <ChangeColor />
      </ThemeProvider>
    </div>
  );
}

export default App;
