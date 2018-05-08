import React, { Component } from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard.js';
import Ben from '../img/Products/Ben.png';
import Button from '../components/Button.js';

class Product extends Component {

        constructor(props){
            super(props);
    
            this.state = {
                productsLoaded: false,
                objResult: [],
                error: null,
                data: {},
                printSingle: false,
            }
            this.getAnotherClicked=this.getAnotherClicked.bind(this);
            this.printSingle = this.printSingle.bind(this);
        }
    
        componentDidMount() {
            console.log("did mount");
            this.getProductData();
        }
    
        getAnotherClicked(e) {
            console.log("getAnotherClicked", this.props);

            let dataSet = this.state.objResult;
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
    

        printSingle(event){
            var productArray = this.state.objResult;
            var productID = event.target.id;

            for(var i = 0; i < productArray.length; i++){
                if(productArray[i].id === parseInt(productID)){
                    console.log("matched productID to event target ID");
                    this.setState({
                        printSingle: true,
                        singleProduct: productArray[i]
                    })
                }
            }
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
            let {error, productsLoaded, objResult, printSingle, singleProduct} = this.state;
    
            if(error) {
                return (
                    <div>
                        <div> Error: fck it's not working</div>
                    </div>
                )
            } else if(!productsLoaded) {
                return <div>Loading...</div>

            } else if(productsLoaded && !printSingle){

                let data = this.state.objResult;
                let productDataObject = objResult.map((data,index) => (

             <div key={index} className="d-flex flex-row justify-content-center flex-wrap">
                <div className="flex-row">
                    <div className="my-4 justify-content-center">
                        <img className="w-75" src={Ben} alt="" />
                        <h2 id={data.id} className="my-2 readMore" onClick={this.printSingle}>{data.name}</h2>
                    </div>
                    <div className="">
                        <h3>{data.price}</h3>
                        <p className="">{data.disc}</p>
                    </div>
                </div>

            </div>
        ))
        console.log("PRODUCT DATA OBJECT", productDataObject);
        return(
            <div>{productDataObject}</div>
        )
    }else if(productsLoaded && printSingle){
        return(
        <div>
            <h1 className="gray-txt h3 text-center my-5 bold">Ben Atkins</h1>
            <div className="d-flex mx-auto prod-overview">
                <img className="prod-pic" src={Ben} alt="" />
                <div className="ml-5">
                    <h3>{singleProduct.name}</h3>
                    <h3>{singleProduct.price}</h3>
                    <p className="my-4">{singleProduct.disc}</p>
                    <div className="d-flex flex-row">
                        <Button class="btn-red mr-2" link="" name="Add to cart" />
                        <Button class="btn-blue ml-2" link="" name="Add to wishlist" />
                    </div>                        
                </div>
            </div>
        </div>
        )
    }
}
}

export default Product;
