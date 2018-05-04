import React, { Component } from 'react';
import faker from 'faker';

class MakeProduct extends Component {

////// PRODUCT FACTORY /////////////
    makeProduct(){
        let data = {
          "name": this.refs.cityName.value,
          "product": "" ,
          "sellerID": 0,
          "price": this.refs.price.value,
          "desc": this.refs.desc.value,
          "data": this.refs.data.value
        }
    
    
    //   inputting(){
    //     let data = {
    //       "name": this.refs.cityName.value,
    //       "price": this.refs.price.value,
    //       "desc": this.refs.desc.value,
    //       "sellerID": 0,
    //       "data": "Nash.json"
    //     }
    
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

    /////////// RENDER TO DOM   //////////////////////

      render() {
        return (
            <div>
                <input ref="cityName" type="text" placeholder="City Name"/>
                <input ref="price" type="text" placeholder="Price"/>
                <input ref="desc" type="text" placeholder="Description"/>
                <input ref="data" type="text" placeholder="Data Product"/>
                <button onClick={this.makeProduct.bind(this)}>Make New Product Randomly</button>
            </div>
        );
      }
    }

export default MakeProduct;