import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Generate from './Generate';

class App extends Component {
  render() {
    return (
      <div>
       <Nav />
       <Generate />
      </div>
    );
  }
}

export default App;
