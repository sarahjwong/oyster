import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


const NavBar = (props) => {
  return (
    <Navbar>
          <Navbar.Header>
          <Navbar.Brand>
              <a href="/">Oyster</a>
          </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to="/">Explore</Link>
            </NavItem>
            <NavItem>
              <Link to="/matches">Matches</Link>
            </NavItem>
            <NavItem>
              <Link to="/profile">Profile</Link>
            </NavItem>
          </Nav>
      </Navbar>
  )
}

export default NavBar