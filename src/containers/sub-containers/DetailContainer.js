import React from 'react';
// import {Card, Button} from 'react-bootstrap'

const DetailContainer = (props) => {

    const rock = props.rock;

    const handleClick = () => {
        props.addToCart(rock)
    }

    console.log(props)
    return (
        <>
        <div style={{textAlign: "Center", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
            <h2 style={{margin: "25px"}}>{rock.name}</h2>
            <img  src={rock.image_url} alt={rock.name}/>
            <div>
                <p style={{margin: "20px"}}>{rock.description}</p>
                <h4>Type: {rock.category}</h4>
                <h4>Color: {rock.color}</h4>
                <h4>${rock.price}</h4>
                <h4>Rating: {rock.rating}</h4>
                <h4>Quantity: {rock.quantity}</h4>
                <button onClick={handleClick} variant="primary" style={{margin: "30px"}}>Add to Cart</button>
            </div>
        </div>
        </>
    );
}

export default DetailContainer;
