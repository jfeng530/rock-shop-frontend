import React from 'react';
// import OrderCard from '../../components/OrderCard'

class AccountContainer extends React.Component{
    state = {
        myOrders: [],
        username: "",
        password: ""
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

        editUsername = async (newUsername) => {
            let rawName = await fetch(`http://localhost:3000/users/${localStorage.userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.token
                },
                body: JSON.stringify({user:{
                  username: newUsername}
                })
                })
                let name = await rawName.json()
                console.log(name)
                console.log(localStorage.token)
                console.log(localStorage.userId)
                console.log(newUsername)
        }

        editPassword = async (newPassword) => {
            await fetch(`http://localhost:3000/users/${localStorage.userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.token
                },
                body: JSON.stringify({user:{
                  password: newPassword}
                })
                })
                this.setState({
                    password: ""
                })
        }
        onChange = event => {
            this.setState({
              [event.target.name]: event.target.value
            })
          }

        handleChangeUsername = event => {
            event.preventDefault()
            this.editUsername(this.state.username)
        }

        handleChangePassword = event => {
            event.preventDefault()
            this.editPassword(this.state.password)
        }
        
    myOrders = () => {
        // return this.state.myOrders.map(order => <OrderCard key={order.id} order={order} />)
        return this.state.myOrders.map(order => <p key={order.id}>{order.id} </p>)
    }

    render(){
    return (
        <div style={{textAlign: "Center", marginTop:"3%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
         {/* <h2>My Account</h2> */}
        <h3 style={{margin: "30px"}}>Edit Info</h3>
         <form onSubmit={this.handleChangeUsername}>
        <label style={{margin: "20px"}}>Username:</label>
        <input
          type="text"
          autoComplete="new-username"
          onChange={ this.onChange /* for controlled form input status */ } 
          name="username" 
          value={ this.state.username /* for controlled form input status */ } 
        />
        <input type="submit" style={{fontSize: "18px", border: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px", padding: "5px"}} />
      </form>
         <form onSubmit={this.handleChangePassword}>
         <label style={{margin: "20px"}}>Password:</label>      
        <input
          type="password"
          value={this.state.password}
          onChange={this.onChange}
          name="password"
          autoComplete="new-password"
        />
        <input type="submit" style={{fontSize: "18px", border: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px", padding: "5px"}} />
      </form>
         <br></br>
         <h3>Past Orders</h3>
         {this.myOrders()}
         <h3>Delete Account</h3>
         <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px", marginBottom: "50px"}} >Delete</button>
        </div>
    )}
}

export default AccountContainer;
