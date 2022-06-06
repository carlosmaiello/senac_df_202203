import AdminConteudo from "./AdminConteudo";
import AdminClientContext from "./context/AdminClientContext";
import AdminUserContext from "./context/AdminUserContext";

export default function Admin() {
    return (
      <AdminUserContext>
        <AdminClientContext>
          <AdminConteudo />
        </AdminClientContext>
      </AdminUserContext>
    );
}