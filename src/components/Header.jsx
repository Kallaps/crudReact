import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import icons from "./images/add-contact.png";

const Header = ({ handleShow }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button
            variant="light"
            active
            className="addBtn"
            onClick={handleShow}
          >
            Add Contact
            <img src={icons} alt="..." className="addIcon" />
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
