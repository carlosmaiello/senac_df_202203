import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/produtos">
              Produtos
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/carrinho">
              Carrinho
            </Nav.Link>
            <NavDropdown id="basic-nav-dropdown" title={<i class="bi bi-person"></i>}>
              <NavDropdown.Item as={Link} to="/admin">
                Admin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
