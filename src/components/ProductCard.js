import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';



function ProductCard(props) {
        return (
            <div className="product-card m-3">
                <img className="w-100" src={props.src} alt="" />
                <Link to={props.link}><h3 className="my-2">{props.name}</h3></Link>
            </div>
        );
    }

export default ProductCard;

