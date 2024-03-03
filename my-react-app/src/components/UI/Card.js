import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "./image22.png";
import { Col, Row } from "react-bootstrap";

const ICard = ({ post }) => {
  return (
    <Col className="col-3">
      <Card style={{ width: "18rem", marginLeft: "10px" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary">View Post Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ICard;
