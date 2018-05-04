import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
// import Generate from './Generate';
import RandomData from './Customers.js';
import Products from './Product_map';
import AddUser from './AddUser';
import faker from 'faker';


class App extends Component {
  constructor(props) {
    super(props);
    this.getStuff = this.getStuff.bind(this);
}

//////// USER FACTORY ////////
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

  //////// PRODUCT FACTORY /////////////////
 
  makeProduct(){
    let data = {
      "name": "HERE IS A NEW PRODUCT",
      "product": faker.internet.password() ,
      "userId": faker.phone.phoneNumberFormat(),
      "data": faker.internet.email(),
      "price": faker.address.streetAddress(),
      "disc": faker.random.number(),
    }

    console.log("Making Product");

    fetch('http://localhost:3000/Products', {
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
    return (
      <div>
       <Nav />
       {/* <Generate /> */}
       {/* <RandomData /> */}
       <button onClick={this.blah.bind(this)}>TEST</button>
       <Products />
       <button onClick={this.makeProduct.bind(this)}>Make New Product Randomly</button>
       <AddUser />
      </div>
    );
  }
}

export default App;
