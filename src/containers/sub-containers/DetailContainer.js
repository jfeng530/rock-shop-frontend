import React from 'react';
import {Card, Button} from 'react-bootstrap'

const DetailContainer = (props) => {

    const rock = props.rock;

    const handleClick = () => {
        props.addToCart(rock)
    }

    console.log(props)
    return (
        <>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={rock.image_url} />
            <Card.Body>
                <Card.Title>{rock.name}</Card.Title>
                <Card.Text>{rock.description}</Card.Text>
                <Card.Text>Type: {rock.category}</Card.Text>
                <Card.Text>Color: {rock.color}</Card.Text>
                <Card.Text>${rock.price}</Card.Text>
                <Card.Text>Rating: {rock.rating}</Card.Text>
                <Card.Text>Quantity: {rock.quantity}</Card.Text>
                <Button onClick={handleClick} variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
        </>
    );
}

export default DetailContainer;
