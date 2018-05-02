import React, { Component } from 'react';
import '../App.css';
import lindsay from '../img/Products/lindsay.jpg';
import Button from '../components/Button.js';


class SingleProduct extends Component {
    render() {
        return (
            <div>
                <h1 className="gray-txt h3 text-center my-5 bold">Jeremy Bennett</h1>
                <div className="d-flex mx-auto prod-overview">
                    <img className="prod-pic" src={lindsay} alt="" />
                    <div className="ml-5">
                        <h3>JEREMY BENNETT</h3>
                        <h3>Nashville</h3>
                        <h3>$3,000</h3>
                        <p className="my-4">This is a temporary fix. You can't pave over concrete for long term results. The big work is still in progress to redo 440 entirely.</p>
                        <div className="d-flex flex-row">
                            <Button class="btn-red mr-2" link="" name="Add to cart" />
                            <Button class="btn-blue ml-2" link="" name="Add to wishlist" />
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleProduct;
