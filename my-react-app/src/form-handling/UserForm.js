import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
       email: "",
       comments: ""
    }
  }
  
  submitHandler = (event) => {
    console.log(this.state);
  }

  emailHandler = (event) => {
    this.setState({email:event.target.value});
    console.log(event.target.value)
  }

  commentChangeHandler = (event) => {
    this.setState({comments:event.target.value});
    console.log(event.target.value)

  }
  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <Form.Group className="mb-3 col-3 ms-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={this.emailHandler}/>
        </Form.Group>
        <Form.Group className="mb-3 col-3 ms-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments:</Form.Label>
          <Form.Control as="textarea" rows={3}  value={this.state.comments}  onChange={this.commentChangeHandler}/>
        </Form.Group>
        <Button variant="primary" type="submit" style={{float:"left", marginLeft:"8rem"}}>Submit</Button>
      </Form>
    );
  }
}

export default UserForm
