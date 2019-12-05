import React from 'react';
import { NavLink } from 'react-router-dom'



const RockCard = (props) => {

    const { order } = props;

    const purchases = order.purchases.map(purchase => <li>purchase</li>)

    return (
        <div style={{width: "200px", margin: "40px",  overflow: "hidden"}}> 
            <NavLink to={"/order/" + order.id}>
                <div>
                    <h3>{order.createdAt}</h3>
                    <ul>{purchases}</ul>
                    </div>
            </NavLink>
    )
}

export default RockCard;


