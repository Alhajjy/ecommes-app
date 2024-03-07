import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navb() {
  const { products } = useSelector((state) => state.basket);
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-con">
      <Container className="navy">
        <Navbar.Brand href="#home">Elites caffee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/basket">
              <FontAwesomeIcon
                className="basket-link"
                icon={faShoppingBasket}
              />
              <div className="p-num">
                {products.length < 10 ? products.length : "+9"}
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
