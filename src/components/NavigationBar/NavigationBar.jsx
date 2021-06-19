import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <div className="container">
        <Navbar.Brand href="#x" className="nav-brand">
          <img
            alt=""
            src="jumhc-logo.jpeg"
            width="40"
            height="40"
            className="d-inline-block align-center rounded-circle"
          />{" "}
          <strong className="m-2">JUMHC</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav activeKey="/x" className="nav-elements">
            <Nav.Link href="#x" className="h6">
              Home
            </Nav.Link>
            <Nav.Link href="#y" className="h6">
              About Us
            </Nav.Link>
            <Nav.Link href="#z" className="h6">
              RCC
            </Nav.Link>
            <Nav.Link href="#w" className="h6">
              Expeditions
            </Nav.Link>
            <Nav.Link href="#a" className="h6">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
