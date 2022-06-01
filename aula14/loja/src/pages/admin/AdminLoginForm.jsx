import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {Context } from './context/AdminUserContext';

export default function AdminLoginForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login } = useContext(Context);
    
    const submit = (event) => {
        event.preventDefault();
        login(email, password);
    }
    
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
