import React, { Component } from 'react';
import '../App.css';
import main1 from '../img/avatar.png';
import Button from '../components/Button.js';





class Profile extends Component {
constructor(props) {
  super(props);
  this.state =
   {
     
    firstName: '',
    lastName:'',
    phone:'',
    address1:'',
    address2:'',
    zipCode:'',
    cardNumber:'',
    cardExpiry:'',
    cardCVC:'',
    file : '',
    imagePreviewUrl : '',
    state:''
  };
   this.handleImageChange = this.handleImageChange.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit= this.handleSubmit.bind(this);
  this.getprofile = this.getprofile.bind(this);
  this.addUserProfile=this.addUserProfile.bind(this)
}
handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

     reader.onloadend=()=>{
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
     reader.readAsDataURL(file);
  }



handleChange(event) {
console.log("user", event.target.name);
  this.setState({
      [event.target.name]:event.target.value
    });
  console.log("change",event.target.value);

}

handleSubmit(event) {
console.log("some thing",this.state);
       this.state,
this.addUserProfile()
}
getprofile() {
    fetch('http://localhost:3000/profile')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("i got you server", responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  addUserProfile(name){
    let userProfileData = {
      "firstName":this.state.firstName,
      "lastName":this.state.lastName,
      "phone":this.state.phone,
      "address1":this.state.address1,
      "address2":this.state.address2,
      "zipCode":this.state.zipCode,
      "cardNumber":this.state.cardNumber,
      "cardExpiry":this.state.cardExpiry,
      "cardCVC":this.state.cardCVC,
      "imagePreviewUrl":this.state.imagePreviewUrl
    }

    console.log("profile to database");

    fetch('http://localhost:3000/Profile', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(userProfileData), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('sorry Error try to send it again', error))
    .then(response => console.log('Successfully posted to data base', response));
  }

render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl}/>);
    }

        return (
<div class="Profile">
<div className = "container-fluid" >
    <div className="row">
    <div className="col-xs-3 col-md-5 ">
         <div className="text-center">
              {/* <img className="round-circle"  {$imagePreview}alt="photo"/>  */}
              {$imagePreview}
                <div className="form-group">
                       <input id="Upload-photo" name="Upload photo" className="input-file" type="file"  onChange={this.handleImageChange}/>
<label className = "col-md-8 control-label" htmlFor = "Upload photo" accept = ".jpg, .jpeg ,.png"></label>
            </div>
        </div>
    </div>
    <div className="col-xs-6 col-md-4 ">
        <div className="col-8 ">
            <legend className="text-center">SIGN UP</legend>
            <form className="form-horizontal">
                <p><label></label><input className="form-control" name="firstName"  placeholder="First Name"  value={this.state.value} onChange={this.handleChange}/></p>
                <p><label></label><input className ="form-control" name="lastName" placeholder ="Last Name" value={this.state.value} onChange={this.handleChange}/></p>
                <p><label></label><input className="form-control" name="phone"  placeholder="Phone Number" value={this.state.value} onChange={this.handleChange}/></p>
                <p><label></label><input className="form-control" name="address1"  placeholder="Address Line 1" value={this.state.value} onChange={this.handleChange}/></p>
                 <p><label></label><input className="form-control" name="address2" placeholder="Address Line 2" value={this.state.value} onChange={this.handleChange}/></p>
            <div className="row">
                     <div className="col-md-6">
                          <p><label></label><input className="form-control"name="zip-code" id="zipCode" placeholder="Zip-code"required value={this.state.value} onChange={this.handleChange}/></p>
                     </div>
                         <div className="col-md-6">
                              <p><label htmlFor="state"></label>
                              <select className="form-control" name="state" value={this.value} onChange={this.handleChange}><option value="---">State</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option></select>
                              </p>
                        </div>
             </div>
                 <legend className="text">PAYMENT METHOD</legend>
               <p><label><input type = "tel" className = "form-control " name = "cardNumber" placeholder = "Valid Card Number" autoComplete = "cc-number" required="autofocus" value={this.state.value} onChange={this.handleChange}/></label></p>
                     <div className="row">
                         <div className="col-md-5">
                               <p><label><input type="tel" className="form-control" name="cardExpiry" placeholder="MM / YY" autoComplete="cc-exp" value={this.state.value} onChange={this.handleChange} required /></label></p>
                          </div>
                          <div className="col-md-6">
                                <p><label htmlFor="cardCVC"><input type="tel" className="form-control" name="cardCVC" placeholder="CVC" autoComplete="cc-csc" value={this.state.value} onChange={this.handleChange} required/></label></p>
                        </div>
                     </div>

               <button className="btn-red mr-4 " link="" name="Submit" type="button" onClick={this.handleSubmit}>Submit</button>

            </form>
        </div>

    </div>
</div>
<div className = "col-xs-3 col-md-3">

</div>

</div>
</div>

        );
    }
}


export default Profile;
