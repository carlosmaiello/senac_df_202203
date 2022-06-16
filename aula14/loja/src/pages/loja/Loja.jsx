import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ProductContext from "./context/ProductContext";

export default function Loja() {
    return (
      <div>
        <ProductContext>
          <Header />
          <Outlet />
        </ProductContext>
      </div>
    );
}