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
import ClickCounter from "./render-props/basic-example/ClickCounter";
import HoverCounter from "./render-props/basic-example/HoverCounter";
import UserDemo from "./render-props/basic-example/UserDemo";
import CounterOne from "./render-props/basic-example/CounterOne";
import FocusInput from "./component-ref/FocusInput";
import ForwardRefParentInput from "./forward-ref/ForwardRefParentInput";

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
        <CounterOne 
          render={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <CounterOne 
          render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} /> } />

        <UserDemo name={(isLoggedIn) => isLoggedIn ? "Sravan" : "Guest"} />
        <FocusInput />
        <ForwardRefParentInput />
      </ThemeProvider>
    </div>
  );
}

export default App;
