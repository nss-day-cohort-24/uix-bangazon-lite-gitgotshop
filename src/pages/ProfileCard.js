// import React, {Component} from 'react';
// import '../App.css';
// import Profile from './Profile';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



// class ProfileCard extends Component {

//     render(){
//         return(
//             <div class="ProfileCard">
//    <div className = "container-fluid">
//     <div className="row">
//                     <div className="col-sm-4"></div>

//                     <div className="col-sm-6">
//                      <Profile />
//                      <div class="text-center">
//                       <h2>Profile</h2>
//                       </div>

//                       <h3>Name:-<span><em> Million</em></span></h3>
//                       <h3>Last Name:-<span><em> Million</em></span></h3>
//                       <h3>Phone Number:-<span><em> Million</em></span></h3>
//                       <h3>Address1:-<span> <em>Million</em></span></h3>
//                       <h3>Address2:-<span> <em>Million</em></span></h3>
//                     </div>
//                     <div className="col-sm-2">right</div>
//             </div>
//             </div>
//            </div>
//         );
//     }
// }
// export default ProfileCard;


// class ProfileCard extends Component{
//   constructor(props) {
//     super(props);




//     console.log("AM TRYING TO GRAB a data from database");

//     fetch('http://localhost:3000/Profile', {
//       method: 'GET', // or 'PUT'
//       body: JSON.stringify(userProfileData), // data can be `string` or {object}!
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       })
//     }).then(res => res.json())
//     .catch(error => console.error('Error:', error))
//     .then(response => console.log('Success:', response));
//   }

//   render() {
//     return (
//       <div>
//        <button onClick={this.addUserProfile.bind(this)}>TEST addUser</button>
//       </div>
//     );
//   }
// }

// export default ProfileCard;
