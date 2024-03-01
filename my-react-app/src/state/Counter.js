import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // When state value depends upon previous state use function instead of object
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    // Avoid using this.state in JSX, do the destruction like below
    const { count } = this.state;
    // const { name }  = this.props;
    return (
      <>
        <Row>
          <Col className="mt-5 mb-2">Count : {count}</Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={this.handleIncrement}>
              Incremet
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default Counter;
