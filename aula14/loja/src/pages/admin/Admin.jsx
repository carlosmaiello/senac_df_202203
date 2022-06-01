import AdminConteudo from "./AdminConteudo";
import AdminUserContext from "./context/AdminUserContext";

export default function Admin() {
    return (
      <AdminUserContext>
        <AdminConteudo />
      </AdminUserContext>
    );
}