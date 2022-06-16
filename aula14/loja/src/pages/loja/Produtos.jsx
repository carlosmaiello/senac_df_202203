import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "./context/ProductContext";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const {products} = useContext(Context);
  return (
    <Container>
      <h2>Produtos</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} className="my-3 d-flex align-items-stretch">
            <ProductCard product={product} description />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
