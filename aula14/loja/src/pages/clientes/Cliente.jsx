import ClienteLista from "./ClienteLista";
import ClienteForm from "./ClienteForm";

export default function Cliente() {
  return (
    <div className="Cliente">
        <ClienteLista />
        <ClienteForm />
    </div>
  );
}
