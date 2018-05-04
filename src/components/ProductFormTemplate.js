import React, { Component } from 'react';
import './NewProduct.css';
import { Button, Form, FormGroup, Input, Modal } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductFormTemplate extends Component {

    makeProduct(){
        let data = {
          "name": this.refs.cityName.value,
          "product": "" ,
          "sellerID": 0,
          "price": this.refs.price.value,
          "desc": this.refs.desc.value,
          "data": this.refs.data.value
        }
    
    
        fetch('http://localhost:3000/Products', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
      }

    render(){ 
        return(
        <div className="container make-product-div">
        <Form>
            <div className="row">
              <div className="col-6">

                
              <h1 className="productH1">Create New Product</h1>
              <Input ref="cityName" type="text" placeholder="City Name"/>
              <Input ref="price" type="text" placeholder="Price"/>
              <Input ref="desc" type="text" placeholder="Description"/>
              <Input ref="data" type="text" placeholder="Data Product"/>
              <Button onClick={this.makeProduct.bind(this)}>Make New Product</Button>
            </div>
            </div>
        </Form>
      </div>
    )
}}

export default ProductFormTemplate;