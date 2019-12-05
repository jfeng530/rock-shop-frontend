import React from 'react';
// import OrderCard from '../../components/OrderCard'
import EditUsername from '../../components/EditUsername'
import EditPassword from '../../components/EditPassword'

class AccountContainer extends React.Component{
    state = {
        myOrders: [],
    }
    componentDidMount = async () => {
        let rawUser = await fetch(`http://localhost:3000/users/${localStorage.userId}`, {
            headers: {
                "Authorization": this.props.token
            }
            })
            let user = await rawUser.json()
            this.setState({
            myOrders: user.orders
            })
        }
 
    myOrders = () => {
        // return this.state.myOrders.map(order => <OrderCard key={order.id} order={order} />)
        return this.state.myOrders.map(order => <p key={order.id}>{order.id} </p>)
    }

    delete = async () => {
        await fetch(`http://localhost:3000/users/${localStorage.userId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.token
            }
        })
    } 

    render(){
    return (
        <div style={{textAlign: "Center", marginTop:"3%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
         {/* <h2>My Account</h2> */}
        <h3 style={{margin: "30px"}}>Edit Info</h3>
         <EditUsername />
         <EditPassword />
         <br></br>
         <h3>Past Orders</h3>
         {this.myOrders()}
         <h3>Delete Account</h3>
         <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px", marginBottom: "50px"}}  onClick={this.delete}>Delete</button>
        </div>
    )}
}

export default AccountContainer;
