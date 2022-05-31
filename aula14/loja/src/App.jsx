import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loja from "./pages/loja/Loja";
import Produtos from "./pages/loja/Produtos";
import Admin from "./pages/admin/Admin";
import ClienteLista from "./pages/admin/clientes/ClienteLista";
import ClienteForm from "./pages/admin/clientes/ClienteForm";
import Home from "./pages/loja/Home";
import Carrinho from "./pages/loja/Carrinho";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loja />}>
          <Route path="produtos" element={<Produtos />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="clientes" element={<ClienteLista />} />
          <Route path="clientes/novo" element={<ClienteForm />} />
          <Route path="clientes/:id" element={<ClienteForm />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Esta página não existe.</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
