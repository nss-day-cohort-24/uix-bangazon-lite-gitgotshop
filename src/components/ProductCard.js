import React, { Component } from 'react';
import '../App.css';



function ProductCard(props) {
        return (
            <div className="product-card m-3">
                <img className="w-100" src={props.src} alt="" />
                <a href={props.link}><h3 className="my-2">{props.name}</h3></a>
            </div>
        );
    }

export default ProductCard;


