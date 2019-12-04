import React from 'react';
import LongCard from '../../components/LongCard'
import ListGroup from 'react-bootstrap/ListGroup'

class CartContainer extends React.Component {

    checkout = async () => {
        let rawCheckout = await fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
                "Authorization": this.props.token.toString(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: this.props.loggedInUserId
            })
        })
        let order = await rawCheckout.json()
        this.props.currentCart.forEach(item => {
            this.addPurchasesToCheckout(order.id, item.id)
        })
        this.props.clearCart()
    }

    addPurchasesToCheckout = async (order_id, item_id) => {
            let rawPurchase = await fetch('http://localhost:3000/purchases', {
                method: "POST",
                headers: {
                    "Authorization": this.props.token.toString(),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    order_id: order_id,
                    rock_id: item_id,
                    quantity: 1
                })
            })
            let purchase = await rawPurchase.json()
            console.log(purchase)
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
