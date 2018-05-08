import React, { Component } from 'react';
import MakeProduct from '../components/newProduct.js';
import ProductCard from '../components/ProductCard.js';
import Ben from '../img/Products/Ben.png';

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
                <h1 className="gray-txt h3 text-center my-5 bold">My Store Inventory</h1>
                <div>{productDataObject}</div>
                <MakeProduct />
            </div>
        )
    }
}

export default Seller;