import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomAccordion from "./CustomAccordion";

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data : [
        {id: 1, title: "Section 1", body:"Includes support for individual properties, all properties"}
       ]
    }
  }
  
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <CustomAccordion data={this.state.data}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ParentComponent;
