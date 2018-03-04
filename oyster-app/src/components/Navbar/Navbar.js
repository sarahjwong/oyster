import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar.css';


const NavBar = (props) => {
  return (
    <Navbar>
          <Navbar.Header>
          <img id="logo" src={require('../../images/oyster-logo.png')}></img>
          <Navbar.Brand>
              <a href="/">oyster</a>
          </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem>
              <Link to="/explore">Explore</Link>
            </NavItem>
            <NavItem>
              <Link to="/connect">Connect</Link>
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
