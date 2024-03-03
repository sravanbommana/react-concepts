import React, { Component } from 'react'
import ICard from './UI/Card'
import { connect } from 'react-redux'
import { fetchData } from '../actions/FecthActions';
import { Col, Row } from "react-bootstrap";

class UserDetails extends Component {

  render() {
    const { data, isLoading, error } = this.props.posts;

    return (
      <Row>
        {
          data.map(post => <ICard post={post}/>)
        }
        <button onClick={this.props.fetchData}>Get User Data</button>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
