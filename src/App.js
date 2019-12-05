import React from 'react';
// import './App.css';
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";


class App extends React.Component {
  state = {
    token:  localStorage.token,
    loggedInUserId: null,
    cart: [],
    allRocks: [],
    displayRocks: [],
    orderId: null
  }

  componentDidMount = async() => {
    let rawRocks = await fetch('http://localhost:3000/rocks')
    let rocks = await rawRocks.json() 
      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.userId,
        allRocks: rocks,
        displayRocks: rocks
      })
  }

  // if (localStorage.cart) {
  //   map.(id => this.setState({
  //     cart: [...this.state.cart, rock#{id}]
  //   }))
  // }

  setToken = ({ token, user_id }) => {
    // console.log(token)
    // console.log(user_id)

    localStorage.token = token
    localStorage.userId = user_id

    this.setState({
      token: token,
      loggedInUserId: user_id
    })
  }

  logOutClick = () => {
    localStorage.userId = ""
    localStorage.token = ""

    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  filterRocksByCategory = (value) => {
    if (value === 'All') {
      this.setState({
        displayRocks: this.state.allRocks
      })
    } else {
      this.setState({
        displayRocks: this.state.allRocks.filter(rock => rock.category === value)
      })
    }
  }

  sortRocks = (sortedRocks) => {
    this.setState({
      displayRocks: sortedRocks
    })
  }

  addToCart = (rock) => {
    // console.log(rock)
    this.setState({
      cart: [...this.state.cart, rock]
    })
    localStorage.cart = this.state.cart.map(item => item.id )
    if (this.state.loggedInUserId && this.state.orderId) {
      fetch('http://localhost:3000/purchases', {
        method: "POST",
        headers: {
          "Authorization": this.state.token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
      })
    }
  }

  clearCart = () => {
    this.setState({
      cart: []
    })
  }

  

  render() {
    return (
      <React.Fragment >
        <HeaderContainer handleLogOut={this.logOutClick} token={this.state.token} cartNum={this.state.cart.length}/>
        <MainContainer sortRocks={this.sortRocks} filterRocksByCategory={this.filterRocksByCategory} clearCart={this.clearCart} addToCart={this.addToCart} setToken={this.setToken} token={this.state.token} loggedInUserId={this.state.loggedInUserId} displayRocks={this.state.displayRocks} currentCart={this.state.cart}/>
      </React.Fragment>
    )
  }
  
}

export default App;
