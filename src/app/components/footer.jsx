import {Navbar, Container, Nav, Button} from "react-bootstrap"
import Logo from "../assets/images/logo.webp"
import Insta from "../assets/images/insta.png"
import Twitter from "../assets/images/twitter.png"
import Link from "../assets/images/link.png"
import Facebook from "../assets/images/facebook.png"

const Footer = () => {
  return (
    <Navbar variant="dark" className="navbarf">
  <Container fluid className="footer-container">
    <Navbar.Brand href="#home">
      <img
        src={Logo}
        type = "image/webp"
        width="100%"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Nav className="me-auto">
            <Nav.Link className="link" href="#terms">Terms</Nav.Link>
            <Nav.Link className="link" href="#privacy">Privacy</Nav.Link>
            <Nav.Link className="link" href="#faq">FAQs</Nav.Link>
            <Nav.Link className="link" href="#contact">Contact</Nav.Link>
            <Nav.Link className="link" href="#aboutus">About us</Nav.Link>
            <Nav.Link className="link" href="#nft">NFTs</Nav.Link>
            <Nav.Link className="link" href="#pressinquiries">Press inquiries</Nav.Link>
            <Button className="button">Get App</Button>
            
          </Nav>
            <table>
              <tr>
                <th><img src={Facebook} height="35%" width="35%" type="image/png" alt="img" className="img"/></th>
                <th><img src={Twitter} height="50%" width="50%" type="image/png" alt="img" className="img"/></th>
             </tr>
             <tr>
                <td><img src={Insta} height="50%" width="50%" type="image/png" alt="img" className="img"/></td>
                <td><img src={Link} height="50%" width="50%" type="image/png" alt="img" className="img"/></td>
             </tr>
            </table>

  </Container>
  </Navbar>
  )
};
export default Footer;
