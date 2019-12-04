import React, { Component } from 'react';
import NavBar from '../components/NavBar'

export class HeaderContainer extends Component {
    render() {
        return (
            <div>
                <NavBar handleLogOut={this.props.handleLogOut} token={this.props.token}/>
            </div>
        );
    }
}

export default HeaderContainer;
