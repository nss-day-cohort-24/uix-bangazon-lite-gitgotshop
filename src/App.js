import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import AddUser from './AddUser';

class App extends Component {
  render() {
    return (
      <div>
       <Nav />
       <AddUser />
      </div>
    );
  }
}

export default App;
