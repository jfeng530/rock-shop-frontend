import React from 'react';
// import './App.css';
import HeaderContainer from "./containers/HeaderContainer";
import MainContainer from "./containers/MainContainer";
import SideContainer from "./containers/SideContainer";

class App extends React.Component {

  // componentDidMount(){
  //   fetch('https://localhost:3000/rocks')
  //   .then(r => r.json())
  //   .then(data => {
  //     this.setState({
  //       rocks: data
  //       displayRocks: data
  //     })
  //   })
  // }

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
        <HeaderContainer />
        <SideContainer filterRocks={this.filterRocksByCategory}/>
        <MainContainer allRocks={this.state.displayRocks} currentCart={this.state.cart}/>
      </div>
    )
  }

  state = {
    cart: [
      {
        id: 1,
        name: 'Dwayne Johnson',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81YPB6jlJiL._SX355_.jpg',
        description: 'It is a rock',
        category: 'Danger',
        color: 'Blue',
        price: 33,
        rating: 5,
        quantity: 10
      }
    ],
    user: {},
    rocks: [
      {
        id: 1,
        name: 'Dwayne Johnson',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81YPB6jlJiL._SX355_.jpg',
        description: 'It is a rock',
        category: 'Danger',
        color: 'Blue',
        rating: 5,
        price: 33,
        quantity: 10
      },
      {
        id: 2,
        name: 'Rock and Roll',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81YPB6jlJiL._SX355_.jpg',
        description: 'Rock and Rolla',
        category: 'Danger',
        color: 'Grey',
        rating: 3,
        price: 87,
        quantity: 2
      },
      {
        id: 3,
        name: 'The Rock',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81YPB6jlJiL._SX355_.jpg',
        description: 'Can you smell it',
        category: 'Boring',
        color: 'Grey',
        rating: 4,
        price: 99,
        quantity: 10
      },
    ],
    displayRocks: [
      {
        id: 1,
        name: 'Dwayne Johnson',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81YPB6jlJiL._SX355_.jpg',
        description: 'It is a rock',
        category: 'Danger',
        color: 'Blue',
        rating: 5,
        price: 33,
        quantity: 10
      },
      {
        id: 2,
        name: 'Rock and Roll',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81YPB6jlJiL._SX355_.jpg',
        description: 'Rock and Rolla',
        category: 'Danger',
        color: 'Grey',
        rating: 3,
        price: 87,
        quantity: 2
      },
      {
        id: 3,
        name: 'The Rock',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/81YPB6jlJiL._SX355_.jpg',
        description: 'Can you smell it',
        category: 'Boring',
        color: 'Grey',
        rating: 4,
        price: 99,
        quantity: 10
      },
    ]
  }

}

export default App;
