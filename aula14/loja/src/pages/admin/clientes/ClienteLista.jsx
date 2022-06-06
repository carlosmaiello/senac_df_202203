import { useContext, useEffect } from "react";
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
      <ClienteTabela />
    </div>
  );
}
