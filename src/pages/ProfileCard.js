import React, {Component} from 'react';
import '../App.css';
import Profile from './Profile';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class ProfileCard extends Component {
    // state={
    //  fields:{}
    // };
    // onSubmit=fields=>{
    //     this.setState({fields});
    // };
    render(){
        return(
            <div class="ProfileCard">
    <div className = "container-fluid">
           
     {/* <this.props.c/> */}


                <div className="row">
                    <div className="col-sm-4"><img>left side</img>
                    </div>
                    <div className="col-sm-6">
                        {/* <this.props.Profile /> */}
                        <h2>WElcome to Our Page</h2>
                    </div>
                    <div className="col-sm-2">right</div>
                </div>
            </div> 
           </div>
        );
    }
}
export default ProfileCard;