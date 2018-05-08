import React, { Component } from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard.js';
import Ben from '../img/Products/Ben.png';
import SingleProduct from "../pages/SingleProduct";

class Product extends Component {

        constructor(props){
            super(props);
    
            this.state = {
                productsLoaded: false,
                objResult: [],
                error: null,
                data: {},
                printSingle: false,
                singleProductPrice: '',
                singleProductInfo: '',
            }
            this.getAnotherClicked=this.getAnotherClicked.bind(this);
            this.printSingle = this.printSingle.bind(this);
            // this.passProduct = this.passProduct.bind(this);
        }
    
        componentDidMount() {
            console.log("did mount");
            this.getProductData();
        }

        // passProduct(){
        //     console.log('pass product function working');
        // }

        printSingle(){
            console.log("trying to print single product");
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
                    console.log("product data object: ", this.objResult);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true
                    });
                    console.log("ERROR HERE");
                })
        }
    
    
    
        render() {
            let {error, productsLoaded, objResult, printSingle} = this.state;
    
            if(error) {
                return (
                    <div>
                        <div> Error: fck it's not working</div>
                    </div>
                )
            } else if(!productsLoaded) {
                return <div>Loading...</div>
            } else if(productsLoaded){
    
    
                let data = this.state.objResult;

                let productDataObject = objResult.map((data, index) => (
                    <div key={index} className="d-flex flex-row justify-content-center flex-wrap">

                        <div className="d-flex flex-row">
                            <div className="my-4 justify-content-center">
                                <img className="w-75" src={Ben} alt="" />
                                <h3 className="my-2" onClick={this.printSingle}>Read More</h3>
                            </div>
                            <div className="">
                                <br />
                                <h2>{data.name}</h2>
                                <h3>{data.price}</h3>
                                <p className="my-4">{data.disc}</p>
                            </div>
                        </div>
                {/* <ProductCard src={Ben} index={index} id="" name={data.name} price={data.price} disc={data.disc} /> */}
            </div>
        ))
        return(
            <div>{productDataObject}</div>
        )
    }
}
    // }else if(this.printSingle){
    //     return(
    //     <div>
    //         <h1>THIS WILL BE A PRODUCT</h1>
    //     </div>
    //     )
    // }
}
export default Product
