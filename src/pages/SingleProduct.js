import React, { Component } from 'react';
import '../App.css';
import lindsay from '../img/Products/lindsay.jpg';
import Ben from '../img/Products/Ben.png';
import Button from '../components/Button.js';


class SingleProduct extends Component {
    render() {
        return (
            <div>
                {console.log("single prod render", singleProduct)}
            <h1 className="gray-txt h3 text-center my-5 bold">Ben Atkins</h1>
            <div className="d-flex mx-auto prod-overview">
                <img className="prod-pic" src={singleProduct.picture} alt="" />
                <div className="ml-5">
                    <h3>{singleProduct.name}</h3>
                    <h3>{singleProduct.price}</h3>
                    <p className="my-4">{singleProduct.disc}</p>
                    <div className="d-flex flex-row">
                        <button class="btn-red mr-2" id={singleProduct.id} onClick={() => this.addCart(singleProduct)} name="Add to cart" />
                        <button class="btn-blue ml-2" id={singleProduct.id} onClick={() => this.addWishlist(singleProduct)} name="Add to wishlist" />
                    </div>                        
                </div>
            </div>
        </div>
        );
    }
}

export default SingleProduct;
