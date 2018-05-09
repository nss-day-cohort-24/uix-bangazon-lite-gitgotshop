import React, {Component} from 'react';
import '../App.css';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class ProfileCard extends Component{
    constructor(props) {
      super(props);

    this.viewProfile = this.viewProfile.bind(this);
    }

viewProfile(){
      fetch(`http://localhost:3000/users`, {
        method: 'GET', // or 'bring some data'
        }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }

    render(){
        return(
            <div className="ProfileCard container-fluid row">
                <div className="col-sm-4">
                </div>
                <div className="col-sm-6">
                    <h2 className="text-center">Profile</h2>
                    <h3>Name:-<span><em> Million</em></span></h3>
                    <h3>Phone Number:-<span><em> Million</em></span></h3>
                    <h3>Address1:-<span> <em>Million</em></span></h3>
                </div>
                <div className="col-sm-2">right</div>
            </div>
        );
    }
 }
  export default ProfileCard;