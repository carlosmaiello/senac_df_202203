import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loja from "./pages/loja/Loja";
import Produtos from "./pages/loja/Produtos";
import Admin from "./pages/admin/Admin";
import ClienteLista from "./pages/admin/clientes/ClienteLista";
import ClienteForm from "./pages/admin/clientes/ClienteForm";
import Home from "./pages/loja/Home";
import Carrinho from "./pages/loja/Carrinho";
import ProdutoLista from "./pages/admin/produtos/ProdutoLista";
import ProdutoForm from "./pages/admin/produtos/ProdutoForm";
import AdminProdutoDetalhes from "./pages/admin/produtos/ProdutoDetalhes";
import ProdutoDetalhes from "./pages/loja/ProdutoDetalhes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loja />}>
          <Route path="produtos" element={<Produtos />} />
          <Route path="produtos/:id" element={<ProdutoDetalhes />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="clientes" element={<ClienteLista />} />
          <Route path="clientes/novo" element={<ClienteForm />} />
          <Route path="clientes/:id" element={<ClienteForm />} />
          <Route path="produtos" element={<ProdutoLista />} />
          <Route path="produtos/novo" element={<ProdutoForm />} />
          <Route path="produtos/:id" element={<AdminProdutoDetalhes />} />
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
