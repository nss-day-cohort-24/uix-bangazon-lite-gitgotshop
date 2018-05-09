import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import SingleProduct from '../pages/SingleProduct';


function printSingle(){
    

}

function ProductCard(props){


if(this.props.printSingle === false){
        return (
            <div key={props.index } className="d-flex flex-row">
                <div className="my-4 justify-content-center">
                    <img className="w-75" src={props.src} alt="" />
                    <h3 className="my-2" onClick={this.printSingle}>Read More</h3>
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
}

export default ProductCard;

