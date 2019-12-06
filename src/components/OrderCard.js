import React from 'react';

class OrderCard extends React.Component {
    state = {
        purchases: []
    }

    componentDidMount = async () => {
        let rawOrder = await fetch (`http://localhost:3000/orders/${this.props.order.id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.token
            }
        })
        let order = await rawOrder.json()
        let purchases = order.purchases
        this.setState({
            purchases
        })
        console.log(this.state.purchases)
    }

    purchases = () => {
    return !!this.state.purchases.length ? this.state.purchases.map(purchase => <li style={{listStyle: "none"}}>{purchase.quantity} of rock #{purchase.rock_id}</li>) : "Empty Order"
    }

    render(){
    return (
        <div style={{ border: "solid", borderWidth: "1px", borderColor: "#929ca7", padding: "25px", width: "600px", margin: "0 auto", marginTop: "10px"}}>
    <h5>Order # {this.props.order.id}:</h5>
    <p style={{textDecoration: "none"}}>
        {this.purchases()}
    </p>
    </div>
    )}
}
export default OrderCard;


