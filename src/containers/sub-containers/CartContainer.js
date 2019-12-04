import React from 'react';
import LongCard from '../../components/LongCard'
import ListGroup from 'react-bootstrap/ListGroup'

class CartContainer extends React.Component {

    checkout = async () => {
        let rawCheckout = await fetch("https://localhost:3000/orders", {
            method: "POST",
            headers: {
                "Authentication": this.props.token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ order: {
                    user_id: this.props.loggedInUserId
                }
            })
        })
        let checkout = await rawCheckout.json()
        console.log(checkout)
    }

    render(){
        return (
            <>
            <ListGroup>
                {this.props.currentCart.map(item => <LongCard key={item.id} cartItem={item} />)}
            </ListGroup>
            <button onClick={this.checkout}>Checkout</button> 
            </>
        )
    }
}

export default CartContainer;
