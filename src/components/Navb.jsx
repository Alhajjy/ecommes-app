import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

function Navb() {
  const { products } = useSelector((state) => state.basket);
  return (
    <Navbar expand="lg" className="bg-body-tertiary navy1">
      <Container className="navy">
        <Navbar.Brand href="#home">Elites caffee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#basket">
              <FontAwesomeIcon
                className="basket-link"
                icon={faShoppingBasket}
              />
              <div className="p-num">
                {products.length < 10 ? products.length : "+9"}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
