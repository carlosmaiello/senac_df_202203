import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";

export default function Home() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>Em desenvolvimento ...</Col>
          </Row>
        </Container>
      </div>
    );
}