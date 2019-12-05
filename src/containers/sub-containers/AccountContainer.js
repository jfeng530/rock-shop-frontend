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
        <div style={{textAlign: "Center", marginTop:"10%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
         <h1>My Account:</h1>
         <form>
        Username:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </form>
         <button style={{margin: "20px"}} onClick={< EditUsernameContainer />}>Update</button>
         <form>
        Password: 
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </form>
         <button style={{margin: "20px"}} onclick={< EditPasswordContainer />}>Update</button>
         <br></br>
         <h2>Past Orders:</h2>
         {this.myOrders()}
        </div>
    )}
}

export default AccountContainer;
