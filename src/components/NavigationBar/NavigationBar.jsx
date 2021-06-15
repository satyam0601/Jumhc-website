import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>JUMHC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">RCC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Expeditions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Treks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Practice/Training
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
