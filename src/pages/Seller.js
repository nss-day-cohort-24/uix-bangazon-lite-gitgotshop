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
            <div key={index} className="d-flex flex-row justify-content-center flex-wrap">
               <ProductCard src={Ben} name="read more" link="/SingleProduct" id="" />
               <div className="ml-5">
               <br/>
                   <h2>{data.name}</h2>
                   <h3>{data.price}</h3>
                   <p className="my-4">{data.disc}</p>
                   <div className="d-flex flex-row">
                   </div>                        
               </div>
           </div>
        ))
        return(
            <div>
                <div>{productDataObject}</div>
                <MakeProduct />
            </div>
        )
    }
}

export default Seller;