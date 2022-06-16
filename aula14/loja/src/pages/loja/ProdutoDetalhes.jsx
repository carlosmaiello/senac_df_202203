import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "./context/ProductContext";

export default function ProdutoDetalhes() {
  const { id } = useParams();
  const { get } = useContext(Context);
  const [product, setProduct] = useState();

  useEffect(() => {
    get(id).then((json) => setProduct(json));
  }, [id]);

  if (!product) return (
    <Container>
      <p>Carregando ...</p>
    </Container>
  );

  return (
    <Container>
      <h2>#{product.id} - {product.title}</h2>
      <h1></h1>
      <h2>{product.category}</h2>
      <p>Preço: {product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} style={{ maxWidth: "100%" }} alt="Foto do produto" />
    </Container>
  );
}
