import ClienteFiltro from "./components/ClienteFiltro";
import ClienteTabela from "./components/ClienteTabela";

export default function ClienteLista() {
  return (
    <div className="ClienteLista">
      <h3>Clientes</h3>
      <ClienteFiltro />
      <ClienteTabela />
    </div>
  );
}
