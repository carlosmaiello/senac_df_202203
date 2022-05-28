import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>Em desenvolvimento ...</Col>
        </Row>
      </Container>
    </div>
  );
}
