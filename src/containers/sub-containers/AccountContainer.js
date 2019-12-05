import React from 'react';
import EditUsernameContainer from './EditUsernameContainer'
import EditPasswordContainer from './EditPasswordContainer'
import PastOrders from '../../components/PastOrders'

class AccountContainer extends React.Component{
    state = {
        myOrders: []
    }
    componentDidMount = async () => {
        let rawUser = await fetch(`http://localhost:3000/users/${this.props.loggedInUserId}`, {
            headers: {
                "Authorization": this.props.token
            }
            })
            let user = await rawUser.json()
            this.setState({
            myOrders: user.orders
            })
            console.log(user.orders)
        }
    
    render(){
    return (
        <div style={{textAlign: "Center", marginTop:"10%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
         <h1>My Account:</h1>
         <button style={{margin: "20px"}} onClick={< EditUsernameContainer />}>Edit My Username</button>
         <button onclick={< EditPasswordContainer />}>Edit My Password</button>
         <br></br>
         <h2>My Orders:</h2>
         <PastOrders loggedInUserId={this.props.loggedInUserId} token={this.props.token}/>
        </div>
    )}
}

export default AccountContainer;
