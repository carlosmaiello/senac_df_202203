import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Context } from "../context/AdminClientContext";

export default function ClienteForm() {

  const { create } = useContext(Context);

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipcode] = useState();

  const submit = (event) => {
    event.preventDefault();
    create({
      email,
      username,
      password,
      name: {
        firstname,
        lastname,
      },
      address: {
        city,
        street,
        number,
        zipcode,
      },
      phone,
    });
  }
  

  return (
    <div className="ClienteForm">
      <h3>Novo Cliente</h3>
      <Form onSubmit={submit}>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control placeholder="Nome" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control placeholder="Sobrenome" value={lastname} onChange={(event) => setLastname(event.target.value)} />
          </Form.Group>
        </Row>
        <h4>Dados de contato</h4>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control placeholder="Telefone" value={phone} onChange={(event) => setPhone(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>
        </Row>

        <h4>Dados de acesso</h4>
        <Form.Group className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Control placeholder="Usuário" value={username} onChange={(event) => setUsername(event.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>

        <h4>Endereço</h4>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Endereço</Form.Label>
            <Form.Control placeholder="Endereço" value={street} onChange={(event) => setStreet(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} md={3} className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control placeholder="Número" value={number} onChange={(event) => setNumber(event.target.value)}/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md={7} className="mb-3">
            <Form.Label>Cidade</Form.Label>
            <Form.Control placeholder="Cidade" value={city} onChange={(event) => setCity(event.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} md={5} className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control placeholder="CEP" value={zipcode} onChange={(event) => setZipcode(event.target.value)}/>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}
