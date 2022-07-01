import { Col, Container, Row } from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";
const Layout = ({ component }) => {
  return (
    <Container fluid className="h-100 layout-bg" >
      <Row className="h-100">
        <Col md={12}>
          <Header />
        </Col>
        <Col md={12}>{component}</Col>
        <Col md={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
// style={{ height: "12.5rem" }}