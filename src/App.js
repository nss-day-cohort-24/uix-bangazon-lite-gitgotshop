import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import RandomData from './Customers.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.getStuff = this.getStuff.bind(this);
}

  getStuff() {
    fetch('http://localhost:3000/profiles')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("RESPONSE", responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  blah(){
    let data = {
      "first_name": "MAD",
      "last_name": "MAN",
      "phone": "Who dis",
      "avatar": "( ͡° ͜ʖ ͡°)"
    }

    console.log("BLAH");

    fetch('http://localhost:3000/profiles', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

    this.state = {
      user: null
    }
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({
      user: user
    });
  }

  render() {
    this.getStuff()
    return (
      <div>
       <Nav />
       {/* <RandomData /> */}
       <button onClick={this.blah.bind(this)}>TEST</button>
        <Nav updateUser={this.updateUser} />
      </div>
    );
  }
}

export default App;
