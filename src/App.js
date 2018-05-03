import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
var faker= require('faker');
// import Generate from './Generate';
// import RandomData from './Customers.js';

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
      "username": faker.name.firstName(),
      "passsword": faker.internet.password() ,
      "phone": faker.phone.phoneNumberFormat(),
      "email": faker.internet.email(),
      "address": faker.address.streetAddress(),
      "paymentOption": faker.random.number(),
      "paymentHistory": ""
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
  }

  render() {
    this.getStuff()
    return (
      <div>
       <Nav />
       {/* <Generate /> */}
       {/* <RandomData /> */}
       <button onClick={this.blah.bind(this)}>TEST</button>
      </div>
    );
  }
}

export default App;
