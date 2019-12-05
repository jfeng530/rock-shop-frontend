import React from 'react';

class pastOrders extends React.Component{
    state = {
        myOrders: []
    }

    componentDidMount = async () => {
        console.log(this.props.loggedInUserId)
        let rawUser = await fetch(`http://localhost:3000/users/${this.props.loggedInUserId}`, {
            headers: {
                "Authorization": this.props.token
            }
            })
            let user = await rawUser.json()
            this.setState({
            myOrders: user.orders
            })
    }

   myOrders = this.state.myOrders.map(order => <orderCard key={order.id} order={order} />)

    render(){
        return (
        <>
            
        </>
    )}    
}

export default pastOrders;
