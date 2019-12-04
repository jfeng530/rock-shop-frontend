import React, { Component } from 'react';
import SideBar from '../components/SideBar'

export class SideContainer extends Component {
    render() {
        return (
            <>
                <SideBar filterRocks={this.props.filterRocks}/>
            </>
        );
    }
}

export default SideContainer;
