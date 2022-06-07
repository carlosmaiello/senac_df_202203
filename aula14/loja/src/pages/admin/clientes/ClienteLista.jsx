import { useContext, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/AdminClientContext";
import ClienteFiltro from "./components/ClienteFiltro";
import ClienteTabela from "./components/ClienteTabela";

export default function ClienteLista() {
  const { list } = useContext(Context);
  useEffect(() => {
    list();
  }, []);
  return (
    <div className="ClienteLista">
      <h3>Clientes</h3>
      <ClienteFiltro />
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/admin/clientes/novo">Novo Cliente</Nav.Link>
        </Nav.Item>
      </Nav>
      <ClienteTabela />
    </div>
  );
}
