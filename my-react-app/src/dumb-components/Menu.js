import * as React from "react";
import { withTheme } from "../hoc/withTheme";

const Menu = props => {
  console.log('props', props)
  const {color} = props;

  return (
    <div style={{backgroundColor:color}}>Menu</div>
  )
}
export default withTheme(Menu);