import React, {Component} from 'react';
import '../App.css';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class ProfileCard extends Component{

    render(){
        return(
            <div className="Profile">
            <div className = "container-fluid" >
                <div className="row mt-3">
                <div className="col-3">
                  <img src={this.props.userProfile.avatar} alt={this.props.userProfile.username} />
                </div>
                <div className="col-auto">
                    <legend>{this.props.userProfile.username}'s Profile</legend>
                    <p><label>Name:&nbsp;</label>{this.props.userProfile.username}</p>
                    <p><label>Email:&nbsp;</label>{this.props.userProfile.email}</p>
                    <p><label>Phone Number:&nbsp;</label>
                    {this.props.userProfile.phone}</p>
                    <p><label>Address:&nbsp;</label>{this.props.userProfile.address}</p>
                    <legend>Payment Method</legend>
                    <p><label>Card on File:&nbsp;</label>xxxxxxxxxxx{this.props.userProfile.paymentOption}</p>
        
                <button className="btn-red" link="" name="Submit" type="button">Edit</button>
                </div>
                </div>
            </div>
            </div>
                    );
                }
            }
            
  export default ProfileCard;