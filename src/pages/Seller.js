import React, { Component } from 'react';
import MakeProduct from '../components/NewProduct.js';
import ProductCard from '../components/ProductCard.js';
import Ben from '../img/Products/Ben.png';
import { Jumbotron, Container } from 'reactstrap';

class Seller extends Component {
    constructor(props){
        super(props);

        this.state = {
            userProducts: []
        }
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

    render() {
        let objResult = this.state.userProducts;
        let productDataObject = objResult.map((data, index) => (
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <ProductCard src={Ben} link="/SingleProduct" id="" name={data.name} price={data.price} disc={data.disc} />
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
    }
}

export default Seller;