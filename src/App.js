import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
// import Generate from './Generate';
import RandomData from './Customers.js';
import Products from './Product_map';
import AddUser from './AddUser';
import faker from 'faker';
import MakeProduct from './components/NewProduct.js'


class App extends Component {
  
  
  render() {
    return (
      <div>
       <Nav />
       <MakeProduct />
       <AddUser />
      </div>
    );
  }
}

export default App;
