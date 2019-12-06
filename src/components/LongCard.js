import React, { Component } from 'react';

export class LongCard extends Component {

    render() {
        console.log(this.props.cartItem)
        return (<>
            <li style={{justifyContent: "space-around", margin: "20px", margin: "20px"}} >
                {<img src={this.props.cartItem.image_url} alt={this.props.cartItem.name} width="75px"/>}
                <span style={{margin: "20px"}}>{this.props.cartItem.name}</span>
                <span style={{margin: "20px"}}>${this.props.cartItem.price}</span>
                <span style={{margin: "20px"}}>Quantity: 1</span>
            </li>
            </>
        )
    }
}
// testing
export default LongCard;
