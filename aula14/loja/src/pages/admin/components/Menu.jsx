import { useContext } from "react";
import { Accordion, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/AdminUserContext";

export default function Menu() {
  const { user, logout } = useContext(Context);
  return (
    <>
      <Button as={Link} to="/" variant="outline-primary" className="my-3 w-100">
        Ir para o site
      </Button>
      <p>
        Olá {user.name}, {user.email}!{" "}
        <Button size="sm" onClick={() => logout()}>
          sair
        </Button>
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Clientes</Accordion.Header>
          <Accordion.Body>
            <Nav defaultActiveKey="/admin/clientes" className="flex-column">
              <Nav.Link as={Link} to="/admin/clientes/novo">
                Novo Cliente
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/clientes">
                Listar
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Produtos</Accordion.Header>
          <Accordion.Body>
            <Nav defaultActiveKey="/admin/produtos" className="flex-column">
              <Nav.Link as={Link} to="/admin/produtos/novo">
                Novo Produto
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/produtos">
                Listar
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
