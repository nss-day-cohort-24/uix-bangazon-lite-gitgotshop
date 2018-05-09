import React, { Component } from 'react';
import faker from 'faker';
import './NewProduct.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductFormTemplate from './ProductFormTemplate.js';


class MakeProduct extends Component {

////// PRODUCT FACTORY /////////////


    /////////// RENDER TO DOM   //////////////////////

      render() {
        return (
            <ProductFormTemplate />
        );
      }
    }

export default MakeProduct;