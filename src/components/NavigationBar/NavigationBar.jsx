import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar expand="md">
      <div className="container">
        <Navbar.Brand href="#x" className="nav-brand">
          <img
            alt=""
            src="jumhc-logo.jpeg"
            width="60"
            height="60"
            className="d-inline-block border border-2 border-dark rounded-circle"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav activeKey="/x" className="nav-elements">
            <Nav.Link href="#x" className="navbar-link-text">
              Home
            </Nav.Link>
            <Nav.Link href="#y" className="navbar-link-text">
              About Us
            </Nav.Link>
            <Nav.Link href="#z" className="navbar-link-text">
              RCC
            </Nav.Link>
            <Nav.Link href="#w" className="navbar-link-text">
              Expeditions
            </Nav.Link>
            <Nav.Link href="#a" className="navbar-link-text">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
