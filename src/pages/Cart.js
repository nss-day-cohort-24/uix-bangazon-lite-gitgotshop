import React, { Component } from 'react';
import './Cart.css';
import CartProduct from '../components/CartProduct';
import CartSubtotal from './CartSubtotal';
import { Container, Card, CardImg, CardText, CardBody, CardLink, CardSubtitle, Row, Col } from 'reactstrap';



function AddUpCart(props){
    let finalPrice = props.add.reduce((prev, current)=>{
        return prev + current
    },0);

    return(
        <div>
            {"$"+finalPrice}
        </div>
    )
}

function AddTax(props) {
    let finalPrice = props.add.reduce((prev, current) => {
        return prev + current
    }, 0);

    let finalPricePlusTax = finalPrice + (finalPrice * 0.1);
    
    return (
        <div>
            {"$" + finalPricePlusTax}
        </div>
    )
}

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


    addUpCart(){
        return(
        this.props.add
        )
    }

    getUserCart(user) {
        fetch("http://localhost:3000/Cart")
        .then(res => res.json())
        .then(
            (result) => {

                console.log('result from shopping cart', result);

                var prods = result.filter(function (item) {
                    if (item.userId === user)
                    return item;
                })
                
                this.setState({
                    userProducts: prods,
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

        let totals = data.map((data, index)=>{
            return parseInt(data.price.replace(/\D/g, ''))
        })


        console.log("finalTotals in render", totals);
        console.log("return the length of total array", totals.length);



        let cartData = data.map((data, index) => (

                    
            <div style={{ borderBottom: "2px solid black", marginBottom: "5px" }} key={index} className="container">
                    <div className="row">
                        <div className="col text-left">
                            <h2 id={data.id} className="m-2">{data.name}</h2>
                        </div>
                        <div className="col text-right">
                            <h3 className="m-2">{data.price}</h3>
                        </div>
                    </div>
            </div>
        ))




        return (
            <div>
                {console.log("totals in final return", totals)}
                <h1 className="gray-txt h3 text-center my-5 bold">Your Shopping Cart</h1>
                {newVar}
                <div>
                    <div>{cartData}</div>
                </div>
                <div>
                    <div className="mx-auto subtotal-overview">
                        <div className="d-flex subtotal">
                            <div className="d-flex row mx-0 subtotal-price">
                                <div className="bodyText"><AddUpCart add={totals}/> </div>
                                <div className="bodyText">subtotal</div>
                            </div>
                            <div className="d-flex row mx-0 subtotal-price subtotal-break">
                                <div className="bodyText">10%</div>
                                <div className="bodyText">tax</div>
                            </div>
                            <div className="d-flex row mx-0 subtotal-price">
                                <div className="bodyText"><AddTax add={totals} /></div>
                            </div>
                            <button class="btn-red mt-5 mb-5 checkout" link="" >Checkout</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
