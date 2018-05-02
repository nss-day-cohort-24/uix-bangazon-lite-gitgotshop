import React, { Component } from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard.js';
import lindsay from '../img/Products/lindsay.jpg'
import Ben from '../img/Products/Ben.png';

class Product extends Component {

    // THIS IS WHERE WE WILL MAP DATA TO BECOME PRODUCT CARDS
    render() {
        return (
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <ProductCard src={Ben} name="BEN" link="/SingleProduct" id="" />
                <ProductCard src={Ben} name="BEN" link="/SingleProduct" id="" />
                <ProductCard src={Ben} name="BEN" link="/SingleProduct" id="" />
                <ProductCard src={Ben} name="BEN" link="/SingleProduct" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="/SingleProduct" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="/SingleProduct" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="/SingleProduct" id="" />                
                <ProductCard src={lindsay} name="LINDSAY" link="/SingleProduct" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="/SingleProduct" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="/SingleProduct" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="/SingleProduct" id="" />
                <ProductCard src={lindsay} name="LINDSAY" link="/SingleProduct" id="" />                
            </div>
        );
    }
}

export default Product;
