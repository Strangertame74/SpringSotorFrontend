import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Sotor
          </Navbar.Brand>
          <Nav className="me-auto flex-grow-1">
            <div className="nav-links-right d-flex justify-content-end">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link href="#features">Nosotros</Nav.Link>
              <Nav.Link href="#services">Servicios</Nav.Link>
              <Nav.Link href="#quote">Solicitar Cotización</Nav.Link>
              <Nav.Link as={Link} to="/contactanos">
                Contáctanos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login"
                className="tw-flex tw-flex-row tw-items-center"
              >
                <FaUser className="logo1" />
                Ingresar
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
