import React from 'react';

class AccountContainer extends React.Component{
    state = {
        myOrders: []
    }
    componentDidMount = async () => {
        let rawUser = await fetch(`http://localhost:3000/users/6`, {
            headers: {
                "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1fQ.F1zStOFrmzxhB7Kh5wVbe0E1lL_LnGfoEZuqA5YI748"
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
        <React.Fragment>
         
        </React.Fragment>
    )}
}

export default AccountContainer;
