import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";

export default function Admin() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <Menu />
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    );
}