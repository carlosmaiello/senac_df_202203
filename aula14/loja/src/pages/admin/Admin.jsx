import AdminConteudo from "./AdminConteudo";
import AdminClientContext from "./context/AdminClientContext";
import AdminProductContext from "./context/AdminProductContext";
import AdminUserContext from "./context/AdminUserContext";

export default function Admin() {
    return (
      <AdminUserContext>
        <AdminClientContext>
          <AdminProductContext>
            <AdminConteudo />
          </AdminProductContext>
        </AdminClientContext>
      </AdminUserContext>
    );
}