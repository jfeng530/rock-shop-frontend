import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { Navbar, Nav} from 'react-bootstrap';

export class NavBar extends Component {
  logButton = () => {
    if(!this.props.token){
      return <Link to="/login">Log In</Link>
    } else {
      return <a href="/" onClick={this.handleLogOut}>Log Out</a>
    }
  }
  handleLogOut = (e) => {
    e.preventDefault()
    this.props.handleLogOut()
  }

  render() {
    return (
      <nav style={{textAlign: "Center", fontSize: "25px", marginTop:"5%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40", 
      display: "flex", justifyContent: "space-around"}}>
        
    <Link to="/" margin>Rock {<img style={{width: "50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUBT0EORU4YFpG7YJr8Vm3Pn6WqAYurrIN4Qy4KzBTEMR-_c3&s" alt="logo"/>} Shop</Link>
            <Link to="/rocks">Browse Rocks</Link>
            {this.logButton()}
  <Link to="/cart">{"Cart: " + this.props.cartNum}</Link>
      </nav>
    )
  }
}

export default NavBar;
