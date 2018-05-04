import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Products extends Component {

    constructor(props){
        super(props);

        this.state = {
            productsLoaded: false,
            objResult: [],
            error: null,
            data: {}
        }
        this.getAnotherClicked=this.getAnotherClicked.bind(this);
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
            name: dataSet.name,
            product: dataSet.product,
            userId: "345-803-2588",
            data: "Velda_Witting@gmail.com",
            price: "9804 Simonis Ways",
            disc: 62207,
            id: 1
        });
        this.setState({
            productsLoaded: false,
            objResult: [],
            error: null
        },
        this.getProductData());

    }

    getProductData() {
        fetch("http://localhost:3000/Products")
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
                });
                console.log("ERRROR HERE");
            })
    }



    render() {
        let {error, productsLoaded, objResult} = this.state;
        // splice data to get set amount ... let productToSell = objResult.splice(5);

        if(error) {
            return (
                <div>
                    <div> Error: fck my life it's not working</div>
                </div>
            )
        } else if(!productsLoaded) {
            return <div><img src="http://scoundreltime.com/wp-content/uploads/2017/12/source.gif" width="100px"/></div>
        } else{


            let data = this.state.objResult;
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