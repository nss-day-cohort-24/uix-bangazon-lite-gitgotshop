import React, { Component } from 'react';
import '../App.css';


class CartSubtotal extends Component {
    render() {
        return (
            <div>
                <div className="mx-auto subtotal-overview">
                    <div className="d-flex subtotal">
                        <div className="d-flex row subtotal-price">
                            <div>subtotal</div>
                            <div>price</div>
                        </div>
                        <div className="d-flex row subtotal-price">
                            <div>taxes</div>
                            <div>price</div>
                        </div>
                        <div className="d-flex row subtotal-price">
                            <div>total</div>
                            <div>price</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default CartSubtotal;