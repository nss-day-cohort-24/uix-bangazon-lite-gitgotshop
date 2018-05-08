import React, { Component } from 'react';
// import Button from 'reactstrap';

class EditButton extends Component {
    constructor(props){
        super(props);
    }
    
    // EDIT  
editStuff = () => {
    let data = {
        "name": "Boston SUCKS",
        "picture": "./Cities/Boston.jpg",
        "product": "DU7DGCT82zHc9X9",
        "userId": "511-715-3988",
        "data": "Laurianne67@gmail.com",
        "price": "$8,000",
        "disc": "Boston is Massachusetts’ capital. Founded in 1630, it’s one of the oldest cities in the U.S. "
    }
  
    fetch('http://localhost:3000/products/2', {
      method: 'PUT', // or 'POST'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}
//     editDelivery(newEditProduct, id) {
//         Console.log("presses edit button");
//     return $.ajax({
//         url: `http://localhost:3000/Products/${id}`,
//         type: 'PUT',
//         data: JSON.stringify(newEditProduct)
//     }).done((data) => {
//         return data;
//     });
// }
    
render(){ 
    return(

        <button className="btn-blue" onClick={()=> this.editStuff()}>Edit Your Product</button>
    )}
}
export default EditButton;