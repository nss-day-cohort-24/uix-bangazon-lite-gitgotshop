import React, { Component } from 'react';
import './Cart.css';
import CartProduct from '../components/CartProduct';
import CartSubtotal from './CartSubtotal';



class Cart extends Component {

    constructor(props) {
        super(props);
        let tempVar = null;
    }
    



    

    componentWillMount(props) {
        console.log(this.props.user);
        const userID = this.props.user;
        
        if(!userID) {
            console.log("not logged in");
            this.tempVar = "Sign In to update you Cart!";
        } else {
            console.log("logged in");
            this.tempVar =  <div>
                                <CartProduct />
                                <CartSubtotal />
                            </div>
        }
    }



    getUserCart() {
        fetch("http://localhost:3000/Products")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    productsLoaded: true,
                    objResult: result
                });
                console.log("product data object: ", this.setState.objResult);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
                console.log("ERROR HERE");
            })
    }




    render() {

        let newVar = this.tempVar;

        return (
            <div>
                <h1 className="gray-txt h3 text-center my-5 bold">Your Shopping Cart</h1>
                {newVar}
            </div>
        );
    }
}

export default Cart;
