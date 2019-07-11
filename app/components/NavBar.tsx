import * as React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
//import styled from "styled-components";
import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

const StyledNavBar = styled(Navbar)`
  .navbar {
    background-color: #222;
  }
  .nav-item {
    margin-left: 8px;
    margin-right: 8px;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #414752;
    &:hover {
      color: #7d9bd1;
      text-decoration: none;
    }
  }
  .active {
    font-weight: bold;
  }
`;

export default function NavBar(): React.ReactElement {
  return (
    <StyledNavBar bg="light" expand="md">
      <Navbar.Brand href="#home">Form Catalog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/link">Page2</NavLink>
          </Nav.Item>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </StyledNavBar>
  );
}
