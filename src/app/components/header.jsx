import {Navbar, Container, Nav, Button} from "react-bootstrap"
import Logo from "../assets/images/logo.webp"

const Header = () => {
    return (
        <>
  <Navbar variant="dark" fixed="top" >
  <Container fluid>
    <Navbar.Brand href="#home">
      <img
        src={Logo}
        type = "image/webp"
        width="60%"
        height="60%"
        className="d-inline-block align-to logo"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="d-flex navbar-light">
          <Nav.Link href="#home">Get Started</Nav.Link>
          <Button className="button">Contact</Button>
    </Nav>
  </Container>
  </Navbar>  
</>
    )
}
export default Header;