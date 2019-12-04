import React from 'react';
import LongCard from '../../components/LongCard'
import ListGroup from 'react-bootstrap/ListGroup'

const CartContainer = (props) => {
    console.log(props)
    return (
        <ListGroup>
            {props.currentCart.map(item => <LongCard key={item.id} cartItem={item} />)}
        </ListGroup>
    )
}

export default CartContainer;
