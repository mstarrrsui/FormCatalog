import * as React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export default function NavBar(): React.ReactElement {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">Form Catalog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <StyledLink exact to="/">
              Home
            </StyledLink>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <StyledLink activeStyle={{ fontWeight: "bold" }} to="/link">
              Hello
            </StyledLink>
          </Nav.Link>
          <Nav.Link>Test</Nav.Link>
          <NavDropdown title="Forms" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Simple</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Complex</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
