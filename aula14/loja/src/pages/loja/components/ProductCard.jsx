import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProdutoCard({ product, description }) {
  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={product.image} />
        <Card.Title>
          <Link to={`/produtos/${product.id}`}>{product.title}</Link>
        </Card.Title>
        <Card.Subtitle>{product.price}</Card.Subtitle>
        {description && <Card.Text>{product.description}</Card.Text>}
        <Button as={Link} to={`/produtos/${product.id}`} variant="primary">
          Detalhes
        </Button>
      </Card.Body>
    </Card>
  );
}
