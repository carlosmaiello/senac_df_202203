import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AdminLoginForm from "./AdminLoginForm";
import Menu from "./components/Menu";
import { Context } from "./context/AdminUserContext";

export default function AdminConteudo() {
  const { isLogged } = useContext(Context);

  if (!isLogged) {
    return (<AdminLoginForm />)
  }

  return (
      <Container>
        <Row>
          <Col md={3}>
            <Menu />
          </Col>
          <Col className="py-3">
            <Outlet />
          </Col>
        </Row>
      </Container>
  );
}
