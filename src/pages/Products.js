import React, { Component } from 'react';
import '../App.css';
import ProductComponent from '../components/ProductComponent.js';


class Home extends Component {
    render() {
        return (
            <div>
           
                <h1 className="gray-txt h3 text-center my-5 bold">Our Data-driven Products</h1>
                <div className="flex-products">
                    <ProductComponent />
                </div>
            </div>
        );
    }
}

export default Home;
