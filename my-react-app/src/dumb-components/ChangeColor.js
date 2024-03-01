import React from "react";
import { withTheme } from "../hoc/withTheme";

const ChangeColor = (props) => {
  console.log('props', props);
  return ( 
    <div className="mt-2">
      <button onClick={() => props.setColor("red")}>Change Color</button>
    </div>
  )
}

export default withTheme(ChangeColor)
