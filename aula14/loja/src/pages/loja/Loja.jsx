import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function Home() {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
}