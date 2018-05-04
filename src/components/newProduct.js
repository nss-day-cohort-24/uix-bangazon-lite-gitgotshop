import React, { Component } from 'react';
import faker from 'faker';

class MakeProduct extends Component {

    makeProduct(){
        let data = {
          "name": "HERE IS A NEW PRODUCT",
          "product": faker.internet.password() ,
          "userId": faker.phone.phoneNumberFormat(),
          "data": faker.internet.email(),
          "price": faker.address.streetAddress(),
          "disc": faker.random.number(),
        }
    
        console.log("Making Product");
    
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
    
      render() {
        return (
          <div>
           <button onClick={this.makeProduct.bind(this)}>Make New Product Randomly</button>
          </div>
        );
      }
    }

export default MakeProduct;