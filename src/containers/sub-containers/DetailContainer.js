import React from 'react';
import {Redirect} from 'react-router-dom'

class DetailContainer extends React.Component {
    
    state = {
        redirect: false
    }
    
    handleClick = () => {
        this.props.addToCart(this.props.rock)
        this.setState({
            redirect: true
        })
    }
    
    render(){

        if (this.state.redirect) {
            return <Redirect to={'/cart'} />
        }

        let rock = this.props.rock;
        console.log(rock.purchases.length)

        return (
            <div style={{textAlign: "Center", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
                <h2 style={{margin: "25px"}}>{rock.name}</h2>
                <img width="700px" src={rock.image_url} alt={rock.name}/>
                <div>
                    <p style={{margin: "20px"}}>{rock.description}</p>
                    <h4>Type: {rock.category}</h4>
                    <h4>Color: {rock.color}</h4>
                    <h4>${rock.price}</h4>
                    <h4>Rating: {rock.rating}</h4>
                    <h4>Quantity: {rock.quantity - rock.purchases.length}</h4>
                    <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "30px"}} onClick={this.handleClick} variant="primary">Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default DetailContainer;
