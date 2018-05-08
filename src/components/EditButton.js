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
    // let data = {
    //     "name": this.refs.cityName.value,
    //     "picture": this.props.picture,
    //     "product": this.refs.product.value,
    //     "sellerID": this.props.user,
    //     "data": this.props.data,
    //     "price": this.refs.price.value,
    //     "disc": this.refs.desc.value
    // }
  
    // fetch(`http://localhost:3000/products/${this.props.id}`, {
    //   method: 'PUT', // or 'POST'
    //   body: JSON.stringify(data), // data can be `string` or {object}!
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // }).then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));
    // console.log("DATA BUILD", data);
    console.log("DATA TEST", this.refs);
}
    
render(){ 
    return(
        <div>
            <Form>
                {/* <Input ref="cityName" type="text" defaultValue={this.props.name}/>
                <Input ref="price" type="text" defaultValue={this.props.price}/>
                <Input ref="product" type="text" defaultValue={this.props.product}/>
                <Input ref="desc" type="text" defaultValue={this.props.desc}/> */}
                <Input ref="testing" type="text"/> 
                <Button onClick={this.deleteStuff}>Remove</Button> 
                <Button onClick={this.editStuff}>Save Changes</Button>  
            </Form>
        </div>
    )}
}
export default EditButton;