import React, { Component } from 'react';
import SideBar from '../../components/SideBar'

export class SideContainer extends Component {
    render() {
        return (
            <>
                <SideBar filterRocksByCategory={this.props.filterRocksByCategory} />
            </>
        );
    }
}

export default SideContainer;
