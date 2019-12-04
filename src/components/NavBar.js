import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';

export class NavBar extends Component {
  logButton = () => {
    if(!this.props.token){
      return <Nav.Link as={Link} to="/login">Log In</Nav.Link>
    } else {
      return <Nav.Link onClick={this.handleLogOut}>Log Out</Nav.Link>
    }
  }
  handleLogOut = () => {
    this.props.handleLogOut()
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">We Sell Rocks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/rocks">Browse Rocks</Nav.Link>
          </Nav>
          <Nav>
            {this.logButton()}
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
