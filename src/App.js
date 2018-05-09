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

  render() {
    console.log("USER",this.state.user.id);
    return (
      <div>
        <Nav showShoppingCart={this.showShoppingCart} updateAuth={this.updateAuth} signout={this.signout} authed={this.state.authed} user={this.state.user.id} seller={this.state.user.seller}/>
      </div>
    );
  }

}

export default App;
