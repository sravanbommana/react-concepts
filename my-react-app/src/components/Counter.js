import React, { Component } from 'react'
import { store } from '../store'
import { connect } from 'react-redux'
import { decrementCount, incrementCount } from '../actions/CounterActions'

class Counter extends Component {
  
  render() {
    return (
      <div>
        <div>Count: {this.props.count}</div>
        <div>
          <button style={{marginRight:"20px"}} onClick={this.props.incrementCount}>Increment</button>
          <button onClick={this.props.decrementCount}>Decrement</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.countInfo.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
