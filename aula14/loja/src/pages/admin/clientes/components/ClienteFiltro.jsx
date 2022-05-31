import { Button, Col, Form, Row } from "react-bootstrap";

export default function ClienteFiltro() {
  return (
    <div className="ClienteFiltro bg-light p-3 mb-3">
      <Form as={Row}>
        <Form.Group as={Col}>
          <Form.Control placeholder="Pesquisar" />
        </Form.Group>
        <Form.Group as={Col} md={2}>
          <Button variant="primary" type="submit" className="w-100">
            Pesquisar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
