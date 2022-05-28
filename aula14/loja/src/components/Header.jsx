import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
    return (
      <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/produtos">Produtos</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}