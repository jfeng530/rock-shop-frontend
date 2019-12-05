import React from 'react';
import LongCard from '../../components/LongCard'


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
            <div style={{textAlign: "Center", marginTop:"10%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
            <li style={{   
                margin: "75px 0", 
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                fontFamily: "Courier New, Monospace", 
                fontWeight: "100", 
                fontSize: "18px",
                color: "#343a40", 
                textAlign: "left",
                justifyContent: "space-around",
                listStyle: "none"
                }}>
                {this.props.currentCart.map(item => <LongCard key={item.id} cartItem={item} />)}
            </li>
            <button onClick={this.checkout} >Checkout</button> 
            </div>
        )
    }
}

export default CartContainer;
