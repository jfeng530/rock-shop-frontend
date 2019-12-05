import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const style = {
    margin: "10px",
    position: "absolute",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    fontFamily: "Courier New, Monospace", 
    fontWeight: "100", 
    color: "#343a40", 
    textAlign: "center",
    // justifyContent: "space-around"
  }

export class SideBar extends Component {

    state = {
        value: ''
    }
    
    handleChange = (event) => {
        this.setState({value: event.target.value})
        this.props.filterRocksByCategory(event.target.value)
    }
    
    render() {
        return (
            <div style={style}>
                <h4 style={{marginTop: "50px", marginBottom: "50px"}}>Categories:</h4>
                <NavLink to="/rocks">
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="All">All</option>
                        <option value="Metamorphic">Metamorphic</option>
                        <option value="Sedimentary">Sedimentary</option>
                        <option value="Special">Special</option>
                        <option value="Danger">Danger</option>
                        <option value="Boring">Boring</option>
                        <option value="Fancy">Fancy</option>
                        <option value="Igneous">Igneous</option>
                    </select>
                </NavLink>
            </div>
        )
    }
}

export default SideBar;
