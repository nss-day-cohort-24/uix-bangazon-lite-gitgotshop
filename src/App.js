import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Products from './Product_map';
import AddUser from './AddUser';
import faker from 'faker';
import MakeProduct from './components/newProduct'


class App extends Component {
  render() {
    return (
      <div>
       <Nav />
      </div>
    );
  }

}

export default App;
