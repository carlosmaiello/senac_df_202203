import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Context } from "../../context/AdminClientContext";

function ClientRow({client}) {
  return (
    <tr key={client.id}>
      <td>{client.id}</td>
      <td>{client.name.firstname} {client.name.lastname}</td>
      <td>{client.email}</td>
    </tr>
  );
}

export default function ClienteTabela() {
  const { clients } = useContext(Context);
  return (
    <div className="ClienteTabela">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => <ClientRow client={client}/>)}
        </tbody>
      </Table>
    </div>
  );
}
