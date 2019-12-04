import React from 'react';
import EditUsernameContainer from './EditUsernameContainer'

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
        <>
         <h1>My Account:</h1>
         <button onclick={< EditUsernameContainer />}>Edit </button>
         <h2>My Orders</h2>
        </>
    )}
}

export default AccountContainer;
