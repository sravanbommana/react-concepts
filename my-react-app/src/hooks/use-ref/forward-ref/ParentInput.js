import React, { useRef } from "react";
import ChildInput from "./ChildInput";

const ParentInput = () => {
  const ref = useRef();
  const clickHandler = () => {
    ref.current.focus();
  };
  return (
    <div>
      <ChildInput ref={ref} />
      <button onClick={clickHandler}>Focus Input</button>
    </div>
  );
};

export default ParentInput;
