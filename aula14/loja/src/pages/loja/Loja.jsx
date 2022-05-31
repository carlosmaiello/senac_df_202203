import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Loja() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
}