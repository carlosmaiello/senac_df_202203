import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export default function ClienteForm() {
  return (
    <div className="ClienteForm">
      <h3>Novo Cliente</h3>
      <Form>
        <Row>
          <Col>
            <FormGroup floating>
              <Input id="nome" name="nome" />
              <Label for="nome">Nome</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input id="telefone" name="telefone" />
              <Label for="telefone">Telefone</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup floating>
              <Input id="email" name="email" type="email" />
              <Label for="email">Email</Label>
            </FormGroup>
          </Col>
        </Row>
        <Button>Inserir</Button>
      </Form>
    </div>
  );
}
