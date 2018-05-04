import React, { Component } from 'react';

class Products extends Component {

    constructor(props){
        super(props);

        this.state = {
            productsLoaded: false,
            objResult: [],
            error: null,
            data: {}
        }
        
    }

    componentDidMount() {
        console.log("did mount");
        this.getProductData();
    }

    getAnotherClicked(e) {
        
        console.log("getAnotherClicked", this.props);

        let dataSet = this.state.objResult;

//.PUSH DATA IS SUBJECT TO THE TABLE DATA NEEDED FOR STATE 

        let selectedDataSet;
        dataSet.push({
            id: dataSet.id,
            region: dataSet.region,
            seller: dataSet.sellerID,
            buyer: dataSet.buyerID,
            product: dataSet.productID,
            description: dataSet.description
        });
        this.setState({
            productsLoaded: false,
            objResult: [],
            error: null
        },
        this.getProductData());

    }



    getProductData() {
        fetch("localhost:3000/products")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    productsLoaded: true,
                    objResult: result
                });
                console.log("product data object: ", this.setState.objResult);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                })
            })
    }



    render() {
        let {error, productsLoaded, objResult} = this.state;
        // splice data to get set amount ... let productToSell = objResult.splice(5);

        if(error) {
            return (
                <div>
                    <div> Error: {error.message}</div>
                </div>
            )
        } else if(!productsLoaded) {
            return <div><img src="http://scoundreltime.com/wp-content/uploads/2017/12/source.gif" width="100px"/></div>
        } else{


// .MAP THE OBJRESULT 
            let productDataObject = objResult.map((data, index) => (

                <div>
                <h1 className="gray-txt h3 text-center my-5 bold">{data.region}</h1>
                <div className="d-flex mx-auto prod-overview">
                    <img className="prod-pic" src={data.avatar} alt="" />
                    <div className="ml-5">
                        <h3>sold by: {data.seller}</h3>
                        <h3>{data.price}</h3>
                        <p className="my-4">{data.description}</p>
                        <div className="d-flex flex-row">
                            <Button class="btn-red mr-2" link="" name="Add to cart" />
                            <Button class="btn-blue ml-2" link="" name="Add to wishlist" />
                        </div>                        
                    </div>
                </div>
            </div>
            ))
            return(
                <div>{productDataObject}</div>
            )
        }
    }

}

export default Products;