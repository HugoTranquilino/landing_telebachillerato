import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Contactanos</Nav.Link>
            <NavDropdown title="Oferta Educativa" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">economico - administrativo</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                quimico - biologico
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                fisico - matematico
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Publicaciones</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Menu }
