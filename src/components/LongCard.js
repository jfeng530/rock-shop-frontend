import React, { Component } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup'

export class LongCard extends Component {

    render() {
        return (<>
            <li>
                {this.props.cartItem.name}
                ${this.props.cartItem.price}
                Quantity: {this.props.cartItem.quantity}
            </li>
            </>
        )
    }
}

export default LongCard;
