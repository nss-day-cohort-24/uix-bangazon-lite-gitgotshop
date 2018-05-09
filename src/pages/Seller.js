import React, { Component } from 'react';
import MakeProduct from '../components/newProduct.js';
import ProductCard from '../components/ProductCard.js';
import Ben from '../img/Products/Ben.png';
import { Jumbotron, Container } from 'reactstrap';
import EditButton from '../components/EditButton.js';
import { Button } from 'reactstrap';

class Seller extends Component {
    constructor(props){
        super(props);

        this.state = {
            userProducts: [],
            singleProduct: [],
            singleEditProduct: [],
            printSingle: false,
            printEditSingle: false
        }
        this.printSingle = this.printSingle.bind(this);
        this.editPage = this.editPage.bind(this);
        this.printAll = this.printAll.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:3000/Products?sellerID=${this.props.user}`)
        .then((data) => {
          return data.json();
        }).then((userArray) => {
            this.setState({
                userProducts: userArray
            })
        })
    }

    printSingle(event){  
        let productArray = this.state.userProducts;
        let productID = event.target.id;
        
        for(var i = 0; i < productArray.length; i++){
            if(productArray[i].id === parseInt(productID)){
                // console.log("productArray", productArray[i]);
                // console.log("matched productID to event target ID");
                this.setState({
                    printSingle: true,
                    singleProduct: productArray[i]
                })
            }
        }
    }

    printAll(){
        this.setState({
            printSingle: false,
            printEditSingle: false
        })
    }

    editPage(event){  
        let productArray = this.state.userProducts;
        let productID = event.target.id;
        
        for(var i = 0; i < productArray.length; i++){
            if(productArray[i].id === parseInt(productID)){
                // console.log("productArray", productArray[i]);
                // console.log("matched productID to event target ID");
                this.setState({
                    printEditSingle: true,
                    singleEditProduct: productArray[i]
                })
            }
        }
    }

    render() {
        if (!this.state.printSingle && !this.state.printEditSingle){
            let objResult = this.state.userProducts;
            let productDataObject = objResult.map((data, index) => (
                <div key={index} className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="d-flex flex-row">
                        <div className="my-4 justify-content-center">
                            <img width={200} height={200} src={data.picture} alt="" />
                            <h3 id={data.id} className="my-2 readMore" onClick={this.printSingle}>Read More</h3>
                            <button id={data.id} className="btn-blue" onClick={this.editPage}>Edit Your Product</button>
                        </div>
                        <div className="">
                            <br />
                            <h2>{data.name}</h2>
                            <h3>{data.price}</h3>
                            <p className="my-4">{data.disc}</p>
                        </div>
                    </div>
                </div>
            ))
            return(
                <div>
                 <Jumbotron fluid>
                  <Container> 
                      <h2>Make a New Product</h2>
                      <h4>Click the Button below to post new data to sell!</h4>
                    <MakeProduct />
                  </Container>  
                 </Jumbotron>
                    <h3 className="mt-3 text-center">My Story Inventory</h3>
                    <div>{productDataObject}</div>
                </div>
            )
        } else if (this.state.printSingle && !this.state.printEditSingle) {
            let singleProduct = this.state.singleProduct;
            return(
                <div>
                    <Button onClick={this.printAll}>Back</Button>
                    <h1 className="gray-txt h3 text-center my-5 bold">Ben Atkins</h1>
                    <div className="d-flex mx-auto prod-overview">
                        <img className="prod-pic" src={singleProduct.picture} alt="" />
                        <div className="ml-5">
                            <h3>{singleProduct.name}</h3>
                            <h3>{singleProduct.price}</h3>
                            <p className="my-4">{singleProduct.disc}</p>
                        </div>
                    </div>
                </div>
            )
        } else if (!this.state.printSingle && this.state.printEditSingle) {
            let singleEditProduct = this.state.singleEditProduct;
            return (
                <div>
                    <Button onClick={this.printAll}>Back</Button>
                    <EditButton data={singleEditProduct.data} user={this.props.user} id={singleEditProduct.id} name={singleEditProduct.name} price={singleEditProduct.price} picture={singleEditProduct.picture} product={singleEditProduct.product} desc={singleEditProduct.disc} />
                </div>
            )
        }
    }
}

export default Seller;

// delete?