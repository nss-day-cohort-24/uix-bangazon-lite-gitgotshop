import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import AddUser from './AddUser';

class App extends Component {
  constructor(props) {
     super(props); 
     
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
    return (
      <div>
       <Nav updateUser={this.updateUser} />
      </div>
    );
  }
}

export default App;
