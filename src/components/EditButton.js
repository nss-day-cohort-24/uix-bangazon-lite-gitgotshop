import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
// import Button from 'reactstrap';

class EditButton extends Component {
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.refs.cityName.value = this.props.name;
    //     this.refs.product.value = this.props.product;
    //     this.refs.price.value = this.props.price;
    //     this.refs.desc.value = this.props.desc;
    // }

deleteStuff = () => {
    return fetch(`http://localhost:3000/products/${this.props.id}`, {
        method: 'DELETE'
    })
    .then(response => response.json());
}

editStuff = () => {
    let data = {
        "name": this.refs.cityName.value,
        "picture": this.props.picture,
        "sellerID": this.props.user,
        "data": this.props.data,
        "price": this.refs.price.value,
        "disc": this.refs.desc.value
    }
  
    fetch(`http://localhost:3000/products/${this.props.id}`, {
      method: 'PUT', // or 'POST'
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
        <div>
            <h1 className="gray-txt h3 text-center my-5 bold mt-0">{this.props.name}</h1>
            <Form>
            <div className="container">

                <div className="row">
                        <div className="col text-right edit-photo"> 
                            <img width={200} height={200} src={this.props.picture} alt="productimage"/>
                        </div>
                        <div className="col">
                            <div><input ref="cityName" type="text" defaultValue={this.props.name}/></div>
                            <div><input className="mt-2" ref="price" type="text" defaultValue={this.props.price}/></div>
                            <div><textarea className="mt-2" ref="desc" type="text" style={{width: '300px', height: '150px'}}>{this.props.desc}</textarea></div>
                            <Button className="btn-blue mr-5" onClick={this.deleteStuff}>Remove</Button> 
                            <Button className="btn-red ml-4" onClick={this.editStuff}>Save Changes</Button>  
                        </div>
                </div>
            </div>
            </Form>
        </div>
    )}
}
export default EditButton;