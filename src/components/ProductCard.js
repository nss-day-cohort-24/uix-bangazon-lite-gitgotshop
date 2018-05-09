// import React, { Component } from 'react';
// import '../App.css';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
// } from 'react-router-dom';
// import EditButton from './EditButton.js';

// /**
//  * An individual product, as listed on the main Products page. 'Read More' can be linked to a Product Detail page. 
//  */


<<<<<<< HEAD
function ProductCard(props) {
        return (
            <div className="d-flex flex-row">
                <div className="my-4 justify-content-center">
                    <img className="w-75" src={props.src} alt="" />
                    <Link to={props.link}>
                    <h3 className="my-2">Read More</h3></Link>
                </div>
                <div className="">
                    <br />
                    <h2>{props.name}</h2>
                    <h3>{props.price}</h3>
                    <p className="my-4">{props.disc}</p>
                </div>
            </div>
        );
    }
=======
// function ProductCard(props){
>>>>>>> master


// if(this.props.printSingle === false){
//         return (
//             <div key={props.index } className="d-flex flex-row">
//                 <div className="my-4 justify-content-center">
//                     <img className="w-75" src={props.src} alt="" />
//                     <h3 className="my-2">Read More</h3>                
//                 </div>
//                 <div className="">
//                     <br />
//                     <h2>{props.name}</h2>
//                     <h3>{props.price}</h3>
//                     <p className="my-4">{props.disc}</p>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ProductCard;

// // delete?