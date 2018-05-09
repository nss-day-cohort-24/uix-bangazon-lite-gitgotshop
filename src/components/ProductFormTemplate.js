import React, { Component } from 'react';
import './NewProduct.css';
import { Button, Form, Modal } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * Clicking 'Add New Product' launches a modal with inputs fields for entering product details/information.
 */


class ProductFormTemplate extends React.Component {
    constructor(props){
        super(props)
        this.state = {isModalOpen: false}
        this.closeModal = this.closeModal.bind(this);

    }

    makeProduct(){
        let data = {
          "name": this.refs.cityName.value,
          "product": "" ,
          "sellerID": this.props.user,
          "price": this.refs.price.value,
          "disc": this.refs.desc.value,
          "data": this.refs.data.value,
          "picture": "./Cities/Chicago.jpg"
        }
        console.log("DATA BUILDER", data);
    
    
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
            <div>
                <Button className="btn-primary" onClick={()=> this.openModal()}>New Product</Button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                <Form className="p-5">
                <div className="row">
                    <div className="d-flex flex-column mx-auto">
                        <h1 className="productH1 h1 text-center">Create&nbsp;New&nbsp;Product</h1>
                        <input className="my-3" ref="cityName" type="text" placeholder="City Name"/>
                        <input className="my-3" ref="price" type="text" placeholder="Price"/>
                        <input className="my-3" ref="desc" type="text" placeholder="Description"/>
                        <input className="my-3" ref="data" type="text" placeholder="Data Product"/>
                        <div className="flex-row mx-auto">
                            <Button className="my-3 mr-1 btn-red" onClick={this.closeModal}>Cancel</Button>                        
                            <Button className="my-3 ml-1 btn-blue" onClick={this.makeProduct.bind(this)}>Make New Product</Button>
                        </div>
                    </div>
                </div>
                </Form>
                </Modal>
            </div>
      </div>
    )
}
openModal() {
    this.setState({isModalOpen: true})
}
closeModal() {
    this.setState({ isModalOpen: false})
}
}

export default ProductFormTemplate;