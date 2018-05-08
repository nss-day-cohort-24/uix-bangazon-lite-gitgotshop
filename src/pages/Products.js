import React, { Component } from 'react';
import '../App.css';
import { Row } from 'reactstrap';
import ProductComponent from '../components/ProductComponent';


class Home extends Component {
      
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         user: ""
    //     }
    // }

    // componentDidMount() {
    //     this.setState({
    //         user: this.props.user
    //     });
    // }

    
    render() {
        return (
    
            <div>
                <h1 className="gray-txt h3 text-center my-5 bold">Our Data-driven Products</h1>
                <div>
                    <ProductComponent user={this.props.user} className="product-card"/>
                </div>

            </div>
        );
    }
}

export default Home;
