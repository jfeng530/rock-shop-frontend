import React from 'react';
// import './App.css';
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";
import SideContainer from "./containers/SideContainer";

class App extends React.Component {
  state = {
    token:  localStorage.token,
    loggedInUserId: null,
    cart: [],
    allRocks: [],
    displayRocks: []
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

  setToken = ({ token, user_id })  =>{
    console.log(token)
    console.log(user_id)

    localStorage.token = token
    localStorage.userId = user_id

    this.setState({
      token: token,
      loggedInUserId: user_id
    })
  }

  logOutClick = () => {
    localStorage.userId = undefined
    localStorage.token = undefined

    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  filterRocksByCategory = (value) => {
    if (value === 'All') {
      this.setState({
        displayRocks: this.state.rocks
      })
    } else {
      this.setState({
        displayRocks: this.state.rocks.filter(rock => rock.category === value)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer handleLogOut={this.logOutClick} token={this.state.token}/>
        <SideContainer filterRocks={this.filterRocksByCategory}/>
        <MainContainer setToken={this.setToken} token={this.state.token} loggedInUserId={this.state.loggedInUserId} displayRocks={this.state.displayRocks} currentCart={this.state.cart}/>
      </div>
    )
  }

  
}

export default App;
 