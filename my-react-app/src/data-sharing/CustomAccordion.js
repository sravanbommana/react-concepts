import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";

class CustomAccordion extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((section) => {
          return (
            <Accordion id={section.id}>
              <Accordion.Item eventKey={section.id}>
                <Accordion.Header>{section.title}</Accordion.Header>
                <Accordion.Body>
                  {section.body}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>
    );
  }
}

export default CustomAccordion;
