import ClienteLista from "./ClienteLista";
import ClienteForm from "./ClienteForm";
import { Container } from "reactstrap";

export default function Cliente() {
  return (
    <div className="Cliente">
      <Container>
        <ClienteLista />
        <ClienteForm />
      </Container>
    </div>
  );
}
