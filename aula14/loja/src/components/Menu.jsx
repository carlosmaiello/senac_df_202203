import { Accordion, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Menu() {
    return (
      <>
        <Button as={Link} to="/" variant="outline-primary" className="my-3 w-100">
          Ir para o site
        </Button>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Clientes</Accordion.Header>
            <Accordion.Body>
              <Nav defaultActiveKey="/clientes" className="flex-column">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
}