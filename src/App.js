import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Products from './Product_map';
import AddUser from './AddUser';
import faker from 'faker';

class App extends Component {

  state = {
    authed: false,
    user: {},
    showShoppingCart: false
}

updateAuth = (user)=> {
  console.log("updateAuth user", user);
  this.setState({
      authed: true,
      user: user
});
}

signout = ()=> {
  console.log("signed out");
  this.setState({
      authed: false
});
}

becomeSeller = () => {
  console.log('clicked become a seller');
  this.setState({
      user: {
        id: this.state.user.id,
        address: this.state.user.address,
        email: this.state.user.email,
        favorites: this.state.user.favorites,
        password: this.state.user.password,
        paymentHistory: this.state.user.paymentHistory,
        paymentOption: this.state.user.paymentOption,
        phone: this.state.user.phone,
        seller: true,
        username: this.state.user.username
      }
  })

  let profileUpdate = {
      "seller": true
  }

  fetch(`http://localhost:3000/users/${this.state.user.id}`, {
    method: 'PATCH',
    body: JSON.stringify(profileUpdate),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}



  render() {
    console.log("USER",this.state.user);
    
    return (
      <div>
        <Nav showShoppingCart={this.showShoppingCart} updateAuth={this.updateAuth} becomeSeller={this.becomeSeller} signout={this.signout} authed={this.state.authed} user={this.state.user.id} seller={this.state.user.seller}/>
      </div>
    );
  }

}

export default App;
