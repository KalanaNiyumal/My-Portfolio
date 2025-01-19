

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";  // If you're using React Router for navigation
import logo from "../../assets/Images/logo.jpg";
import "./Links.css"; 

function Links() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        {/* Navbar.Brand with Logo and Text */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="me-2" // Adds spacing between the logo and text
          />
          <span className="text-white">My Portfolio</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/project" className="nav-link">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="nav-link">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Links;
