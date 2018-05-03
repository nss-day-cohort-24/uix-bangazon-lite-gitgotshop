import React, {Component} from 'react';


class Generate extends Component {
loadProducts = () => {
    return new Promise((resolve, reject) => {  
       let request = new XMLHttpRequest(); 
       request.onload = function () {
          if (request.status === 200) { 
             var data = JSON.parse(request.responseText); 
             resolve(data); 
          } else {
             reject(new Error("XMLHttpRequest Error ", request.statusText));
          }
       };
       request.open('GET', "http://localhost:3000/profiles");
       request.send();
    });
 }
 
 loadProducts()
 .then((data) => {
    console.log("here are the temp products", data);
 });
}

export default Generate
 
//  const newCustomer = {
//     lastName: "Purple",
//     first_name: "Ale",
//     phone: "555-555-5555"
//  }
 
//  addCustomer = (custObj) => {
//     console.log("addCustomer", custObj);
//        return $.ajax({
//           url: `http://localhost:3000/customers/`,
//           type: 'POST',
//           data: custObj,
//           dataType: 'json'
//        }).done((newCustomer) => {
//           return newCustomer;
//        });
//     }
 
//  addCustomer(newCustomer)
//  .then((data) => {
//     console.log("added a new one", data);
//  });
 
//  editCustomer = (whichOne, obj) => {
//     console.log("editCustomer", whichOne);
//     return $.ajax({
//        url: `http://localhost:3000/customers/${whichOne}`,
//        type: 'PATCH',
//        data: obj,
//        dataType: 'json'
//     }).done((updatedCustomer) => {
//        return updatedCustomer;
//     });
//  }
 
//  changeObj = {
//     first_name: "Greg"
//  }
//  editCustomer(8,changeObj)
//  .then((data) => {
//     console.log("what here now", data);
//  });