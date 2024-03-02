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
import User from "./method-as-props/User";
import ConditionalExample from "./conditional-rendering/ConditionalExample";
import List from "./render-list/List";
import StyleComp from "./style-components-css/StyleComp";
import UserForm from "./form-handling/UserForm";
import MountingMethods from "./life-cycle-methods/MountingMethods";
import UpdateMethods from "./life-cycle-methods/UpdateMethods";
import ParentComponentOne from "./pure-components/ParentComponentOne";
import InputRef from "./ref/input-ref/InputRef";
import CallbackRef from "./ref/callback-ref/CallbackRef";

function App() {
  return (
    <div className="App">
      {/* Error Boundaries code */}
        <Hero role="Test2" />
        <Hero role="Joker" />
      {/* Data Sharing */}
      {/* <ParentComponent /> */}

      {/* Context Example */}
      {/* <User /> */}
      <Counter />
      <ThemeProvider>
        <Menu />
        <ChangeColor />
        <User/>
        <ConditionalExample />
        <List />
        <StyleComp />
        <UserForm />
        <MountingMethods />
        <UpdateMethods />
        <ParentComponentOne />
        <InputRef />
        <CallbackRef />
      </ThemeProvider>
    </div>
  );
}

export default App;
