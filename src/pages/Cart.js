import React, { Component } from 'react';
import './Cart.css';
import CartProduct from '../components/CartProduct';
import CartSubtotal from './CartSubtotal';
import { Container, Card, CardImg, CardText, CardBody, CardLink, CardSubtitle, Row, Col } from 'reactstrap';




class Cart extends Component {

    constructor(props) {
        super(props);
        let tempVar = null;
        
        this.state = {
            userProducts: []
        }

        this.getUserCart = this.getUserCart.bind(this);
        
    }
    



    

    componentWillMount(props) {
        console.log(this.props.user);
        const userID = this.props.user;
        
     this.getUserCart(userID);
    }



    getUserCart(user) {
        fetch("http://localhost:3000/Cart")
        .then(res => res.json())
        .then(
            (result) => {

                var prods = result.filter(function (item) {
                    if (item.userId === user)
                    return item;
                });
                
                this.setState({
                    userProducts: prods
                });

                console.log("prods", prods)
                console.log("THIS STATE PRODS", this.state)
                
            },
            (error) => {
                console.log("ERROR HERE");
            })
    }


    render() {

        let newVar = this.tempVar;

        let data = this.state.userProducts;

        let cartData = data.map((data, index) => (

            <Card>
                <CardBody key={index} className="my-4">
                    <div>
                        <h2 id={data.id} className="my-2 readMore">{data.name}</h2>
                        <h3>{data.price}</h3>
                    </div>
                </CardBody>
            </Card>


        ))

        return (
            <div>
                <h1 className="gray-txt h3 text-center my-5 bold">Your Shopping Cart</h1>
                {newVar}
                <div className="island">{cartData}</div>
            </div>
        );
    }
}

export default Cart;
