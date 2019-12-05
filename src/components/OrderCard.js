import React from 'react';

const OrderCard = (props) => {

    const { order } = props;

    const purchases = () => {
       return order.purchases.map(purchase => <li>purchase</li>)
    }
    console.log(order)

    return (
        <li style={{justifyContent: "space-around", textDecoration: "none"}}>

                    <h3>{order.id}</h3>
            </li>
    )
}
export default OrderCard;


