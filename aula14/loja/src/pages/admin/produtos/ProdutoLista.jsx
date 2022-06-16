import { useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/AdminProductContext";

export default function ProdutoLista() {
  const { list, products } = useContext(Context);

  useEffect(() => {
    list();
  }, []);

  return (
    <div>
      <h3>Lista de Produtos</h3>
      <Button as={Link} variant="primary" to="/admin/produtos/novo">
        Novo produto
      </Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link to={`/admin/produtos/${product.id}`}>{product.id}</Link>
              </td>
              <td>
                <Link to={`/admin/produtos/${product.id}`}>
                  <img src={product.image} alt="Foto do produto" width={100} />
                </Link>
              </td>
              <td>
                <Link to={`/admin/produtos/${product.id}`}>{product.title}</Link>
              </td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
