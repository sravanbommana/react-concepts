import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const BasicForm = ({formState, changeHandler, submitHandler, resetData}) => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={formState.email} placeholder="Enter email" onChange={(event) => changeHandler(event, "email")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={formState.password} placeholder="Password" onChange={(event) => changeHandler(event, "password")}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="address1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" value={formState.address1} onChange={(event) => changeHandler(event, "address1")}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" value={formState.address2} onChange={(event) => changeHandler(event, "address2")}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control value={formState.city} onChange={(event) => changeHandler(event, "city")}/>
        </Form.Group>

        <Form.Group as={Col} controlId="pincode">
          <Form.Label>Pincode</Form.Label>
          <Form.Control value={formState.pincode} onChange={(event) => changeHandler(event, "pincode")}/>
        </Form.Group>
      </Row>

      <Button variant="primary" onClick={submitHandler}>
        Submit
      </Button>
      
      <Button className="ms-4" variant="light" onClick={resetData}>
        Reset
      </Button>
    </Form>
  );
}

export default BasicForm;