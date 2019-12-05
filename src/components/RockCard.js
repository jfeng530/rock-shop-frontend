import React from 'react';
// import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'



const RockCard = (props) => {

    const { rock } = props;

    return (
        <div style={{width: "200px", margin: "40px",  overflow: "hidden"}}> 
        {/* <Card> */}
            <NavLink to={"/rocks/" + rock.id}>
                <img height="200px" variant="top" src={rock.image_url} alt={rock.name} />
                <div>
                    <h3>{rock.name}</h3>
                    {/* <p style={{minHeight: "30px", maxHeight: "150px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>{rock.description}</p> */}
                </div>
                <footer>
                    <small className="text-muted">${rock.price}</small>
                </footer>
            </NavLink>
        {/* </Card> */}
        </div>
    )
}

export default RockCard;


