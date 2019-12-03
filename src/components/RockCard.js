import React from 'react';
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'


const RockCard = (props) => {

    const { rock } = props;

    return (
        <Card>
            <NavLink to={"/rocks/" + rock.id}>
                <Card.Img variant="top" src={rock.image_url} />
                <Card.Body>
                    <Card.Title>{rock.name}</Card.Title>
                    <Card.Text>{rock.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">${rock.price}</small>
                </Card.Footer>
            </NavLink>
        </Card>
    )
}

export default RockCard;


