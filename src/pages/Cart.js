import React, { Component } from 'react';
import '../App.css';
import CartProduct from '../components/CartProduct';
import CartSubtotal from '../components/CartSubtotal';



class Cart extends Component {
    render() {
        return (
            <div>
                <h1 className="gray-txt h3 text-center my-5 bold">Your Shopping Cart</h1>
                <CartProduct />
                <CartSubtotal />

            </div>
        );
    }
}

export default Cart;
