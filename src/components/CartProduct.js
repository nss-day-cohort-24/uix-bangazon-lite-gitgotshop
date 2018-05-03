import React, { Component } from 'react';
import '../App.css';
import lindsay from '../img/Products/lindsay.jpg';
import Ben from '../img/Products/Ben.png';
import Button from '../components/Button.js';


class CartProduct extends Component {
    render() {
        return (
            <div>
                <div className="d-flex mx-auto cart-prod-overview mb-5">
                    <div className="d-flex">
                        <img className="cart-prod-pic" src={Ben} alt="" />
                        <div className="ml-3">
                            <h3>BEN ATKINS</h3>
                            <h3>Nashville</h3> 
                            <div className="d-flex flex-row">
                                <Button class="btn-red mr-2" link="" name="Remove" />
                            </div>                        
                        </div>
                    </div>
                    <div>                        
                        <h3>$3,000</h3>
                    </div>
                </div>
                <div className="d-flex mx-auto cart-prod-overview mb-5">
                    <div className="d-flex">
                        <img className="cart-prod-pic" src={Ben} alt="" />
                        <div className="ml-3">
                            <h3>BEN ATKINS</h3>
                            <h3>Nashville</h3> 
                            <div className="d-flex flex-row">
                                <Button class="btn-red mr-2" link="" name="Remove" />
                            </div>                        
                        </div>
                    </div>
                    <div>                        
                        <h3>$3,000</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;