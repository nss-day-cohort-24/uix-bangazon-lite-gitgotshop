import React, { Component } from 'react';
var faker= require('faker');

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.getUsers = this.getUsers.bind(this);
}

  getUsers() {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("RESPONSE", responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  addUser(){
    let userData = {
      "username": faker.name.firstName(),
      "password": faker.internet.password(),
      "phone": faker.phone.phoneNumberFormat(),
      "email": faker.internet.email(),
      "address": faker.address.streetAddress(),
      "paymentOption": faker.random.number(),
      "paymentHistory": "",
      "seller": faker.random.boolean(),
      "favorites": ""
    }

    console.log("making sure addUser this works");

    fetch('http://localhost:3000/users', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(userData), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  render() {
    this.addUser()
    return (
      <div>
       <button onClick={this.addUser.bind(this)}>TEST addUser</button>
      </div>
    );
  }
}

export default AddUser;
