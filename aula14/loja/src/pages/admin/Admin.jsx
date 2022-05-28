import { Col, Container, Row } from "react-bootstrap";
import Menu from "../../components/Menu";
import Cliente from "./clientes/Cliente";

export default function Admin() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <Menu />
          </Col>
          <Col>
            <Cliente />
          </Col>
        </Row>
      </Container>
    );
}