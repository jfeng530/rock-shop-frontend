import React, { Component } from 'react';

export class LongCard extends Component {

    handleClick = () => {
        this.props.removeFromCart(this.props.cartItem)
    }

    render() {
        console.log(this.props.cartItem)
        return (<>
            <li style={{justifyContent: "space-around", margin: "20px"}} >
                {<img src={this.props.cartItem.rock.image_url} alt={this.props.cartItem.rock.name} width="75px"/>}
                <span style={{margin: "20px"}}>{this.props.cartItem.rock.name}</span>
                <span style={{margin: "20px"}}>${this.props.cartItem.rock.price}</span>
                <span style={{margin: "20px"}}>Quantity: 1</span>
            </li>
            <button onClick={this.handleClick}>Remove From Cart</button>
            </>
        )
    }
}
// testing
export default LongCard;
