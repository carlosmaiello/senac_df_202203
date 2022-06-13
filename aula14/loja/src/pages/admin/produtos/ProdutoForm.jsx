import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AdminProductContext";

/*
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
*/

export default function ProdutoForm() {
  const navigate = useNavigate();
  const { create } = useContext(Context);

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();

  const submit = (event) => {
    event.preventDefault();

    create({
      title,
      price,
      description,
      category,
    });

    navigate("/admin/produtos");
  };

  return (
    <>
      <h3>Novo Produto</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Preço</Form.Label>
          <Form.Control placeholder="Preço" value={price} onChange={(event) => setPrice(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control placeholder="Descrição" value={description} onChange={(event) => setDescription(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </>
  );
}
