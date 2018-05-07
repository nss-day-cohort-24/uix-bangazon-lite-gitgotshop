import React, { Component } from 'react';
import '../App.css';
import main1 from '../img/avatar.png';
import Button from '../components/Button.js';
class Profile extends Component {
  constructor(props){
      super(props);

  this.state={
    firstName:'',
    lastName:'',
    phone:'',
    address1:'',
    address2:'',
    zipCode:'',
    cardNumber:'',
    cardExpiry:'',
    cardCVC:''
  };
  change=e=>{
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
    [  e.target.name]:e.target.value
  });
};
onSubmit=e=>{
  e.preventDefault();
  this.setState({
    firstName:'',
    lastName:'',
    phone:'',
    address1:'',
    address2:'',
    zipCode:'',
    cardNumber:'',
    cardExpiry:'',
    cardCVC:''
  });
  this.props.onChange({
    firstName:'',
    lastName:'',
    phone:'',
    address1:'',
    address2:'',
    zipCode:'',
    cardNumber:'',
    cardExpiry:'',
    cardCVC:''
  });
};
  };
    render() {
        return (
            <div>
<div className = "container-fluid" >
    <div className="row">
    <div className="col-xs-3 col-md-5 ">
         <div className="text-center">
              <img className="round-circle" src={main1} alt="photo"/>
                    <div className="form-group">
                       <input id="Upload-photo" name="Upload photo" className="input-file" type="file"/>
                        <label className="col-md-8 control-label" for="Upload photo" accept=".jpg, .jpeg, .png"></label>
                    </div>
                 </div>
                 </div>
    <div className="col-xs-6 col-md-4 ">
        <div className="col-8 ">
            <legend className="text-center">SIGN UP</legend>
            <form className="form-horizontal">
                <fieldset>
              <form id="contactForm">
                <p><label></label><input className="form-control" name="firstName" id="fname" placeholder="First Name" required value={this.state.firstName} onChange={e => this.change(e)}/></p>
                <p><label></label><input className ="form-control" name = "lastName" id = "lname" placeholder = "Last Name" required/></p>
                <p><label></label><input className="form-control" name="phone" id="phone" placeholder="Phone Number"/></p>
                <p><label></label><input className="form-control" name="address1" id="Address Line1" placeholder="Address Line 1"/></p>
                 <p><label></label><input className="form-control" name="address1" id="Address Line2" placeholder="Address Line 2"/></p>
                 <div className="row">
                     <div className="col-md-6">
                          <p><label></label><input className="form-control"name="zip-code" id="zip-code" placeholder="Zip-code"required/></p>
                     </div>
                         <div className="col-md-6">
                              <p><label for="state"></label>
                              <select className="form-control" id="state" name="state"><option value="---">State</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
                              </p>
                              </div>
                              </div>
                 <legend className="text">PAYMENT METHOD</legend>
               <p> <label><input type = "tel" className = "form-control " name = "cardNumber" placeholder = "Valid Card Number" autocomplete = "cc-number" requiautofocus/></label></p>
                     <div className="row">
                         <div className="col-md-5">
                               <p><label><input type="tel" className="form-control" name="cardExpiry" placeholder="MM / YY" autocomplete="cc-exp" required/></label></p>
                          </div>
                          <div className="col-md-6">
                                <p><label for="cardCVC"><input type="tel" className="form-control" name="cardCVC" placeholder="CVC" autocomplete="cc-csc" required/></label></p>
                        </div>
                     </div>
             <div className="text-center">
                <Button class="btn-red mr-4 " link="" name="Submit" onClick={e => this.onSubmit(e)}/>
             </div>
        </form>
    </fieldset>
            </form>
        </div>

    </div>

</div>
<div className = "col-xs-3 col-md-3"/>

</div>
  </div>
        );
    }
}

export default Profile;
