import React, { Component } from 'react';
import '../App.css';
import { Container, Card, CardImg, CardText, CardBody, CardLink, CardSubtitle, Row, Col } from 'reactstrap';
import Button from '../components/Button.js';


/**
 * Main Products page.
 */



class Product extends Component {

        constructor(props){
            super(props);
    
            this.state = {
                productsLoaded: false,
                objResult: [],
                error: null,
                data: {},
                printSingle: false,
                singleProduct: [],
                prodObj : {
                    name: "",
                    price: ""
                }
            };
            this.getAnotherClicked=this.getAnotherClicked.bind(this);
            this.printSingle = this.printSingle.bind(this);
            this.printAll = this.printAll.bind(this);
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
                    // console.log("productArray", productArray[i]);
                    // console.log("matched productID to event target ID");
                    this.setState({
                        printSingle: true,
                        singleProduct: productArray[i]
                    });
                }
            }
            
        }

        printAll() {
            this.setState({
                printSingle: false
            });
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
                });
        }
        
        // prod needs to set state
        // seller id needs to become seller id
    addCart(singleProd) {
        console.log("this.props.user", this.props.user);


        let data = {
            "name": singleProd.name,
            "price": singleProd.price,
            "userId": this.props.user
        };
        fetch('http://localhost:3000/Cart', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

        
    }
            
    addWishlist(singleProd) {
        
        let data = {
            "name": singleProd.name,
            "price": singleProd.price,
            "userId": this.props.user
        };
        fetch('http://localhost:3000/Wishlist', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

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

                
                    // <div className="card-width">
                        <Card>
                        <CardBody key={index} className="my-4">
                        <img width={200} height={200} src={data.picture} alt="" />
                                <div>
                                    <h2 id={data.id} className="my-2 readMore" onClick={this.printSingle}>{data.name}</h2>
                                    <h3>{data.price}</h3>
                                </div>
                                <CardText>{data.disc}</CardText>
                            </CardBody>
                        </Card>
                    // </div>


        ))
        console.log("PRODUCT DATA OBJECT", productDataObject);
        return(
            <div className="island">{productDataObject}</div>
        )
    }else if(productsLoaded && printSingle){

        return(
            <div>
                {console.log("single prod render", singleProduct)}
            <button className="btn-blue margin-left mb-0" onClick={this.printAll}>Back</button>
            <h1 className="gray-txt h3 text-center my-5 bold mt-0">{singleProduct.name}</h1>
            <div className="d-flex mx-auto prod-overview">
                <img className="prod-pic" src={singleProduct.picture} alt="" />
                <div className="ml-5">
                    <h3>{singleProduct.name}</h3>
                    <h3>{singleProduct.price}</h3>
                    <p className="my-4">{singleProduct.disc}</p>
                    <div className="d-flex flex-row">
                            <button class="btn-red mr-2" id={singleProduct.id} onClick={() => this.addCart(singleProduct)} name="Add to cart">Add to cart</button>
                            <button class="btn-blue ml-2" id={singleProduct.id} onClick={() => this.addWishlist(singleProduct)} name="Add to wishlist">Add to wishlist</button>
                    </div>                        
                </div>
            </div>
        </div>
        )
    }
}
}
    // }else if(this.printSingle){
    //     return(
    //     <div>
    //         <h1>THIS WILL BE A PRODUCT</h1>
    //     </div>
    //     )
    // }
// }
export default Product
