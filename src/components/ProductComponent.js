import React, { Component } from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard.js';
import Ben from '../img/Products/Ben.png';

class Product extends Component {

        constructor(props){
            super(props);
    
            this.state = {
                productsLoaded: false,
                objResult: [],
                error: null,
                data: {}
            }
            this.getAnotherClicked=this.getAnotherClicked.bind(this);
        }
    
        componentDidMount() {
            console.log("did mount");
            this.getProductData();
        }
    
        getAnotherClicked(e) {
            
            console.log("getAnotherClicked", this.props);
    
            let dataSet = this.state.objResult;
    
    //.PUSH DATA IS SUBJECT TO THE TABLE DATA NEEDED FOR STATE 
    
            dataSet.push({
                name: dataSet.name,
                product: dataSet.product,
                userId: "345-803-2588",
                data: "Velda_Witting@gmail.com",
                price: "9804 Simonis Ways",
                disc: 62207,
                id: 1
            });
            this.setState({
                productsLoaded: false,
                objResult: [],
                error: null
            },
            this.getProductData());
    
        }
    
        getProductData() {
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
            let {error, productsLoaded, objResult} = this.state;
    
            if(error) {
                return (
                    <div>
                        <div> Error: fck it's not working</div>
                    </div>
                )
            } else if(!productsLoaded) {
                return <div>Loading...</div>
            } else{
    
    
                let data = this.state.objResult;

                let productDataObject = objResult.map((data,index) => (

             <div className="d-flex flex-row justify-content-center flex-wrap">
                <ProductCard src={Ben} link="/SingleProduct" id="" name={data.name} price={data.price} disc={data.disc} />
            </div>
        ))
        console.log("PRODUCT DATA OBJECT", productDataObject);
        return(
            <div>{productDataObject}</div>
        )
    }}
}

export default Product;
