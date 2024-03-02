import React, { Component } from 'react'
import './style.css';
import classes from './StyleComp.module.css';

/******************************************************************************************************************************
 * Three ways we can style                                                                                                    *
 * 1) Using inline styles                                                                                                     *
 * 2) import css file add stryling                                                                                            *
 * 3) Create module file and apply styles                                                                                     *
 ******************************************************************************************************************************/
export class StyleComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
       status:"offline"
    }
  }
  
  render() {
    const thirdPara = {color:"skyblue"}
    return (
      <div>
        <div className='first-para'>ext ever since the 1500s, when an unknown printer took a galley</div>
        <div className={classes.secondPara}>the more obscure Latin words, consectetur, from a Lorem Ipsum</div>
        <div style={thirdPara}>There are many variations of passages of Lorem Ipsum available</div>
        <div style={{backgroundColor: this.state.status === "offline" ? "red" : "green"}}>Stutus: {this.state.status}</div>
      </div>
    )
  }
}

export default StyleComp
