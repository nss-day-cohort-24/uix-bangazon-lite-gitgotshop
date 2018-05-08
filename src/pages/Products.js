import React, { Component } from 'react';
import '../App.css';
import { Row } from 'reactstrap';
import ProductComponent from '../components/ProductComponent';


class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="gray-txt h3 text-center my-5 bold">Our Data-driven Products</h1>
                <div className="d-flex flex-wrap ">
                
                    <ProductComponent />
                </div>
            </div>
        );
    }
}

export default Home;
