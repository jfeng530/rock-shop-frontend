import React from 'react';
import EditUsernameContainer from './EditUsernameContainer'
import EditPasswordContainer from './EditPasswordContainer'
// import OrderCard from '../../components/OrderCard'

class AccountContainer extends React.Component{
    state = {
        myOrders: []
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
        return this.state.myOrders.map(order => <p>{order.id} </p>)
    }

    render(){
    return (
        <div style={{textAlign: "Center", marginTop:"3%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
         {/* <h2>My Account</h2> */}
        <h3 style={{margin: "30px"}}>Edit Info</h3>
         <form >
        <label >Username:</label>
        <br></br>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </form>
         <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}} onClick={< EditUsernameContainer />}>Update</button>
         <form>
         <label style={{margin: "20px"}}>Password:</label>
        <br></br>       
        <input
          type="password"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </form>
         <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}} onclick={< EditPasswordContainer />}>Update</button>
         <br></br>
         <h3>Past Orders</h3>
         {this.myOrders()}
         <h3>Delete Account</h3>
         <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px", marginBottom: "50px"}} >Delete</button>
        </div>
    )}
}

export default AccountContainer;
