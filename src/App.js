import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
<<<<<<< HEAD
// import Generate from './Generate';
=======
>>>>>>> 6d3b7868b37b179009580329304d594aa6767b8c
import Products from './Product_map';
import AddUser from './AddUser';
import faker from 'faker';
import MakeProduct from './components/newProduct'


class App extends Component {

  state = {
    authed: false,
    user: {}
}

updateAuth = (user)=>{
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
    return (
      <div>
       <Nav updateAuth={this.updateAuth} signout={this.signout} authed={this.state.authed} />
      </div>
    );
  }

}

export default App;
