import * as React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: #282e38;
      text-decoration: none;
    }
  }
  .active {
    font-weight: bold;
  }
`;

export default function NavBar(): React.ReactElement {
  return (
    <Styles>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">Form Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink exact to="/">
                blah
              </NavLink>
            </Nav.Item>
            <NavLink to="/link">Test2</NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
