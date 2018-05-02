import React, { Component } from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard.js';
import lindsay from '../img/Products/lindsay.jpg'

class Product extends Component {

    // THIS IS WHERE WE WILL MAP DATA TO BECOME PRODUCT CARDS
    render() {
        return (
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />                
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="" id="" />                
            </div>
        );
    }
}

export default Product;
