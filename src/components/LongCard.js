import React, { Component } from 'react';

export class LongCard extends Component {

    render() {
        return (<>
            <li style={{justifyContent: "space-around"}}>
                {<img src={this.props.cartItem.image_url} alt={this.props.cartItem.name} width="75px"/>}
                {this.props.cartItem.name}
                ${this.props.cartItem.price}
                Quantity: 1
            </li>
            </>
        )
    }
}

export default LongCard;
